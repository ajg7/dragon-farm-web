import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { H1, H5 } from "@/components/ui/Header";
import Input from "@/components/ui/Input/input";
import Separator from "@/components/ui/Separator/separator";
import { P } from "@/components/ui/Text";
import { Checkbox } from "@/components/ui/Checkboxes";
import { Button, LinkButton } from "@/components/ui/Buttons";

const AuthValidation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dragon-deep-purple to-dragon-dark-purple p-8 space-y-6">
      <H1 align="center" className="text-text-inverse">
        Dragon Farm
      </H1>
      <H5 align="center" className="text-text-accent">
        Enter the mystical realm of dragons
      </H5>
      <Card className="max-w-md mx-auto p-6 bg-white backdrop-blur-lg border border-border rounded-lg shadow-lg">
        <CardHeader className="space-y-1 text-center">
          <CardTitle>Welcome Back</CardTitle>
          <CardDescription>Sign in to your dragon farm</CardDescription>
        </CardHeader>
        <CardContent>
          <Input
            className="mb-4"
            type="email"
            title="Email"
            placeholder="Enter your email address"
          />
          <Input type="password" title="Password" placeholder="Enter your password" />
          <div className="flex items-center justify-between mt-4">
            <Checkbox
              id="remember-me"
              label="Remember me"
              size="sm"
              variant="primary"
              labelVariant="muted"
            />
            <a href="#" className="text-sm text-text-muted">
              Forgot password?
            </a>
          </div>
          <Button variant="mystical" fullWidth className="mt-4">
            Sign In
          </Button>
          <Separator text="or" />
          <Button variant="destructive" fullWidth className="mb-2">
            Sign in with Google
          </Button>
          <Button
            variant="outline"
            fullWidth
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
