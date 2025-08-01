import AuthValidation from "@/pages/AuthValidation";
import TailwindTest from "@/components/TailwindTest";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <TailwindTest />
      <AuthValidation />
    </div>
  );
}
