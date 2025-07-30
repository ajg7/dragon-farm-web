import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: "Dragon Farm/UI/Buttons/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "The basic Button component with primary and secondary variants. This is the main solid button style used throughout the Dragon Farm application.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary"],
      description: "The visual style variant of the button",
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
      description: "The size of the button",
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
} satisfies Meta<typeof Button>;

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

// Showcase all variants
export const AllVariants: Story = {
  args: {
    children: "Button",
  },
  render: () => (
    <div className="space-y-6">
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-dragon-deep-purple">Primary Buttons</h3>
        <div className="flex flex-wrap gap-3 items-center">
          <Button variant="primary" size="small">
            Small
          </Button>
          <Button variant="primary" size="medium">
            Medium
          </Button>
          <Button variant="primary" size="large">
            Large
          </Button>
          <Button variant="primary" size="medium" disabled>
            Disabled
          </Button>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-dragon-deep-purple">Secondary Buttons</h3>
        <div className="flex flex-wrap gap-3 items-center">
          <Button variant="secondary" size="small">
            Small
          </Button>
          <Button variant="secondary" size="medium">
            Medium
          </Button>
          <Button variant="secondary" size="large">
            Large
          </Button>
          <Button variant="secondary" size="medium" disabled>
            Disabled
          </Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All button variants and sizes showcased together.",
      },
    },
  },
};

// Dragon Farm themed examples
export const DragonFarmActions: Story = {
  args: {
    children: "Button",
  },
  render: () => (
    <div className="space-y-4 p-6 bg-gradient-to-br from-slate-50 to-dragon-emerald/10 rounded-lg">
      <h3 className="text-lg font-semibold text-dragon-deep-purple">Dragon Farm Actions</h3>
      <div className="flex flex-wrap gap-3">
        <Button variant="primary">🐉 Train Dragon</Button>
        <Button variant="secondary">🥚 Breed New Dragon</Button>
        <Button variant="primary" size="small">
          🍖 Quick Feed
        </Button>
        <Button variant="secondary" size="large">
          ⚡ Cast Magic Spell
        </Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Example buttons as they would appear in the Dragon Farm application.",
      },
    },
  },
};
