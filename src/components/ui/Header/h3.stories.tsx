import type { Meta, StoryObj } from "@storybook/react";
import { H3 } from "./header";

const meta: Meta<typeof H3> = {
  title: "UI/Headers/H3",
  component: H3,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Third-level heading component (H3) perfect for subsection titles, card headers, and content organization. Maintains readability while providing clear hierarchy.",
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "primary", "accent", "mystical", "teal", "gradient", "shadow", "glow"],
      description: "Visual variant of the header",
    },
    align: {
      control: { type: "select" },
      options: ["left", "center", "right"],
      description: "Text alignment",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Dragon Training",
  },
};

export const CardHeader: Story = {
  render: () => (
    <div className="bg-white border border-dragon-teal/20 rounded-lg p-6 max-w-md">
      <H3 variant="teal">Ocean Dragon Profile</H3>
      <p className="text-dragon-navy mt-2">
        A majestic creature from the deepest oceanic trenches, known for its wisdom and healing
        powers.
      </p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "H3 used as a card header with complementary content.",
      },
    },
  },
};

export const SubsectionTitle: Story = {
  args: {
    variant: "accent",
    children: "Feeding Requirements",
  },
  parameters: {
    docs: {
      description: {
        story: "Accent variant perfect for highlighting important subsections.",
      },
    },
  },
};

export const ContentSection: Story = {
  render: () => (
    <div className="space-y-4 max-w-2xl">
      <H3 variant="primary">Dragon Habitat Setup</H3>
      <div className="space-y-2 text-dragon-navy">
        <p>
          <strong>Temperature:</strong> Maintain between 75-85°F
        </p>
        <p>
          <strong>Humidity:</strong> 60-70% for optimal comfort
        </p>
        <p>
          <strong>Space:</strong> Minimum 100 square feet per dragon
        </p>
        <p>
          <strong>Water:</strong> Fresh, filtered water changed daily
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "H3 organizing detailed content with proper information hierarchy.",
      },
    },
  },
};

export const NavigationStyle: Story = {
  render: () => (
    <nav className="bg-gradient-to-r from-dragon-deep-purple/5 to-dragon-dark-purple/5 p-4 rounded">
      <div className="flex space-x-8">
        <H3
          variant="mystical"
          className="cursor-pointer hover:text-dragon-accent transition-colors"
        >
          Dragons
        </H3>
        <H3 variant="teal" className="cursor-pointer hover:text-dragon-accent transition-colors">
          Training
        </H3>
        <H3 variant="primary" className="cursor-pointer hover:text-dragon-accent transition-colors">
          Breeding
        </H3>
      </div>
    </nav>
  ),
  parameters: {
    docs: {
      description: {
        story: "H3 components used for navigation with hover effects.",
      },
    },
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <H3 variant="default">Default - Basic Information</H3>
      <H3 variant="primary">Primary - Important Details</H3>
      <H3 variant="accent">Accent - Special Features</H3>
      <H3 variant="mystical">Mystical - Magical Properties</H3>
      <H3 variant="teal">Teal - Wisdom & Knowledge</H3>
      <H3 variant="gradient">Gradient - Spectacular Display</H3>
      <H3 variant="shadow">Shadow - Hidden Secrets</H3>
      <H3 variant="glow">Glow - Powerful Energy</H3>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Complete showcase of all H3 variants with dragon-themed styling.",
      },
    },
  },
};
