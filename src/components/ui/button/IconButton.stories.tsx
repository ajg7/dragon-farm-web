import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "./IconButton";

const meta = {
  title: "Dragon Farm/UI/Buttons/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Square icon-only buttons perfect for toolbar actions, quick controls, and space-efficient interfaces in the Dragon Farm application.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary"],
      description: "The visual style variant of the icon button",
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
      description: "The size of the icon button",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the button is disabled",
    },
    icon: {
      control: { type: "text" },
      description: "The icon content (emoji, SVG, etc.)",
    },
    "aria-label": {
      control: { type: "text" },
      description: "Accessibility label for screen readers",
    },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// Primary variant stories
export const PrimarySmall: Story = {
  args: {
    variant: "primary",
    size: "small",
    icon: "🐉",
    "aria-label": "Dragon action",
  },
};

export const PrimaryMedium: Story = {
  args: {
    variant: "primary",
    size: "medium",
    icon: "🐉",
    "aria-label": "Dragon action",
  },
};

export const PrimaryLarge: Story = {
  args: {
    variant: "primary",
    size: "large",
    icon: "🐉",
    "aria-label": "Dragon action",
  },
};

export const PrimaryDisabled: Story = {
  args: {
    variant: "primary",
    size: "medium",
    icon: "🐉",
    "aria-label": "Dragon action",
    disabled: true,
  },
};

// Secondary variant stories
export const SecondarySmall: Story = {
  args: {
    variant: "secondary",
    size: "small",
    icon: "🥚",
    "aria-label": "Egg action",
  },
};

export const SecondaryMedium: Story = {
  args: {
    variant: "secondary",
    size: "medium",
    icon: "🥚",
    "aria-label": "Egg action",
  },
};

export const SecondaryLarge: Story = {
  args: {
    variant: "secondary",
    size: "large",
    icon: "🥚",
    "aria-label": "Egg action",
  },
};

export const SecondaryDisabled: Story = {
  args: {
    variant: "secondary",
    size: "medium",
    icon: "🥚",
    "aria-label": "Egg action",
    disabled: true,
  },
};

// Different icon examples
export const CommonIcons: Story = {
  args: {
    variant: "primary",
    size: "medium",
    icon: "⚙️",
    "aria-label": "Settings",
  },
  render: () => (
    <div className="space-y-4">
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-dragon-deep-purple">Common Action Icons</h3>
        <div className="flex flex-wrap gap-3 items-center">
          <IconButton variant="primary" size="medium" icon="⚙️" aria-label="Settings" />
          <IconButton variant="primary" size="medium" icon="✏️" aria-label="Edit" />
          <IconButton variant="primary" size="medium" icon="🗑️" aria-label="Delete" />
          <IconButton variant="primary" size="medium" icon="👁️" aria-label="View" />
          <IconButton variant="primary" size="medium" icon="❤️" aria-label="Favorite" />
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-dragon-deep-purple">Dragon Farm Icons</h3>
        <div className="flex flex-wrap gap-3 items-center">
          <IconButton variant="secondary" size="medium" icon="🐉" aria-label="Dragon" />
          <IconButton variant="secondary" size="medium" icon="🥚" aria-label="Egg" />
          <IconButton variant="secondary" size="medium" icon="🍖" aria-label="Feed" />
          <IconButton variant="secondary" size="medium" icon="⚡" aria-label="Magic" />
          <IconButton variant="secondary" size="medium" icon="🏋️" aria-label="Train" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Common icons used in icon buttons throughout the application.",
      },
    },
  },
};

// All variants showcase
export const AllVariants: Story = {
  args: {
    variant: "primary",
    size: "medium",
    icon: "🐉",
    "aria-label": "Icon button",
  },
  render: () => (
    <div className="space-y-6">
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-dragon-deep-purple">Primary Icon Buttons</h3>
        <div className="flex flex-wrap gap-3 items-center">
          <IconButton variant="primary" size="small" icon="🐉" aria-label="Small dragon" />
          <IconButton variant="primary" size="medium" icon="🐉" aria-label="Medium dragon" />
          <IconButton variant="primary" size="large" icon="🐉" aria-label="Large dragon" />
          <IconButton
            variant="primary"
            size="medium"
            icon="🐉"
            aria-label="Disabled dragon"
            disabled
          />
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-dragon-deep-purple">Secondary Icon Buttons</h3>
        <div className="flex flex-wrap gap-3 items-center">
          <IconButton variant="secondary" size="small" icon="🥚" aria-label="Small egg" />
          <IconButton variant="secondary" size="medium" icon="🥚" aria-label="Medium egg" />
          <IconButton variant="secondary" size="large" icon="🥚" aria-label="Large egg" />
          <IconButton
            variant="secondary"
            size="medium"
            icon="🥚"
            aria-label="Disabled egg"
            disabled
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All icon button variants and sizes showcased together.",
      },
    },
  },
};

// Toolbar example
export const DragonToolbar: Story = {
  args: {
    variant: "primary",
    size: "medium",
    icon: "🐉",
    "aria-label": "Icon button",
  },
  render: () => (
    <div className="space-y-4 p-6 bg-gradient-to-br from-slate-50 to-dragon-emerald/10 rounded-lg">
      <h3 className="text-lg font-semibold text-dragon-deep-purple">Dragon Management Toolbar</h3>
      <div className="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm border">
        <IconButton variant="primary" size="small" icon="🐉" aria-label="Select dragon" />
        <IconButton variant="secondary" size="small" icon="🍖" aria-label="Feed dragon" />
        <IconButton variant="secondary" size="small" icon="🏋️" aria-label="Train dragon" />
        <div className="w-px h-6 bg-gray-300 mx-1" />
        <IconButton variant="primary" size="small" icon="✏️" aria-label="Edit dragon" />
        <IconButton variant="primary" size="small" icon="📊" aria-label="View stats" />
        <IconButton variant="primary" size="small" icon="❤️" aria-label="Favorite dragon" />
        <div className="w-px h-6 bg-gray-300 mx-1" />
        <IconButton variant="primary" size="small" icon="🗑️" aria-label="Delete dragon" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Example toolbar with icon buttons for dragon management actions.",
      },
    },
  },
};
