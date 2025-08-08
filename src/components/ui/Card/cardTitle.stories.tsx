import type { Meta, StoryObj } from "@storybook/react";
import { CardTitle } from "./card";

const meta = {
  title: "UI/Card/CardTitle",
  component: CardTitle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[350px] border rounded-xl p-6 bg-card">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CardTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <CardTitle>Default Card Title</CardTitle>,
};

export const Long: Story = {
  render: () => (
    <CardTitle>This is a Very Long Card Title That Might Wrap to Multiple Lines</CardTitle>
  ),
};

export const CustomStyling: Story = {
  render: () => <CardTitle className="text-2xl text-purple-600">Custom Styled Title</CardTitle>,
};
