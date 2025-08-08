import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { H1, H5 } from "@/components/ui/Header";
import Input from "@/components/ui/Input/input";
import Separator from "@/components/ui/Separator/separator";

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
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" id="remember-me" />
              <label htmlFor="remember-me" className="text-sm text-text-muted">
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm text-text-muted">
              Forgot password?
            </a>
          </div>
          <button className="w-full px-4 py-2 mt-4 text-white bg-mystical rounded-md hover:bg-accent-dark transition-colors">
            Sign In
          </button>
          <Separator text="or" />
          <button className="w-full px-4 py-2 mb-2 text-white bg-red-600 rounded-md hover:bg-red-700 transition-colors">
            Sign in with Google
          </button>
          <button className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors">
            Sign in with Facebook
          </button>
          <p className="mt-4 text-sm text-center text-text-muted">
            New to Dragon Farm?{" "}
            <a href="#" className="text-accent hover:underline">
              Sign Up
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

/**
 * We need an input
 * We need a button
 * We need a Text
 * We need a Checkbox
 * We need an Icon
 * We need a Link
 * We need a Separator
 * We need a Form
 */

export default AuthValidation;
