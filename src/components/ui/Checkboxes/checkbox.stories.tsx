import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "UI/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A flexible and accessible checkbox component with Dragon Farm styling and comprehensive customization options.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "base", "lg", "xl"],
      description: "Size of the checkbox",
    },
    variant: {
      control: { type: "select" },
      options: [
        "default",
        "primary",
        "accent",
        "mystical",
        "success",
        "danger",
        "warning",
        "outline",
      ],
      description: "Visual style variant",
    },
    rounded: {
      control: { type: "select" },
      options: ["none", "sm", "base", "md", "lg", "full"],
      description: "Border radius of the checkbox",
    },
    label: {
      control: { type: "text" },
      description: "Label text for the checkbox",
    },
    description: {
      control: { type: "text" },
      description: "Additional description text",
    },
    labelVariant: {
      control: { type: "select" },
      options: ["default", "primary", "secondary", "accent", "muted", "inverse", "mystical"],
      description: "Label color variant",
    },
    labelWeight: {
      control: { type: "select" },
      options: ["normal", "medium", "semibold"],
      description: "Label font weight",
    },
    labelPosition: {
      control: { type: "select" },
      options: ["right", "left"],
      description: "Position of label relative to checkbox",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the checkbox is disabled",
    },
    indeterminate: {
      control: { type: "boolean" },
      description: "Whether the checkbox is in indeterminate state",
    },
    error: {
      control: { type: "text" },
      description: "Error message to display",
    },
    success: {
      control: { type: "text" },
      description: "Success message to display",
    },
  },
  args: {
    label: "Accept terms and conditions",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Examples
export const Default: Story = {
  args: {
    label: "I agree to the Dragon Farm terms of service",
  },
};

export const WithoutLabel: Story = {
  args: {
    label: undefined,
  },
};

export const WithDescription: Story = {
  args: {
    label: "Enable notifications",
    description: "Get notified when your dragons need attention",
  },
};

// Size Variations
export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Checkbox size="sm" label="Small checkbox" />
      <Checkbox size="base" label="Base checkbox (default)" />
      <Checkbox size="lg" label="Large checkbox" />
      <Checkbox size="xl" label="Extra large checkbox" />
    </div>
  ),
};

// Variants
export const Variants: Story = {
  render: () => (
    <div className="space-y-4">
      <Checkbox variant="default" label="Default variant" defaultChecked />
      <Checkbox variant="primary" label="Primary variant" defaultChecked />
      <Checkbox variant="accent" label="Accent variant" defaultChecked />
      <Checkbox variant="mystical" label="Mystical variant" defaultChecked />
      <Checkbox variant="success" label="Success variant" defaultChecked />
      <Checkbox variant="danger" label="Danger variant" defaultChecked />
      <Checkbox variant="warning" label="Warning variant" defaultChecked />
      <Checkbox variant="outline" label="Outline variant" defaultChecked />
    </div>
  ),
};

// Rounded Variations
export const RoundedOptions: Story = {
  render: () => (
    <div className="space-y-4">
      <Checkbox rounded="none" label="No rounded corners" defaultChecked />
      <Checkbox rounded="sm" label="Small rounded corners" defaultChecked />
      <Checkbox rounded="base" label="Base rounded corners" defaultChecked />
      <Checkbox rounded="md" label="Medium rounded corners" defaultChecked />
      <Checkbox rounded="lg" label="Large rounded corners" defaultChecked />
      <Checkbox rounded="full" label="Fully rounded (circular)" defaultChecked />
    </div>
  ),
};

// States
export const States: Story = {
  render: () => (
    <div className="space-y-4">
      <Checkbox label="Unchecked state" />
      <Checkbox label="Checked state" defaultChecked />
      <Checkbox label="Indeterminate state" indeterminate />
      <Checkbox label="Disabled unchecked" disabled />
      <Checkbox label="Disabled checked" disabled defaultChecked />
      <Checkbox label="Disabled indeterminate" disabled indeterminate />
    </div>
  ),
};

// Label Variants
export const LabelVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <Checkbox label="Default label" labelVariant="default" />
      <Checkbox label="Primary label" labelVariant="primary" />
      <Checkbox label="Accent label" labelVariant="accent" />
      <Checkbox label="Mystical label" labelVariant="mystical" />
      <Checkbox label="Muted label" labelVariant="muted" />
    </div>
  ),
};

