
import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { user, login } = useAuth();
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
    setIsLoading(true);

    try {
      await login(email, password);
      toast({
        title: "Login successful!",
        description: "Welcome back to TechClub",
      });
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Invalid email or password. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <div className="container max-w-md mx-auto px-4 pt-32 pb-16">
        <div className="space-y-6 bg-tech-muted p-8 rounded-xl shadow-lg border border-border">
          <div className="text-center">
            <h1 className="text-2xl font-bold tracking-tight">Welcome back</h1>
            <p className="text-muted-foreground mt-2">Login to access your TechClub account</p>
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
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
              <div className="flex justify-between items-center">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <Link to="/forgot-password" className="text-xs text-tech-accent-blue hover:underline">
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-tech-accent-blue hover:bg-tech-accent-blue/90"
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </Button>
          </form>

          <div className="text-center text-sm">
            <p className="text-muted-foreground">
              Don't have an account?{' '}
              <Link to="/join" className="text-tech-accent-blue hover:underline">
                Join now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
