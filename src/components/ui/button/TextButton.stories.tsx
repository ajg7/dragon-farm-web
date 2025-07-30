import type { Meta, StoryObj } from "@storybook/react";
import { TextButton } from "./TextButton";

const meta = {
  title: "Dragon Farm/UI/Buttons/TextButton",
  component: TextButton,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Text-only buttons with subtle hover effects. Perfect for secondary actions and navigation within the Dragon Farm interface.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary"],
      description: "The visual style variant of the text button",
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
      description: "The size of the text button",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the button is disabled",
    },
    children: {
      control: { type: "text" },
      description: "The content of the button",
    },
  },
} satisfies Meta<typeof TextButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// Primary variant stories
export const PrimarySmall: Story = {
  args: {
    variant: "primary",
    size: "small",
    children: "Primary Small",
  },
};

export const PrimaryMedium: Story = {
  args: {
    variant: "primary",
    size: "medium",
    children: "Primary Medium",
  },
};

export const PrimaryLarge: Story = {
  args: {
    variant: "primary",
    size: "large",
    children: "Primary Large",
  },
};

export const PrimaryDisabled: Story = {
  args: {
    variant: "primary",
    size: "medium",
    children: "Primary Disabled",
    disabled: true,
  },
};

// Secondary variant stories
export const SecondarySmall: Story = {
  args: {
    variant: "secondary",
    size: "small",
    children: "Secondary Small",
  },
};

export const SecondaryMedium: Story = {
  args: {
    variant: "secondary",
    size: "medium",
    children: "Secondary Medium",
  },
};

export const SecondaryLarge: Story = {
  args: {
    variant: "secondary",
    size: "large",
    children: "Secondary Large",
  },
};

export const SecondaryDisabled: Story = {
  args: {
    variant: "secondary",
    size: "medium",
    children: "Secondary Disabled",
    disabled: true,
  },
};

// All variants showcase
export const AllVariants: Story = {
  args: {
    children: "Text Button",
  },
  render: () => (
    <div className="space-y-6">
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-dragon-deep-purple">Primary Text Buttons</h3>
        <div className="flex flex-wrap gap-3 items-center">
          <TextButton variant="primary" size="small">
            Small
          </TextButton>
          <TextButton variant="primary" size="medium">
            Medium
          </TextButton>
          <TextButton variant="primary" size="large">
            Large
          </TextButton>
          <TextButton variant="primary" size="medium" disabled>
            Disabled
          </TextButton>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-dragon-deep-purple">Secondary Text Buttons</h3>
        <div className="flex flex-wrap gap-3 items-center">
          <TextButton variant="secondary" size="small">
            Small
          </TextButton>
          <TextButton variant="secondary" size="medium">
            Medium
          </TextButton>
          <TextButton variant="secondary" size="large">
            Large
          </TextButton>
          <TextButton variant="secondary" size="medium" disabled>
            Disabled
          </TextButton>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All text button variants and sizes showcased together.",
      },
    },
  },
};

// Usage examples
export const NavigationExample: Story = {
  args: {
    children: "Text Button",
  },
  render: () => (
    <div className="space-y-4 p-6 bg-gradient-to-br from-slate-50 to-dragon-navy/5 rounded-lg">
      <h3 className="text-lg font-semibold text-dragon-deep-purple">
        Navigation & Secondary Actions
      </h3>
      <div className="flex flex-wrap gap-4 items-center">
        <TextButton variant="primary">View Details</TextButton>
        <TextButton variant="secondary">Edit</TextButton>
        <TextButton variant="primary">Cancel</TextButton>
        <TextButton variant="secondary">Skip</TextButton>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Example text buttons for navigation and secondary actions.",
      },
    },
  },
};
