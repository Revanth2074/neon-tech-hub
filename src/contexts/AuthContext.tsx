
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users for demo purposes
const mockUsers: User[] = [
  {
    id: '1',
    email: 'admin@techclub.com',
    name: 'Admin User',
    role: 'admin',
  },
  {
    id: '2',
    email: 'team@techclub.com',
    name: 'Core Team Member',
    role: 'coreteam',
  },
  {
    id: '3',
    email: 'user@techclub.com',
    name: 'Regular User',
    role: 'aspirant',
    points: 100,
    referralCode: 'USER123',
  },
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Check if user is logged in on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('techClubUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Find user in mock data (in a real app, this would be an API call)
      const foundUser = mockUsers.find(u => u.email === email);
      
      if (!foundUser) {
        throw new Error('Invalid credentials');
      }
      
      // In a real app, you would verify the password here
      // For demo purposes, we'll just accept any password
      
      setUser(foundUser);
      localStorage.setItem('techClubUser', JSON.stringify(foundUser));
      
      // Redirect based on role
      if (foundUser.role === 'admin') {
        navigate('/admin/dashboard');
      } else if (foundUser.role === 'coreteam') {
        navigate('/team/dashboard');
      } else {
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (email: string, password: string, name: string, role: UserRole) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Check if user already exists
      if (mockUsers.some(u => u.email === email)) {
        throw new Error('User already exists');
      }
      
      // Create new user (in a real app, this would be an API call)
      const newUser: User = {
        id: (mockUsers.length + 1).toString(),
        email,
        name,
        role,
        points: role === 'aspirant' ? 0 : undefined,
        referralCode: role === 'aspirant' ? `USER${Math.floor(Math.random() * 1000)}` : undefined,
      };
      
      // In a real app, you would store the user in the database here
      mockUsers.push(newUser);
      
      setUser(newUser);
      localStorage.setItem('techClubUser', JSON.stringify(newUser));
      
      // Redirect based on role
      if (newUser.role === 'admin') {
        navigate('/admin/dashboard');
      } else if (newUser.role === 'coreteam') {
        navigate('/team/dashboard');
      } else {
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Signup error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('techClubUser');
    navigate('/login');
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
