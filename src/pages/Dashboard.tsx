
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';

export default function Dashboard() {
  const { user, logout } = useAuth();

  useEffect(() => {
    if (!user) return;
    console.log('User logged in:', user);
  }, [user]);

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (user.role === 'admin') {
    return <Navigate to="/admin/dashboard" />;
  }

  if (user.role === 'coreteam') {
    return <Navigate to="/team/dashboard" />;
  }

  return (
    <Layout>
      <div className="container max-w-4xl mx-auto px-4 pt-32 pb-16">
        <div className="bg-tech-muted p-8 rounded-xl shadow-lg border border-border">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold tracking-tight">Aspirant Dashboard</h1>
            <Button variant="outline" onClick={logout}>
              Log out
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-tech-darker p-6 rounded-lg border border-border">
              <h2 className="text-lg font-medium mb-4">Your Profile</h2>
              <div className="space-y-2">
                <p><span className="text-muted-foreground">Name:</span> {user.name}</p>
                <p><span className="text-muted-foreground">Email:</span> {user.email}</p>
                <p><span className="text-muted-foreground">Role:</span> Aspirant</p>
              </div>
            </div>

            <div className="bg-tech-darker p-6 rounded-lg border border-border">
              <h2 className="text-lg font-medium mb-4">Referral Program</h2>
              <div className="space-y-4">
                <div>
                  <span className="text-muted-foreground">Your Points:</span>
                  <span className="text-2xl font-bold ml-2 text-tech-accent-green">{user.points || 0}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Your Referral Code:</span>
                  <span className="ml-2 font-mono bg-tech-dark px-2 py-1 rounded">{user.referralCode}</span>
                </div>
                <Button className="w-full bg-tech-accent-purple hover:bg-tech-accent-purple/90">
                  Invite Friends
                </Button>
              </div>
            </div>
            
            <div className="bg-tech-darker p-6 rounded-lg border border-border">
              <h2 className="text-lg font-medium mb-4">Registered Events</h2>
              <p className="text-muted-foreground">You haven't registered for any events yet.</p>
              <Button className="mt-4 w-full">Browse Events</Button>
            </div>
            
            <div className="bg-tech-darker p-6 rounded-lg border border-border">
              <h2 className="text-lg font-medium mb-4">Rewards</h2>
              <p className="text-muted-foreground">Earn more points to unlock rewards!</p>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between">
                  <span>Event Discount</span>
                  <span>50 points</span>
                </div>
                <div className="flex justify-between">
                  <span>Club T-Shirt</span>
                  <span>200 points</span>
                </div>
                <div className="flex justify-between">
                  <span>Workshop Pass</span>
                  <span>300 points</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
