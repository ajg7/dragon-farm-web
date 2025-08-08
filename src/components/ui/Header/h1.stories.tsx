import type { Meta, StoryObj } from "@storybook/react";
import { H1 } from "./header";

const meta: Meta<typeof H1> = {
  title: "UI/Headers/H1",
  component: H1,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "The largest heading component (H1) designed for hero sections, page titles, and primary headings. Features responsive scaling and dragon-themed variants.",
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
    children: "Dragon Farm Adventure",
  },
};

export const Hero: Story = {
  args: {
    variant: "gradient",
    align: "center",
    children: "Welcome to Dragon Farm",
  },
  parameters: {
    docs: {
      description: {
        story: "Perfect for hero sections with gradient text and center alignment.",
      },
    },
  },
};

export const Mystical: Story = {
  args: {
    variant: "mystical",
    children: "Ancient Dragon Sanctuary",
  },
  parameters: {
    docs: {
      description: {
        story: "Mystical variant with gradient from deep purple to dark purple.",
      },
    },
  },
};

export const Glowing: Story = {
  args: {
    variant: "glow",
    align: "center",
    children: "Emerald Dragon Temple",
  },
  parameters: {
    docs: {
      description: {
        story: "Glowing emerald text perfect for magical or special announcements.",
      },
    },
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8">
      <H1 variant="default">Default - The Dragon Realm</H1>
      <H1 variant="primary">Primary - Ocean Depths</H1>
      <H1 variant="accent">Accent - Emerald Scales</H1>
      <H1 variant="mystical">Mystical - Ancient Magic</H1>
      <H1 variant="teal">Teal - Wisdom Waters</H1>
      <H1 variant="gradient">Gradient - Rainbow Breath</H1>
      <H1 variant="shadow">Shadow - Dark Mysteries</H1>
      <H1 variant="glow">Glow - Emerald Aura</H1>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Showcase of all available H1 variants with dragon-themed colors.",
      },
    },
  },
};
