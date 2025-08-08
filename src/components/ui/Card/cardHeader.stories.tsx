import type { Meta, StoryObj } from "@storybook/react";
import { CardHeader, CardTitle, CardDescription, CardAction } from "./card";

const meta = {
  title: "UI/Card/CardHeader",
  component: CardHeader,
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
} satisfies Meta<typeof CardHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <CardHeader>
      <CardTitle>Card Header Title</CardTitle>
      <CardDescription>This is a description in the card header</CardDescription>
    </CardHeader>
  ),
};

export const WithAction: Story = {
  render: () => (
    <CardHeader>
      <CardTitle>Dragon Profile</CardTitle>
      <CardDescription>View and edit dragon information</CardDescription>
      <CardAction>
        <button className="text-sm text-blue-600 hover:text-blue-800">Edit</button>
      </CardAction>
    </CardHeader>
  ),
};

export const TitleOnly: Story = {
  render: () => (
    <CardHeader>
      <CardTitle>Simple Title</CardTitle>
    </CardHeader>
  ),
};

export const DescriptionOnly: Story = {
  render: () => (
    <CardHeader>
      <CardDescription>Just a description without a title</CardDescription>
    </CardHeader>
  ),
};
