
import { Navigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { 
  Users, CalendarDays, FileText, CheckCircle2,
  XCircle, Edit, Plus
} from 'lucide-react';

export default function TeamDashboard() {
  const { user, logout } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (user.role !== 'coreteam') {
    return <Navigate to="/dashboard" />;
  }

  const pendingApprovals = [
    { id: 1, name: 'Alex Johnson', email: 'alex@example.com', type: 'Event Registration' },
    { id: 2, name: 'Maria Garcia', email: 'maria@example.com', type: 'Membership' },
    { id: 3, name: 'James Wong', email: 'james@example.com', type: 'Event Registration' },
  ];

  return (
    <Layout>
      <div className="container max-w-7xl mx-auto px-4 pt-32 pb-16">
        <div className="bg-tech-muted p-8 rounded-xl shadow-lg border border-border">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold tracking-tight">Core Team Dashboard</h1>
            <Button variant="outline" onClick={logout}>
              Log out
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-tech-darker p-6 rounded-lg border border-border">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-tech-dark">
                  <CalendarDays className="h-6 w-6 text-tech-accent-purple" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Manage Events</p>
                  <p className="text-xl font-bold">8 Active</p>
                </div>
              </div>
              <div className="mt-4 flex space-x-2">
                <Button size="sm" className="flex-1 bg-tech-accent-purple hover:bg-tech-accent-purple/90">
                  <Plus className="h-4 w-4 mr-1" /> New
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  <Edit className="h-4 w-4 mr-1" /> Edit
                </Button>
              </div>
            </div>

            <div className="bg-tech-darker p-6 rounded-lg border border-border">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-tech-dark">
                  <FileText className="h-6 w-6 text-tech-accent-blue" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Manage Projects</p>
                  <p className="text-xl font-bold">12 Projects</p>
                </div>
              </div>
              <div className="mt-4 flex space-x-2">
                <Button size="sm" className="flex-1 bg-tech-accent-blue hover:bg-tech-accent-blue/90">
                  <Plus className="h-4 w-4 mr-1" /> New
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  <Edit className="h-4 w-4 mr-1" /> Edit
                </Button>
              </div>
            </div>

            <div className="bg-tech-darker p-6 rounded-lg border border-border">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-tech-dark">
                  <Users className="h-6 w-6 text-tech-accent-green" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Referral Program</p>
                  <p className="text-xl font-bold">43 Referrals</p>
                </div>
              </div>
              <div className="mt-4">
                <Button size="sm" className="w-full bg-tech-accent-green hover:bg-tech-accent-green/90">
                  Manage Program
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-tech-darker p-6 rounded-lg border border-border mb-6">
            <h2 className="text-lg font-medium mb-4">Pending Approvals</h2>
            {pendingApprovals.length > 0 ? (
              <div className="space-y-4">
                {pendingApprovals.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-tech-dark transition-colors">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-muted-foreground">{item.email} • {item.type}</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="text-tech-accent-green border-tech-accent-green hover:bg-tech-accent-green/10">
                        <CheckCircle2 className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="text-destructive border-destructive hover:bg-destructive/10">
                        <XCircle className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground">No pending approvals at this time.</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-tech-darker p-6 rounded-lg border border-border">
              <h2 className="text-lg font-medium mb-4">Quick Actions</h2>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="justify-start">
                  <Plus className="mr-2 h-4 w-4" /> New Event
                </Button>
                <Button variant="outline" className="justify-start">
                  <Plus className="mr-2 h-4 w-4" /> New Project
                </Button>
                <Button variant="outline" className="justify-start">
                  <Plus className="mr-2 h-4 w-4" /> New Blog Post
                </Button>
                <Button variant="outline" className="justify-start">
                  <Users className="mr-2 h-4 w-4" /> View Members
                </Button>
              </div>
            </div>

            <div className="bg-tech-darker p-6 rounded-lg border border-border">
              <h2 className="text-lg font-medium mb-4">Upcoming Events</h2>
              <div className="space-y-3">
                <div className="flex justify-between p-2 hover:bg-tech-dark rounded-lg transition-colors">
                  <div>
                    <p className="font-medium">AI Workshop</p>
                    <p className="text-sm text-muted-foreground">Oct 15, 2023 • 32 Registered</p>
                  </div>
                  <Button size="sm" variant="outline">
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex justify-between p-2 hover:bg-tech-dark rounded-lg transition-colors">
                  <div>
                    <p className="font-medium">Robotics Demo</p>
                    <p className="text-sm text-muted-foreground">Oct 22, 2023 • 18 Registered</p>
                  </div>
                  <Button size="sm" variant="outline">
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
