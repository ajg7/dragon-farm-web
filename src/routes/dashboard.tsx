import { createFileRoute, redirect, useRouter } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { authState } from "../authState";

export const Route = createFileRoute("/dashboard")({
  beforeLoad: ({ location }) => {
    // If not authenticated, redirect to login
    if (!authState.isAuthenticated) {
      throw redirect({
        to: "/login",
        search: {
          redirect: location.href,
        },
      });
    }
  },
  component: Dashboard,
});

function Dashboard() {
  const router = useRouter();

  const handleLogout = () => {
    authState.logout();
    router.navigate({ to: "/" });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, {authState.user?.name}!</p>
        </div>
        <Button variant="outline" onClick={handleLogout}>
          Logout
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-2">Dragons</h2>
          <p className="text-3xl font-bold text-primary">12</p>
          <p className="text-sm text-muted-foreground">Active dragons in your farm</p>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-2">Dragon Eggs</h2>
          <p className="text-3xl font-bold text-secondary">5</p>
          <p className="text-sm text-muted-foreground">Eggs ready to hatch</p>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-2">Gold Collected</h2>
          <p className="text-3xl font-bold text-yellow-600">1,250</p>
          <p className="text-sm text-muted-foreground">Gold pieces earned today</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span>Fire Dragon hatched</span>
              <span className="text-sm text-muted-foreground">2 hours ago</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Collected 150 gold</span>
              <span className="text-sm text-muted-foreground">4 hours ago</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Fed all dragons</span>
              <span className="text-sm text-muted-foreground">6 hours ago</span>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <Button className="w-full justify-start">🥚 Breed New Dragons</Button>
            <Button variant="outline" className="w-full justify-start">
              🍖 Feed All Dragons
            </Button>
            <Button variant="outline" className="w-full justify-start">
              💰 Collect Gold
            </Button>
            <Button variant="outline" className="w-full justify-start">
              🏠 Upgrade Farm
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
