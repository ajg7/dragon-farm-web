import type { Meta, StoryObj } from "@storybook/react";
import { H6 } from ".";

const meta: Meta<typeof H6> = {
  title: "UI/Headers/H6",
  component: H6,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Sixth-level heading component (H6) for the smallest hierarchical sections. Perfect for captions, fine details, metadata, and micro-content organization within larger sections.",
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
    children: "Daily Schedule",
  },
};

export const Metadata: Story = {
  render: () => (
    <div className="max-w-lg p-4 bg-white border border-dragon-teal/20 rounded">
      <h4 className="text-lg font-semibold text-dragon-primary mb-3">Aquarius - Ocean Dragon</h4>

      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <H6 variant="teal">Age</H6>
          <p className="text-dragon-navy">127 years</p>
        </div>

        <div>
          <H6 variant="teal">Gender</H6>
          <p className="text-dragon-navy">Female</p>
        </div>

        <div>
          <H6 variant="mystical">Magic Level</H6>
          <p className="text-dragon-navy">Master</p>
        </div>

        <div>
          <H6 variant="accent">Bond Status</H6>
          <p className="text-dragon-navy">Bonded</p>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "H6 used for metadata and detailed specifications in a profile card.",
      },
    },
  },
};

export const MicroSections: Story = {
  render: () => (
    <div className="max-w-2xl space-y-6">
      <div>
        <h5 className="text-lg font-medium text-dragon-primary mb-3">Daily Care Routine</h5>

        <div className="space-y-4">
          <div className="pl-4 border-l-2 border-dragon-emerald/30">
            <H6 variant="accent">6:00 AM - Morning Meal</H6>
            <p className="text-xs text-dragon-navy mt-1">
              Fresh fish and seaweed. Check water temperature before feeding.
            </p>
          </div>

          <div className="pl-4 border-l-2 border-dragon-teal/30">
            <H6 variant="teal">10:00 AM - Exercise Session</H6>
            <p className="text-xs text-dragon-navy mt-1">
              Flight practice in the eastern meadows. 30-45 minutes duration.
            </p>
          </div>

          <div className="pl-4 border-l-2 border-dragon-navy/30">
            <H6 variant="primary">2:00 PM - Rest Period</H6>
            <p className="text-xs text-dragon-navy mt-1">
              Quiet time in the cave. Dim lighting and minimal disturbance.
            </p>
          </div>

          <div className="pl-4 border-l-2 border-dragon-deep-purple/30">
            <H6 variant="mystical">6:00 PM - Evening Meal</H6>
            <p className="text-xs text-dragon-navy mt-1">
              Larger portion with magical supplements. Monitor eating habits.
            </p>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "H6 components organizing micro-sections with timeline format.",
      },
    },
  },
};

export const Captions: Story = {
  render: () => (
    <div className="max-w-lg space-y-4">
      <div>
        <div className="w-full h-32 bg-gradient-to-br from-dragon-teal to-dragon-emerald rounded mb-2"></div>
        <H6 variant="teal" align="center">
          Ocean Dragon Habitat Simulation
        </H6>
        <p className="text-xs text-dragon-navy text-center mt-1">
          Virtual environment designed for optimal dragon comfort and growth.
        </p>
      </div>

      <div>
        <div className="w-full h-32 bg-gradient-to-br from-dragon-deep-purple to-dragon-dark-purple rounded mb-2"></div>
        <H6 variant="mystical" align="center">
          Ancient Dragon Meditation Chamber
        </H6>
        <p className="text-xs text-dragon-navy text-center mt-1">
          Sacred space for developing magical abilities and inner wisdom.
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "H6 used as captions for images and visual content.",
      },
    },
  },
};

