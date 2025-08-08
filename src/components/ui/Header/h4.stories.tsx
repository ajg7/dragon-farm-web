import type { Meta, StoryObj } from "@storybook/react";
import { H4 } from ".";

const meta: Meta<typeof H4> = {
  title: "UI/Headers/H4",
  component: H4,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Fourth-level heading component (H4) ideal for content headers, form sections, and detailed organization. Provides clear hierarchy while maintaining readability.",
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
    children: "Dragon Statistics",
  },
};

export const FormSection: Story = {
  render: () => (
    <form className="max-w-md space-y-4">
      <H4 variant="primary">Dragon Registration</H4>
      <div className="space-y-2">
        <label className="block text-sm font-medium text-dragon-navy">Dragon Name</label>
        <input
          type="text"
          className="w-full p-2 border border-dragon-teal/30 rounded focus:border-dragon-accent focus:outline-none"
          placeholder="Enter dragon name"
        />
      </div>
      <div className="space-y-2">
        <label className="block text-sm font-medium text-dragon-navy">Species</label>
        <select className="w-full p-2 border border-dragon-teal/30 rounded focus:border-dragon-accent focus:outline-none">
          <option>Ocean Dragon</option>
          <option>Forest Dragon</option>
          <option>Mountain Dragon</option>
        </select>
      </div>
    </form>
  ),
  parameters: {
    docs: {
      description: {
        story: "H4 used as a form section header with themed form elements.",
      },
    },
  },
};

export const ContentOrganization: Story = {
  render: () => (
    <div className="max-w-2xl space-y-6">
      <H4 variant="accent">Daily Care Schedule</H4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-dragon-emerald/5 rounded border border-dragon-emerald/20">
          <h5 className="font-semibold text-dragon-emerald mb-2">Morning (6-9 AM)</h5>
          <ul className="text-sm space-y-1 text-dragon-navy">
            <li>• Fresh water refill</li>
            <li>• Temperature check</li>
            <li>• Morning meal</li>
          </ul>
        </div>
        <div className="p-4 bg-dragon-teal/5 rounded border border-dragon-teal/20">
          <h5 className="font-semibold text-dragon-teal mb-2">Evening (6-9 PM)</h5>
          <ul className="text-sm space-y-1 text-dragon-navy">
            <li>• Exercise session</li>
            <li>• Health checkup</li>
            <li>• Evening meal</li>
          </ul>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "H4 organizing detailed content with structured information cards.",
      },
    },
  },
};

export const ListHeaders: Story = {
  render: () => (
    <div className="max-w-lg space-y-6">
      <div>
        <H4 variant="mystical">Magical Abilities</H4>
        <ul className="mt-2 space-y-1 text-dragon-navy">
          <li>• Water manipulation</li>
          <li>• Healing breath</li>
          <li>• Telepathic communication</li>
        </ul>
      </div>

      <div>
        <H4 variant="teal">Physical Characteristics</H4>
        <ul className="mt-2 space-y-1 text-dragon-navy">
          <li>• Length: 15-20 feet</li>
          <li>• Wingspan: 30-40 feet</li>
          <li>• Weight: 2-3 tons</li>
        </ul>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "H4 components used as headers for organized lists and data.",
      },
    },
  },
};

export const NestedHierarchy: Story = {
  render: () => (
    <article className="max-w-3xl space-y-4">
      <h2 className="text-3xl font-bold text-dragon-deep-purple mb-4">Dragon Breeding Guide</h2>

      <section className="space-y-3">
        <h3 className="text-2xl font-semibold text-dragon-navy">Preparation Phase</h3>

        <div className="space-y-2">
          <H4 variant="primary">Habitat Requirements</H4>
          <p className="text-dragon-navy">
            Ensure the breeding environment meets all safety and comfort standards...
          </p>
        </div>

        <div className="space-y-2">
          <H4 variant="accent">Health Assessments</H4>
          <p className="text-dragon-navy">
            Both dragons must undergo thorough health examinations...
          </p>
        </div>
      </section>
    </article>
  ),
  parameters: {
    docs: {
      description: {
        story: "H4 in proper document hierarchy with H2 and H3 elements.",
      },
    },
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-3">
      <H4 variant="default">Default - General Information</H4>
      <H4 variant="primary">Primary - Key Details</H4>
      <H4 variant="accent">Accent - Important Notes</H4>
      <H4 variant="mystical">Mystical - Magical Aspects</H4>
      <H4 variant="teal">Teal - Educational Content</H4>
      <H4 variant="gradient">Gradient - Special Features</H4>
      <H4 variant="shadow">Shadow - Mysterious Elements</H4>
      <H4 variant="glow">Glow - Energetic Properties</H4>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All H4 variants demonstrating the dragon theme color system.",
      },
    },
  },
};
