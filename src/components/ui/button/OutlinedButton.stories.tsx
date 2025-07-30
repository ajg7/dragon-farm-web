import type { Meta, StoryObj } from "@storybook/react";
import { OutlinedButton } from "./OutlinedButton";

const meta = {
  title: "Dragon Farm/UI/Buttons/OutlinedButton",
  component: OutlinedButton,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Outlined buttons with transparent backgrounds and colored borders. Perfect for secondary actions and alternative button styles in the Dragon Farm interface.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary"],
      description: "The visual style variant of the outlined button",
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
      description: "The size of the outlined button",
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
} satisfies Meta<typeof OutlinedButton>;

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
    children: "Outlined Button",
  },
  render: () => (
    <div className="space-y-6">
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-dragon-deep-purple">Primary Outlined Buttons</h3>
        <div className="flex flex-wrap gap-3 items-center">
          <OutlinedButton variant="primary" size="small">
            Small
          </OutlinedButton>
          <OutlinedButton variant="primary" size="medium">
            Medium
          </OutlinedButton>
          <OutlinedButton variant="primary" size="large">
            Large
          </OutlinedButton>
          <OutlinedButton variant="primary" size="medium" disabled>
            Disabled
          </OutlinedButton>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-dragon-deep-purple">
          Secondary Outlined Buttons
        </h3>
        <div className="flex flex-wrap gap-3 items-center">
          <OutlinedButton variant="secondary" size="small">
            Small
          </OutlinedButton>
          <OutlinedButton variant="secondary" size="medium">
            Medium
          </OutlinedButton>
          <OutlinedButton variant="secondary" size="large">
            Large
          </OutlinedButton>
          <OutlinedButton variant="secondary" size="medium" disabled>
            Disabled
          </OutlinedButton>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All outlined button variants and sizes showcased together.",
      },
    },
  },
};

// Usage examples with contrast backgrounds
export const OnDifferentBackgrounds: Story = {
  args: {
    children: "Outlined Button",
  },
  render: () => (
    <div className="space-y-6">
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-dragon-deep-purple">On Light Background</h3>
        <div className="p-4 bg-white rounded-lg border">
          <div className="flex flex-wrap gap-3 items-center">
            <OutlinedButton variant="primary" size="medium">
              Primary Outlined
            </OutlinedButton>
            <OutlinedButton variant="secondary" size="medium">
              Secondary Outlined
            </OutlinedButton>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-dragon-deep-purple">On Colored Background</h3>
        <div className="p-4 bg-gradient-to-br from-dragon-emerald/10 to-dragon-teal/10 rounded-lg">
          <div className="flex flex-wrap gap-3 items-center">
            <OutlinedButton variant="primary" size="medium">
              Primary Outlined
            </OutlinedButton>
            <OutlinedButton variant="secondary" size="medium">
              Secondary Outlined
            </OutlinedButton>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Outlined buttons shown on different background colors to demonstrate versatility.",
      },
    },
  },
};

// Dragon Farm usage examples
export const DragonFarmActions: Story = {
  args: {
    children: "Outlined Button",
  },
  render: () => (
    <div className="space-y-4 p-6 bg-gradient-to-br from-slate-50 to-dragon-navy/5 rounded-lg">
      <h3 className="text-lg font-semibold text-dragon-deep-purple">
        Dragon Farm Secondary Actions
      </h3>
      <div className="space-y-3">
        <div className="flex flex-wrap gap-3">
          <OutlinedButton variant="primary">📊 View Dragon Stats</OutlinedButton>
          <OutlinedButton variant="secondary">🔍 Search Dragons</OutlinedButton>
          <OutlinedButton variant="primary">📋 Export Data</OutlinedButton>
        </div>
        <div className="flex flex-wrap gap-3">
          <OutlinedButton variant="secondary" size="small">
            Cancel
          </OutlinedButton>
          <OutlinedButton variant="primary" size="small">
            Reset
          </OutlinedButton>
          <OutlinedButton variant="secondary" size="small">
            More Options
          </OutlinedButton>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Example outlined buttons for secondary actions in the Dragon Farm application.",
      },
    },
  },
};

// Button combination example
export const ButtonCombinations: Story = {
  args: {
    children: "Outlined Button",
  },
  render: () => (
    <div className="space-y-4 p-6 bg-white rounded-lg border">
      <h3 className="text-lg font-semibold text-dragon-deep-purple">
        Primary & Secondary Action Pairs
      </h3>
      <div className="space-y-4">
        <div className="flex flex-wrap gap-3 items-center">
          <button className="h-10 px-4 py-2 text-sm inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-dragon-navy text-white hover:bg-dragon-deep-purple active:bg-dragon-deep-purple/90 shadow-sm hover:shadow-md">
            Save Changes
          </button>
          <OutlinedButton variant="primary" size="medium">
            Cancel
          </OutlinedButton>
        </div>
        <div className="flex flex-wrap gap-3 items-center">
          <button className="h-10 px-4 py-2 text-sm inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-dragon-emerald text-dragon-deep-purple hover:bg-dragon-emerald/90 active:bg-dragon-emerald/80 font-semibold shadow-sm hover:shadow-md">
            🐉 Train Dragon
          </button>
          <OutlinedButton variant="secondary" size="medium">
            View Progress
          </OutlinedButton>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Outlined buttons paired with solid buttons to show primary/secondary action relationships.",
      },
    },
  },
};
