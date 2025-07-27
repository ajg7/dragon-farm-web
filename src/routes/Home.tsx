import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Dragon Farm</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Manage your dragon collection and farm operations
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-2">Dragon Collection</h2>
          <p className="text-muted-foreground mb-4">View and manage your dragon companions</p>
          <Button asChild>
            <Link to="/dashboard">View Dashboard</Link>
          </Button>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-2">Farm Management</h2>
          <p className="text-muted-foreground mb-4">Optimize your dragon farm operations</p>
          <Button variant="outline" asChild>
            <Link to="/login">Login to Continue</Link>
          </Button>
        </Card>
      </div>
    </div>
  );
}