export const DetailedSpecs: Story = {
  render: () => (
    <div className="max-w-3xl">
      <h4 className="text-lg font-semibold text-dragon-primary mb-4">
        Dragon Habitat Specifications
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-3 bg-dragon-teal/5 border border-dragon-teal/20 rounded">
          <H6 variant="teal">Water Temperature</H6>
          <p className="text-sm font-medium text-dragon-navy">72-78°F</p>
          <p className="text-xs text-dragon-navy/70">Optimal range for health</p>
        </div>

        <div className="p-3 bg-dragon-emerald/5 border border-dragon-emerald/20 rounded">
          <H6 variant="accent">pH Level</H6>
          <p className="text-sm font-medium text-dragon-navy">7.2-7.8</p>
          <p className="text-xs text-dragon-navy/70">Slightly alkaline preferred</p>
        </div>

        <div className="p-3 bg-dragon-navy/5 border border-dragon-navy/20 rounded">
          <H6 variant="primary">Salinity</H6>
          <p className="text-sm font-medium text-dragon-navy">3.5%</p>
          <p className="text-xs text-dragon-navy/70">Ocean-level concentration</p>
        </div>

        <div className="p-3 bg-dragon-deep-purple/5 border border-dragon-deep-purple/20 rounded">
          <H6 variant="mystical">Magical Density</H6>
          <p className="text-sm font-medium text-dragon-navy">High</p>
          <p className="text-xs text-dragon-navy/70">Enhanced with crystals</p>
        </div>

        <div className="p-3 bg-dragon-teal/5 border border-dragon-teal/20 rounded">
          <H6 variant="teal">Current Flow</H6>
          <p className="text-sm font-medium text-dragon-navy">Moderate</p>
          <p className="text-xs text-dragon-navy/70">Simulates natural habitat</p>
        </div>

        <div className="p-3 bg-dragon-emerald/5 border border-dragon-emerald/20 rounded">
          <H6 variant="accent">Depth Range</H6>
          <p className="text-sm font-medium text-dragon-navy">15-50 feet</p>
          <p className="text-xs text-dragon-navy/70">Variable depth zones</p>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "H6 headers for detailed specifications and technical data.",
      },
    },
  },
};

export const TaskList: Story = {
  render: () => (
    <div className="max-w-md">
      <h5 className="text-lg font-medium text-dragon-primary mb-4">Weekly Maintenance Tasks</h5>

      <div className="space-y-3">
        <div className="flex items-start space-x-3">
          <input type="checkbox" className="mt-1" />
          <div className="flex-1">
            <H6 variant="primary">Water Quality Test</H6>
            <p className="text-xs text-dragon-navy/70">
              Check pH, temperature, and magical density
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <input type="checkbox" className="mt-1" />
          <div className="flex-1">
            <H6 variant="accent">Habitat Cleaning</H6>
            <p className="text-xs text-dragon-navy/70">
              Remove debris and refresh filtration system
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <input type="checkbox" className="mt-1" />
          <div className="flex-1">
            <H6 variant="teal">Health Inspection</H6>
            <p className="text-xs text-dragon-navy/70">
              Physical examination and behavior assessment
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <input type="checkbox" className="mt-1" />
          <div className="flex-1">
            <H6 variant="mystical">Magical Alignment</H6>
            <p className="text-xs text-dragon-navy/70">
              Recharge enchantments and crystal formations
            </p>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "H6 used for task lists and checklist items with descriptions.",
      },
    },
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-1">
      <H6 variant="default">Default - Standard Text</H6>
      <H6 variant="primary">Primary - Key Information</H6>
      <H6 variant="accent">Accent - Special Notes</H6>
      <H6 variant="mystical">Mystical - Magical Elements</H6>
      <H6 variant="teal">Teal - Educational Details</H6>
      <H6 variant="gradient">Gradient - Highlighted Content</H6>
      <H6 variant="shadow">Shadow - Subtle Information</H6>
      <H6 variant="glow">Glow - Important Details</H6>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All H6 variants showcasing the dragon theme color palette.",
      },
    },
  },
};
