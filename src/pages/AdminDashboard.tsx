
import { Navigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { 
  Users, BarChart3, CalendarDays, FileText, 
  Award, Settings, UserPlus, UserX 
} from 'lucide-react';

export default function AdminDashboard() {
  const { user, logout } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (user.role !== 'admin') {
    return <Navigate to="/dashboard" />;
  }

  const stats = [
    { label: 'Total Members', value: '156', icon: Users },
    { label: 'Active Events', value: '8', icon: CalendarDays },
    { label: 'Projects', value: '12', icon: FileText },
    { label: 'Referrals', value: '43', icon: Award },
  ];

  return (
    <Layout>
      <div className="container max-w-7xl mx-auto px-4 pt-32 pb-16">
        <div className="bg-tech-muted p-8 rounded-xl shadow-lg border border-border">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold tracking-tight">Admin Dashboard</h1>
            <Button variant="outline" onClick={logout}>
              Log out
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-tech-darker p-6 rounded-lg border border-border">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-tech-dark">
                    <stat.icon className="h-6 w-6 text-tech-accent-blue" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">{stat.label}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-tech-darker p-6 rounded-lg border border-border lg:col-span-2">
              <h2 className="text-lg font-medium mb-4">Recent Activities</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-tech-dark transition-colors">
                  <UserPlus className="h-5 w-5 text-tech-accent-green mt-0.5" />
                  <div>
                    <p>New member joined: <span className="font-medium">Sarah Chen</span></p>
                    <p className="text-sm text-muted-foreground">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-tech-dark transition-colors">
                  <CalendarDays className="h-5 w-5 text-tech-accent-purple mt-0.5" />
                  <div>
                    <p>New event created: <span className="font-medium">AI Workshop</span></p>
                    <p className="text-sm text-muted-foreground">5 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-tech-dark transition-colors">
                  <UserX className="h-5 w-5 text-destructive mt-0.5" />
                  <div>
                    <p>Member removed: <span className="font-medium">John Adams</span></p>
                    <p className="text-sm text-muted-foreground">Yesterday</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-tech-darker p-6 rounded-lg border border-border">
              <h2 className="text-lg font-medium mb-4">Admin Tools</h2>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <UserPlus className="mr-2 h-4 w-4" />
                  Add Core Team Member
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <CalendarDays className="mr-2 h-4 w-4" />
                  Manage Events
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="mr-2 h-4 w-4" />
                  Manage Projects
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Award className="mr-2 h-4 w-4" />
                  Referral Settings
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <BarChart3 className="mr-2 h-4 w-4" />
                  Analytics
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Settings className="mr-2 h-4 w-4" />
                  Website Settings
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
