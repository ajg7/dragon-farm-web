import type { Meta, StoryObj } from "@storybook/react";
import { Span } from "./text";

const meta: Meta<typeof Span> = {
  title: "UI/Text/Span",
  component: Span,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "An inline span component for text within other elements.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "This is inline text",
  },
};

export const Highlighted: Story = {
  args: {
    variant: "accent",
    weight: "semibold",
    children: "highlighted text",
  },
};

export const InlineUsage: Story = {
  render: () => (
    <p>
      This is a paragraph with <Span variant="accent">highlighted inline text</Span> and{" "}
      <Span variant="muted" size="sm">
        smaller muted text
      </Span>{" "}
      mixed in.
    </p>
  ),
};
