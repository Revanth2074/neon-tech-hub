
import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

export default function Join() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { user, signup } = useAuth();
  const { toast } = useToast();

  // Redirect if already logged in
  if (user) {
    if (user.role === 'admin') {
      return <Navigate to="/admin/dashboard" />;
    } else if (user.role === 'coreteam') {
      return <Navigate to="/team/dashboard" />;
    } else {
      return <Navigate to="/dashboard" />;
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setIsLoading(true);

    try {
      // Default role for sign up is 'aspirant'
      await signup(email, password, name, 'aspirant');
      toast({
        title: "Account created!",
        description: "Welcome to TechClub. Your account has been created successfully.",
      });
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Could not create account. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <div className="container max-w-md mx-auto px-4 pt-32 pb-16">
        <div className="space-y-6 bg-tech-muted p-8 rounded-xl shadow-lg border border-border">
          <div className="text-center">
            <h1 className="text-2xl font-bold tracking-tight">Join TechClub</h1>
            <p className="text-muted-foreground mt-2">Create a new account</p>
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Full Name
              </label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                minLength={6}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="text-sm font-medium">
                Confirm Password
              </label>
              <Input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                required
                minLength={6}
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-tech-accent-purple hover:bg-tech-accent-purple/90"
              disabled={isLoading}
            >
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </Button>
          </form>

          <div className="text-center text-sm">
            <p className="text-muted-foreground">
              Already have an account?{' '}
              <Link to="/login" className="text-tech-accent-blue hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
