import type { Meta, StoryObj } from "@storybook/react";
import { Header, H1, H2, H3, H4, H5, H6 } from "./header";

const meta: Meta<typeof Header> = {
  title: "UI/Header",
  component: Header,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A flexible header component with multiple heading levels, dragon-themed variants, and alignment options. Each heading level follows semantic HTML structure and responsive typography scales.",
      },
    },
  },
  argTypes: {
    level: {
      control: { type: "select" },
      options: [1, 2, 3, 4, 5, 6],
      description: "The heading level (h1-h6)",
    },
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
    as: {
      control: { type: "select" },
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      description: "Override the semantic HTML element",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Header Stories
export const Default: Story = {
  args: {
    level: 1,
    children: "Dragon Farm Adventure",
  },
};

export const AllLevels: Story = {
  render: () => (
    <div className="space-y-4">
      <Header level={1}>H1: Main Title - Dragon Farm</Header>
      <Header level={2}>H2: Section Header - Mystical Creatures</Header>
      <Header level={3}>H3: Subsection - Ocean Dragons</Header>
      <Header level={4}>H4: Content Header - Dragon Care Guide</Header>
      <Header level={5}>H5: Minor Header - Feeding Schedule</Header>
      <Header level={6}>H6: Small Header - Daily Tasks</Header>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Shows all six heading levels with their respective font sizes and weights.",
      },
    },
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-6">
      <Header level={2} variant="default">
        Default - Deep Purple Magic
      </Header>
      <Header level={2} variant="primary">
        Primary - Ocean Navy Depths
      </Header>
      <Header level={2} variant="accent">
        Accent - Emerald Dragon Scales
      </Header>
      <Header level={2} variant="mystical">
        Mystical - Ancient Dragon Power
      </Header>
      <Header level={2} variant="teal">
        Teal - Wisdom of the Waters
      </Header>
      <Header level={2} variant="gradient">
        Gradient - Rainbow Dragon Breath
      </Header>
      <Header level={2} variant="shadow">
        Shadow - Mysterious Depths
      </Header>
      <Header level={2} variant="glow">
        Glow - Emerald Dragon Aura
      </Header>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All available color variants showcasing the dragon theme palette.",
      },
    },
  },
};

export const Alignments: Story = {
  render: () => (
    <div className="space-y-4">
      <Header level={3} align="left" variant="primary">
        Left Aligned - Dragon Quest Begins
      </Header>
      <Header level={3} align="center" variant="accent">
        Center Aligned - The Sacred Temple
      </Header>
      <Header level={3} align="right" variant="teal">
        Right Aligned - Ancient Wisdom
      </Header>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Text alignment options for different layout needs.",
      },
    },
  },
};

export const SemanticOverride: Story = {
  render: () => (
    <div className="space-y-4">
      <Header level={1} as="h2" variant="primary">
        Visual H1 but Semantic H2
      </Header>
      <p className="text-sm text-dragon-teal">
        This looks like an H1 but is semantically an H2 element for proper document structure.
      </p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Override the semantic HTML element while maintaining visual appearance. Useful for maintaining proper heading hierarchy.",
      },
    },
  },
};

// Individual Component Stories
export const H1Story: Story = {
  render: () => <H1 variant="gradient">Welcome to Dragon Farm</H1>,
  parameters: {
    docs: {
      description: {
        story: "H1 component with gradient variant - perfect for hero sections.",
      },
    },
  },
};

export const H2Story: Story = {
  render: () => <H2 variant="mystical">Mystical Dragon Collection</H2>,
  parameters: {
    docs: {
      description: {
        story: "H2 component with mystical variant - great for major sections.",
      },
    },
  },
};

export const H3Story: Story = {
  render: () => <H3 variant="accent">Ocean Dragon Species</H3>,
  parameters: {
    docs: {
      description: {
        story: "H3 component with accent variant - ideal for subsections.",
      },
    },
  },
};

export const ResponsiveDemo: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-dragon-deep-purple/5 to-dragon-dark-purple/5 p-6 rounded-lg">
        <H1 variant="gradient" align="center">
          Dragon Farm
        </H1>
        <H2 variant="mystical" align="center">
          Ancient Creatures Await
        </H2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 border border-dragon-teal/20 rounded">
          <H3 variant="teal">Ocean Dragons</H3>
          <H4 variant="primary">Aquatic Specialists</H4>
          <H5 variant="default">Care Instructions</H5>
          <H6 variant="default">Daily Maintenance</H6>
        </div>

        <div className="p-4 border border-dragon-emerald/20 rounded">
          <H3 variant="accent">Forest Dragons</H3>
          <H4 variant="primary">Nature Guardians</H4>
          <H5 variant="default">Habitat Setup</H5>
          <H6 variant="default">Feeding Schedule</H6>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A complete example showing responsive design and proper heading hierarchy in a dragon farm context.",
      },
    },
  },
};

export const Playground: Story = {
  args: {
    level: 2,
    variant: "mystical",
    align: "center",
    children: "Customize Your Dragon Header",
  },
  parameters: {
    docs: {
      description: {
        story: "Interactive playground to test different combinations of props.",
      },
    },
  },
};
