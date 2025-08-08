import type { Meta, StoryObj } from "@storybook/react";
import { H5 } from "./header";

const meta: Meta<typeof H5> = {
  title: "UI/Headers/H5",
  component: H5,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Fifth-level heading component (H5) perfect for minor sections, detailed breakdowns, and fine-grained content organization. Ideal for FAQ headers, step titles, and small content sections.",
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
    children: "Feeding Instructions",
  },
};

export const StepByStep: Story = {
  render: () => (
    <div className="max-w-2xl space-y-4">
      <h4 className="text-xl font-semibold text-dragon-primary mb-4">Dragon Training Process</h4>

      <div className="space-y-3">
        <div>
          <H5 variant="accent">Step 1: Building Trust</H5>
          <p className="text-sm text-dragon-navy mt-1">
            Approach slowly and speak in calm, soothing tones. Allow the dragon to become familiar
            with your scent and presence.
          </p>
        </div>

        <div>
          <H5 variant="accent">Step 2: Basic Commands</H5>
          <p className="text-sm text-dragon-navy mt-1">
            Start with simple commands like &ldquo;stay&rdquo; and &ldquo;come&rdquo;. Use
            consistent hand signals and reward positive responses.
          </p>
        </div>

        <div>
          <H5 variant="accent">Step 3: Advanced Training</H5>
          <p className="text-sm text-dragon-navy mt-1">
            Once trust is established, begin flight training and complex maneuvers. Always
            prioritize safety for both dragon and trainer.
          </p>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "H5 used for step-by-step instructions with detailed explanations.",
      },
    },
  },
};

export const FAQ: Story = {
  render: () => (
    <div className="max-w-2xl space-y-4">
      <h4 className="text-xl font-semibold text-dragon-primary mb-4">Frequently Asked Questions</h4>

      <div className="space-y-4">
        <div>
          <H5 variant="mystical">How often should I feed my dragon?</H5>
          <p className="text-sm text-dragon-navy mt-1">
            Adult dragons typically need 2-3 meals per day, while younger dragons may require up to
            5 smaller meals throughout the day.
          </p>
        </div>

        <div>
          <H5 variant="teal">What temperature should the habitat be?</H5>
          <p className="text-sm text-dragon-navy mt-1">
            Maintain a temperature between 75-85°F (24-29°C) during the day, with a slight drop to
            70-75°F (21-24°C) at night.
          </p>
        </div>

        <div>
          <H5 variant="primary">Can dragons be trained to fly with riders?</H5>
          <p className="text-sm text-dragon-navy mt-1">
            Yes, but it requires extensive training and a strong bond between dragon and rider. This
            process typically takes 2-3 years to complete safely.
          </p>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "H5 headers used for FAQ sections with different color variants.",
      },
    },
  },
};

export const DetailedBreakdown: Story = {
  render: () => (
    <div className="max-w-3xl">
      <h4 className="text-xl font-semibold text-dragon-primary mb-4">Dragon Diet Analysis</h4>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <H5 variant="accent">Protein Sources (60%)</H5>
          <ul className="text-sm space-y-1 text-dragon-navy ml-4">
            <li>• Large fish (salmon, tuna)</li>
            <li>• Magical sea creatures</li>
            <li>• Enchanted kelp</li>
          </ul>
        </div>

        <div className="space-y-3">
          <H5 variant="teal">Minerals & Supplements (25%)</H5>
          <ul className="text-sm space-y-1 text-dragon-navy ml-4">
            <li>• Crystallized mana</li>
            <li>• Ocean salt deposits</li>
            <li>• Rare earth elements</li>
          </ul>
        </div>

        <div className="space-y-3">
          <H5 variant="mystical">Magical Enhancers (10%)</H5>
          <ul className="text-sm space-y-1 text-dragon-navy ml-4">
            <li>• Moonstone fragments</li>
            <li>• Blessed water pearls</li>
            <li>• Ethereal plankton</li>
          </ul>
        </div>

        <div className="space-y-3">
          <H5 variant="primary">Treats & Rewards (5%)</H5>
          <ul className="text-sm space-y-1 text-dragon-navy ml-4">
            <li>• Golden seaweed</li>
            <li>• Crystallized jellyfish</li>
            <li>• Starlight essence</li>
          </ul>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "H5 used for detailed breakdowns and categorized information.",
      },
    },
  },
};

export const CardSections: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl">
      <div className="p-4 bg-white border border-dragon-emerald/20 rounded-lg">
        <H5 variant="accent" align="center">
          Health Status
        </H5>
        <div className="mt-3 text-center">
          <div className="text-2xl font-bold text-dragon-emerald">Excellent</div>
          <p className="text-xs text-dragon-navy mt-1">Last checkup: 3 days ago</p>
        </div>
      </div>

      <div className="p-4 bg-white border border-dragon-teal/20 rounded-lg">
        <H5 variant="teal" align="center">
          Training Progress
        </H5>
        <div className="mt-3 text-center">
          <div className="text-2xl font-bold text-dragon-teal">85%</div>
          <p className="text-xs text-dragon-navy mt-1">Advanced level achieved</p>
        </div>
      </div>

      <div className="p-4 bg-white border border-dragon-navy/20 rounded-lg">
        <H5 variant="primary" align="center">
          Bond Strength
        </H5>
        <div className="mt-3 text-center">
          <div className="text-2xl font-bold text-dragon-navy">Strong</div>
          <p className="text-xs text-dragon-navy mt-1">Trust level: Maximum</p>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "H5 used as headers in card layouts for status displays.",
      },
    },
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-2">
      <H5 variant="default">Default - Basic Section</H5>
      <H5 variant="primary">Primary - Important Information</H5>
      <H5 variant="accent">Accent - Highlighted Content</H5>
      <H5 variant="mystical">Mystical - Magical Properties</H5>
      <H5 variant="teal">Teal - Knowledge & Wisdom</H5>
      <H5 variant="gradient">Gradient - Special Display</H5>
      <H5 variant="shadow">Shadow - Subtle Emphasis</H5>
      <H5 variant="glow">Glow - Energetic Focus</H5>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Complete collection of H5 variants with dragon theme colors.",
      },
    },
  },
};
