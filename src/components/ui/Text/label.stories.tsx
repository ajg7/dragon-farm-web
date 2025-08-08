import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "./text";

const meta: Meta<typeof Label> = {
  title: "UI/Text/Label",
  component: Label,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A label component for form inputs and other labeled elements.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Email Address",
    htmlFor: "email",
  },
};

export const Required: Story = {
  args: {
    children: "Password",
    variant: "primary",
    weight: "medium",
    htmlFor: "password",
  },
};

export const WithFormControl: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="dragon-name" variant="mystical" weight="semibold">
        Dragon Name
      </Label>
      <input
        id="dragon-name"
        type="text"
        placeholder="Enter your dragon's name"
        className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-dragon-teal"
      />
    </div>
  ),
};
