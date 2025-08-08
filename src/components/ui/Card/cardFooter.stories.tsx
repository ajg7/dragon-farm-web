import type { Meta, StoryObj } from "@storybook/react";
import { CardFooter } from "./card";

const meta = {
  title: "UI/Card/CardFooter",
  component: CardFooter,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[350px] border rounded-xl bg-card">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CardFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <CardFooter>
      <p className="text-sm text-muted-foreground">Footer content goes here</p>
    </CardFooter>
  ),
};

export const WithButtons: Story = {
  render: () => (
    <CardFooter className="justify-between">
      <button className="px-4 py-2 text-sm border rounded hover:bg-gray-50">Cancel</button>
      <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
        Save Changes
      </button>
    </CardFooter>
  ),
};

export const SingleButton: Story = {
  render: () => (
    <CardFooter>
      <button className="w-full py-2 px-4 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors">
        Level Up Dragon
      </button>
    </CardFooter>
  ),
};

export const WithProgress: Story = {
  render: () => (
    <CardFooter className="flex-col space-y-2">
      <div className="flex justify-between w-full text-sm">
        <span>Experience</span>
        <span>750 / 1000 XP</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div className="bg-green-600 h-2 rounded-full" style={{ width: "75%" }}></div>
      </div>
    </CardFooter>
  ),
};
