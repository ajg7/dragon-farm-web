import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta = {
  title: "Dragon Farm/UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A versatile button component with dragon-themed variants inspired by the Ocean Dragon color palette.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
        "dragon",
        "emerald",
        "teal",
        "mystical",
        "outline_dragon",
      ],
      description: "The visual style variant of the button",
    },
    size: {
      control: { type: "select" },
      options: ["default", "sm", "lg", "icon"],
      description: "The size of the button",
    },
    asChild: {
      control: { type: "boolean" },
      description: "Whether to render as a child component",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the button is disabled",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic variants
export const Default: Story = {
  args: {
    children: "Default Button",
  },
};

export const DragonNavy: Story = {
  args: {
    variant: "dragon",
    children: "🐉 Dragon Navy",
  },
};

export const DragonEmerald: Story = {
  args: {
    variant: "emerald",
    children: "💚 Dragon Emerald",
  },
};

export const DragonTeal: Story = {
  args: {
    variant: "teal",
    children: "🌊 Dragon Teal",
  },
};

export const Mystical: Story = {
  args: {
    variant: "mystical",
    children: "✨ Mystical Gradient",
  },
};

export const OutlineDragon: Story = {
  args: {
    variant: "outline_dragon",
    children: "⚔️ Dragon Outline",
  },
};

// Standard variants
export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Destructive",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children: "Link",
  },
};

// Sizes
export const Small: Story = {
  args: {
    variant: "dragon",
    size: "sm",
    children: "Small Dragon",
  },
};

export const Large: Story = {
  args: {
    variant: "emerald",
    size: "lg",
    children: "Large Emerald",
  },
};

export const Icon: Story = {
  args: {
    variant: "mystical",
    size: "icon",
    children: "🐲",
  },
};

// State variations
export const Disabled: Story = {
  args: {
    variant: "dragon",
    children: "Disabled Dragon",
    disabled: true,
  },
};

// All Dragon Variants Showcase
export const AllDragonVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="dragon">🐉 Dragon Navy</Button>
      <Button variant="emerald">💚 Dragon Emerald</Button>
      <Button variant="teal">🌊 Dragon Teal</Button>
      <Button variant="mystical">✨ Mystical</Button>
      <Button variant="outline_dragon">⚔️ Dragon Outline</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All dragon-themed button variants showcased together.",
      },
    },
  },
};

// Dragon Farm Actions
export const DragonFarmActions: Story = {
  render: () => (
    <div className="space-y-4 p-6 bg-gradient-to-br from-slate-50 to-dragon-emerald/10 rounded-lg">
      <h3 className="text-lg font-semibold text-dragon-deep-purple">Dragon Farm Actions</h3>
      <div className="flex flex-wrap gap-3">
        <Button variant="emerald">🥚 Breed New Dragon</Button>
        <Button variant="teal">🍖 Feed Dragons</Button>
        <Button variant="dragon">🏋️ Train Dragons</Button>
        <Button variant="mystical">⚡ Use Magic</Button>
        <Button variant="outline_dragon">📊 View Stats</Button>
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
