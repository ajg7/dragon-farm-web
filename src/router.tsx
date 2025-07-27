import { createRootRoute, createRoute, createRouter, redirect } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Root from "./routes/Root";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Dashboard from "./routes/Dashboard";

// Auth context/state - in a real app, this would be more sophisticated
export const authState = {
  isAuthenticated: false,
  user: null as { id: string; name: string; email: string } | null,
  login: (email: string, password: string) => {
    // Simulate login - in a real app, this would make an API call
    if (email && password) {
      authState.isAuthenticated = true;
      authState.user = { id: "1", name: "Dragon Farmer", email };
      return true;
    }
    return false;
  },
  logout: () => {
    authState.isAuthenticated = false;
    authState.user = null;
  },
};

// Root route
const rootRoute = createRootRoute({
  component: () => (
    <>
      <Root />
      <TanStackRouterDevtools />
    </>
  ),
});

// Public routes
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: Login,
  beforeLoad: () => {
    // If already authenticated, redirect to dashboard
    if (authState.isAuthenticated) {
      throw redirect({
        to: "/dashboard",
      });
    }
  },
});

// Protected routes
const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dashboard",
  component: Dashboard,
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
});

// Create the route tree
const routeTree = rootRoute.addChildren([indexRoute, loginRoute, dashboardRoute]);

// Create the router
export const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