// Label Weights
export const LabelWeights: Story = {
  render: () => (
    <div className="space-y-4">
      <Checkbox label="Normal weight label" labelWeight="normal" />
      <Checkbox label="Medium weight label" labelWeight="medium" />
      <Checkbox label="Semibold weight label" labelWeight="semibold" />
    </div>
  ),
};

// Label Position
export const LabelPosition: Story = {
  render: () => (
    <div className="space-y-4">
      <Checkbox label="Label on the right (default)" labelPosition="right" />
      <Checkbox label="Label on the left" labelPosition="left" />
    </div>
  ),
};

// With Messages
export const WithMessages: Story = {
  render: () => (
    <div className="space-y-6">
      <Checkbox
        label="Terms and Conditions"
        description="Please read and accept our terms"
        error="You must accept the terms to continue"
      />
      <Checkbox
        label="Newsletter Subscription"
        description="Stay updated with Dragon Farm news"
        success="Successfully subscribed!"
        defaultChecked
      />
    </div>
  ),
};

// Complex Example
export const ComplexExample: Story = {
  render: () => (
    <div className="max-w-md space-y-4 p-6 border border-border rounded-lg">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-dragon-deep-purple">Dragon Farm Preferences</h3>
        <p className="text-sm text-text-muted">Customize your dragon farming experience</p>
      </div>

      <Checkbox
        size="lg"
        variant="mystical"
        label="Enable Mystical Mode"
        description="Unlock special dragon abilities and magical features"
        labelWeight="semibold"
      />

      <Checkbox
        variant="accent"
        label="Push Notifications"
        description="Get alerted when your dragons need care"
        labelWeight="medium"
      />

      <Checkbox
        variant="primary"
        label="Auto-Save Progress"
        description="Automatically save your game every 5 minutes"
        defaultChecked
      />

      <Checkbox
        size="sm"
        variant="outline"
        label="Beta Features"
        description="Access experimental features (may be unstable)"
        labelWeight="normal"
      />

      <Checkbox
        variant="success"
        label="Marketing Emails"
        description="Receive updates about new dragons and events"
        success="Subscription preferences saved"
        defaultChecked
      />
    </div>
  ),
};

// Form Integration
export const FormIntegration: Story = {
  render: () => (
    <form className="max-w-sm space-y-4 p-6 border border-border rounded-lg">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-dragon-deep-purple mb-2">Account Settings</h3>
        </div>

        <Checkbox
          name="notifications"
          label="Email Notifications"
          description="Receive important updates via email"
          variant="primary"
        />

        <Checkbox
          name="marketing"
          label="Marketing Communications"
          description="Get news about new features and events"
          variant="accent"
        />

        <Checkbox
          name="analytics"
          label="Usage Analytics"
          description="Help us improve by sharing usage data"
          variant="mystical"
          indeterminate
        />

        <Checkbox
          name="terms"
          label="Terms & Privacy Policy"
          description="I agree to the terms of service and privacy policy"
          variant="success"
          error="Please accept the terms to continue"
        />
      </div>

      <div className="pt-4">
        <button
          type="submit"
          className="w-full px-4 py-2 bg-dragon-teal text-white rounded-md hover:bg-dragon-navy transition-colors"
        >
          Save Preferences
        </button>
      </div>
    </form>
  ),
};

// Accessibility Example
export const AccessibilityExample: Story = {
  render: () => (
    <div className="max-w-md space-y-4 p-6">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-dragon-deep-purple">Accessibility Features</h3>
        <p className="text-sm text-text-muted">
          All checkboxes are fully accessible with keyboard navigation and screen reader support
        </p>
      </div>

      <Checkbox
        label="High Contrast Mode"
        description="Increase contrast for better visibility"
        variant="outline"
        size="lg"
      />

      <Checkbox
        label="Reduced Motion"
        description="Minimize animations and transitions"
        variant="primary"
      />

      <Checkbox
        label="Screen Reader Optimizations"
        description="Enhanced support for assistive technologies"
        variant="success"
        defaultChecked
      />
    </div>
  ),
};
