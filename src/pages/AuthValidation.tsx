import { useState, type FormEvent } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { H1, H5, H4 } from "@/components/ui/Header";
import Input from "@/components/ui/Input/input";
import Separator from "@/components/ui/Separator/separator";
import { P } from "@/components/ui/Text";
import { Checkbox } from "@/components/ui/Checkboxes";
import { Button, LinkButton } from "@/components/ui/Buttons";
import { useLogin } from "@/api/mutations/useLogin";

const AuthValidation = () => {
  const { mutate, isPending, isSuccess, error } = useLogin();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // remember-me preference placeholder (not yet wired to persistence layer)
  const [rememberChecked, setRememberChecked] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email || !password || isPending) return;
    mutate(
      { email, password },
      {
        onSuccess: () => {
          // Future: navigate to a protected route (e.g., /dashboard) once it exists
          // navigate({ to: "/dashboard" });
        },
      }
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dragon-deep-purple to-dragon-dark-purple p-8 space-y-6">
      <H1 align="center" className="text-text-inverse">
        Dragon Farm
      </H1>
      <H5 align="center" className="text-text-accent">
        Enter the mystical realm of dragons
      </H5>
      <Card className="max-w-md mx-auto p-6 bg-white backdrop-blur-lg border border-border rounded-lg shadow-lg">
        <CardHeader className="text-center">
          <CardTitle>
            <H4>Welcome Back</H4>
          </CardTitle>
          <CardDescription>Sign in to your dragon farm</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              className="mb-2"
              type="email"
              title="Email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              title="Password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="remember-me"
                  label="Remember me"
                  size="sm"
                  variant="primary"
                  labelVariant="muted"
                  checked={rememberChecked}
                  onChange={() => setRememberChecked((r) => !r)}
                />
              </div>
              <a href="#" className="text-sm text-text-muted">
                Forgot password?
              </a>
            </div>
            {error && (
              <P size="sm" variant="danger">
                {error instanceof Error ? error.message : "Login failed"}
              </P>
            )}
            {isSuccess && (
              <P size="sm" variant="success" className="text-emerald-600">
                Logged in successfully!
              </P>
            )}
            <Button
              variant="mystical"
              fullWidth
              className="mt-2"
              type="submit"
              disabled={isPending || !email || !password}
            >
              {isPending ? "Signing In..." : "Sign In"}
            </Button>
          </form>
          <Separator text="or" />
          <Button variant="destructive" fullWidth className="mb-2" type="button">
            Sign in with Google
          </Button>
          {/* Example alt provider button; style maybe inconsistent (outline + filled). Keeping as provided. */}
          <Button
            variant="outline"
            fullWidth
            type="button"
            className="border-blue-600 text-blue-600 bg-blue-600 text-white"
          >
            Sign in with Facebook
          </Button>
          <P size="sm" align="center" variant="muted" className="mt-4">
            New to Dragon Farm?{" "}
            <LinkButton variant="link-emerald" href="/signup">
              Sign Up
            </LinkButton>
          </P>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthValidation;
