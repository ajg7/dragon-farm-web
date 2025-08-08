import type { Meta, StoryObj } from "@storybook/react";
import { P } from "./text";

const meta: Meta<typeof P> = {
  title: "UI/Text/P",
  component: P,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A paragraph component with Dragon Farm styling.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "This is a paragraph of text that demonstrates the P component with default styling.",
  },
};

export const WithVariant: Story = {
  args: {
    variant: "accent",
    children: "This paragraph uses the accent color variant.",
  },
};

export const LargeText: Story = {
  args: {
    size: "lg",
    children: "This is a larger paragraph of text for improved readability.",
  },
};
