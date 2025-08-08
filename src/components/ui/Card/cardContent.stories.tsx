import type { Meta, StoryObj } from "@storybook/react";
import { CardContent } from "./card";

const meta = {
  title: "UI/Card/CardContent",
  component: CardContent,
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
} satisfies Meta<typeof CardContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <CardContent>
      <p>
        This is the default card content. You can put any content here including text, images,
        forms, or other components.
      </p>
    </CardContent>
  ),
};

export const WithForm: Story = {
  render: () => (
    <CardContent>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Dragon Name</label>
          <input
            type="text"
            placeholder="Enter dragon name..."
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Dragon Type</label>
          <select className="w-full p-2 border rounded-md">
            <option>Fire Dragon</option>
            <option>Ice Dragon</option>
            <option>Earth Dragon</option>
            <option>Air Dragon</option>
          </select>
        </div>
      </div>
    </CardContent>
  ),
};

export const WithStats: Story = {
  render: () => (
    <CardContent>
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center">
          <div className="text-3xl font-bold text-red-500">🔥</div>
          <div className="text-xl font-semibold">Fire</div>
          <div className="text-sm text-muted-foreground">Level 10</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-500">❄️</div>
          <div className="text-xl font-semibold">Ice</div>
          <div className="text-sm text-muted-foreground">Level 8</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-green-500">🌍</div>
          <div className="text-xl font-semibold">Earth</div>
          <div className="text-sm text-muted-foreground">Level 12</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-500">💨</div>
          <div className="text-xl font-semibold">Air</div>
          <div className="text-sm text-muted-foreground">Level 6</div>
        </div>
      </div>
    </CardContent>
  ),
};
