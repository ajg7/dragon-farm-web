import type { Meta, StoryObj } from "@storybook/react";
import { LinkButton } from "./LinkButton";

const meta = {
  title: "Dragon Farm/UI/Buttons/LinkButton",
  component: LinkButton,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Link-styled buttons that can function as either buttons or actual links. Perfect for navigation and external links in the Dragon Farm interface.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary"],
      description: "The visual style variant of the link button",
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
      description: "The size of the link button",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the button is disabled",
    },
    href: {
      control: { type: "text" },
      description: "The URL to link to (when used as an actual link)",
    },
    target: {
      control: { type: "text" },
      description: "The target attribute for the link",
    },
    children: {
      control: { type: "text" },
      description: "The content of the button",
    },
  },
} satisfies Meta<typeof LinkButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// Primary variant stories
export const PrimarySmall: Story = {
  args: {
    variant: "primary",
    size: "small",
    children: "Primary Small Link",
  },
};

export const PrimaryMedium: Story = {
  args: {
    variant: "primary",
    size: "medium",
    children: "Primary Medium Link",
  },
};

export const PrimaryLarge: Story = {
  args: {
    variant: "primary",
    size: "large",
    children: "Primary Large Link",
  },
};

export const PrimaryDisabled: Story = {
  args: {
    variant: "primary",
    size: "medium",
    children: "Primary Disabled Link",
    disabled: true,
  },
};

// Secondary variant stories
export const SecondarySmall: Story = {
  args: {
    variant: "secondary",
    size: "small",
    children: "Secondary Small Link",
  },
};

export const SecondaryMedium: Story = {
  args: {
    variant: "secondary",
    size: "medium",
    children: "Secondary Medium Link",
  },
};

export const SecondaryLarge: Story = {
  args: {
    variant: "secondary",
    size: "large",
    children: "Secondary Large Link",
  },
};

export const SecondaryDisabled: Story = {
  args: {
    variant: "secondary",
    size: "medium",
    children: "Secondary Disabled Link",
    disabled: true,
  },
};

// Actual link examples
export const ExternalLink: Story = {
  args: {
    variant: "primary",
    size: "medium",
    children: "Visit External Site",
    href: "https://example.com",
    target: "_blank",
    rel: "noopener noreferrer",
  },
};

export const InternalLink: Story = {
  args: {
    variant: "secondary",
    size: "medium",
    children: "Go to Dashboard",
    href: "/dashboard",
  },
};

// All variants showcase
export const AllVariants: Story = {
  args: {
    children: "Link Button",
  },
  render: () => (
    <div className="space-y-6">
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-dragon-deep-purple">Primary Link Buttons</h3>
        <div className="flex flex-wrap gap-3 items-center">
          <LinkButton variant="primary" size="small">
            Small
          </LinkButton>
          <LinkButton variant="primary" size="medium">
            Medium
          </LinkButton>
          <LinkButton variant="primary" size="large">
            Large
          </LinkButton>
          <LinkButton variant="primary" size="medium" disabled>
            Disabled
          </LinkButton>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-dragon-deep-purple">Secondary Link Buttons</h3>
        <div className="flex flex-wrap gap-3 items-center">
          <LinkButton variant="secondary" size="small">
            Small
          </LinkButton>
          <LinkButton variant="secondary" size="medium">
            Medium
          </LinkButton>
          <LinkButton variant="secondary" size="large">
            Large
          </LinkButton>
          <LinkButton variant="secondary" size="medium" disabled>
            Disabled
          </LinkButton>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All link button variants and sizes showcased together.",
      },
    },
  },
};

// Usage examples
export const NavigationLinks: Story = {
  args: {
    children: "Link Button",
  },
  render: () => (
    <div className="space-y-4 p-6 bg-gradient-to-br from-slate-50 to-dragon-teal/5 rounded-lg">
      <h3 className="text-lg font-semibold text-dragon-deep-purple">Dragon Farm Navigation</h3>
      <div className="space-y-2">
        <div className="flex flex-wrap gap-4">
          <LinkButton variant="primary" href="/dragons">
            View All Dragons
          </LinkButton>
          <LinkButton variant="secondary" href="/breeding">
            Breeding Center
          </LinkButton>
          <LinkButton variant="primary" href="/marketplace">
            Marketplace
          </LinkButton>
        </div>
        <div className="flex flex-wrap gap-4">
          <LinkButton variant="secondary" href="/help" size="small">
            Help & Support
          </LinkButton>
          <LinkButton variant="primary" href="https://dragonfarm.docs" target="_blank" size="small">
            Documentation
          </LinkButton>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Example link buttons for navigation throughout the Dragon Farm application.",
      },
    },
  },
};
