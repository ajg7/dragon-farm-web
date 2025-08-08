import type { Meta, StoryObj } from "@storybook/react";
import { H2 } from "./header";

const meta: Meta<typeof H2> = {
  title: "UI/Headers/H2",
  component: H2,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Secondary heading component (H2) ideal for major section titles, chapter headings, and important subsections. Responsive and themed for the dragon farm aesthetic.",
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
    children: "Dragon Collection",
  },
};

export const SectionTitle: Story = {
  args: {
    variant: "primary",
    children: "Ocean Dragon Species",
  },
  parameters: {
    docs: {
      description: {
        story: "Perfect for major section titles with the primary navy variant.",
      },
    },
  },
};

export const MysticalSection: Story = {
  args: {
    variant: "mystical",
    align: "center",
    children: "Ancient Dragon Lore",
  },
  parameters: {
    docs: {
      description: {
        story: "Mystical variant centered for special content sections.",
      },
    },
  },
};

export const AccentHighlight: Story = {
  args: {
    variant: "accent",
    children: "Featured Dragons",
  },
  parameters: {
    docs: {
      description: {
        story: "Accent variant in emerald for highlighting important sections.",
      },
    },
  },
};

export const ContentHierarchy: Story = {
  render: () => (
    <div className="space-y-6 max-w-4xl">
      <H2 variant="gradient" align="center">
        Dragon Care Guide
      </H2>
      <div className="prose prose-lg">
        <p className="text-dragon-navy">
          Learn the essential skills needed to care for your mystical dragon companions. From
          feeding schedules to habitat maintenance, this comprehensive guide covers everything a
          dragon keeper needs to know.
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Example of H2 used in content hierarchy with accompanying text.",
      },
    },
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-6">
      <H2 variant="default">Default - Dragon Basics</H2>
      <H2 variant="primary">Primary - Deep Sea Dragons</H2>
      <H2 variant="accent">Accent - Emerald Dragons</H2>
      <H2 variant="mystical">Mystical - Ancient Secrets</H2>
      <H2 variant="teal">Teal - Wisdom Keepers</H2>
      <H2 variant="gradient">Gradient - Multi-colored Magic</H2>
      <H2 variant="shadow">Shadow - Dark Arts</H2>
      <H2 variant="glow">Glow - Radiant Power</H2>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All H2 variants showcasing the dragon theme color palette.",
      },
    },
  },
};
