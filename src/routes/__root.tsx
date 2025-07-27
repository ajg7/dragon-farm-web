import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { authState } from "../authState";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="min-h-screen bg-background">
        <nav className="border-b px-4 py-2">
          <div className="container mx-auto flex items-center justify-between">
            <Link to="/" className="text-xl font-bold hover:text-primary">
              🐲 Dragon Farm
            </Link>
            <div className="flex items-center gap-4">
              <Link to="/" className="hover:text-primary">
                Home
              </Link>
              {authState.isAuthenticated ? (
                <>
                  <Link to="/dashboard" className="hover:text-primary">
                    Dashboard
                  </Link>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      authState.logout();
                      window.location.href = "/";
                    }}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <Button asChild variant="outline" size="sm">
                  <Link to="/login">Login</Link>
                </Button>
              )}
            </div>
          </div>
        </nav>
        <main className="container mx-auto px-4 py-8">
          <Outlet />
        </main>
      </div>
      <TanStackRouterDevtools />
    </>
  ),
});
