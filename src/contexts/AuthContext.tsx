
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Session, User as SupabaseUser } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/components/ui/use-toast';

export type UserRole = 'admin' | 'coreteam' | 'aspirant';

interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  points?: number;
  referralCode?: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string, role: UserRole) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [session, setSession] = useState<Session | null>(null);
  const navigate = useNavigate();

  // Function to fetch user profile data from Supabase
  const fetchUserProfile = async (supabaseUser: SupabaseUser) => {
    try {
      // Fetch the user's profile from the profiles table
      const { data: profileData, error: profileError } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', supabaseUser.id)
        .single();

      if (profileError) {
        console.error('Error fetching profile:', profileError);
        return null;
      }

      // If the user is an aspirant, fetch the aspirant-specific data
      let points = undefined;
      let referralCode = undefined;

      if (profileData.role === 'aspirant') {
        const { data: aspirantData, error: aspirantError } = await supabase
          .from('aspirant_profiles')
          .select('*')
          .eq('id', supabaseUser.id)
          .single();

        if (!aspirantError && aspirantData) {
          points = aspirantData.points;
          referralCode = aspirantData.referral_code;
        }
      }

      return {
        id: profileData.id,
        email: profileData.email,
        name: profileData.name,
        role: profileData.role,
        points,
        referralCode,
      };
    } catch (error) {
      console.error('Error in fetchUserProfile:', error);
      return null;
    }
  };

  // Check if user is logged in on auth state change
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, newSession) => {
        setSession(newSession);
        setIsLoading(true);

        if (event === 'SIGNED_IN' && newSession) {
          const userData = await fetchUserProfile(newSession.user);
          setUser(userData);
        } else if (event === 'SIGNED_OUT') {
          setUser(null);
        }

        setIsLoading(false);
      }
    );

    // Get initial session
    const initializeAuth = async () => {
      try {
        setIsLoading(true);
        const { data: { session: currentSession } } = await supabase.auth.getSession();
        setSession(currentSession);

        if (currentSession?.user) {
          const userData = await fetchUserProfile(currentSession.user);
          setUser(userData);
        }
      } catch (error) {
        console.error('Error initializing auth:', error);
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      if (data.user) {
        const userData = await fetchUserProfile(data.user);
        
        if (!userData) {
          throw new Error('User profile not found');
        }
        
        setUser(userData);
        
        // Redirect based on role
        if (userData.role === 'admin') {
          navigate('/admin/dashboard');
        } else if (userData.role === 'coreteam') {
          navigate('/team/dashboard');
        } else {
          navigate('/dashboard');
        }
      }
    } catch (error: any) {
      console.error('Login error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (email: string, password: string, name: string, role: UserRole = 'aspirant') => {
    setIsLoading(true);
    try {
      // Register the user with Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (authError) throw authError;
      
      if (!authData.user) {
        throw new Error('User registration failed');
      }

      // Create the user profile in the profiles table using the auth's service role
      // This is important to bypass RLS during initial profile creation
      const { error: profileError } = await supabase
        .from('profiles')
        .insert({
          id: authData.user.id,
          email,
          name,
          role,
        });

      if (profileError) {
        console.error('Profile creation error:', profileError);
        throw profileError;
      }

      // Wait a moment for the trigger to create the aspirant profile if needed
      if (role === 'aspirant') {
        // Small delay to allow the trigger to complete
        await new Promise(resolve => setTimeout(resolve, 500));
      }

      // Fetch the complete user data
      const userData = await fetchUserProfile(authData.user);
      setUser(userData);
      
      // Redirect based on role
      if (role === 'admin') {
        navigate('/admin/dashboard');
      } else if (role === 'coreteam') {
        navigate('/team/dashboard');
      } else {
        navigate('/dashboard');
      }

      toast({
        title: "Account created successfully!",
        description: "Welcome to TechClub.",
      });
    } catch (error: any) {
      console.error('Signup error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      
      setUser(null);
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
