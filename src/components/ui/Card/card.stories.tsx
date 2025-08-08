import type { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from "./card";

const meta = {
  title: "UI/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: "text",
      description: "Additional CSS classes to apply to the card",
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Card
export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the main content of the card. You can put any content here.</p>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-muted-foreground">Footer content</p>
      </CardFooter>
    </Card>
  ),
};

// Card with Action
export const WithAction: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Dragon Profile</CardTitle>
        <CardDescription>Manage your dragon&apos;s information</CardDescription>
        <CardAction>
          <button className="text-sm text-blue-600 hover:text-blue-800">Edit</button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p>
            <strong>Name:</strong> Flame Wing
          </p>
          <p>
            <strong>Type:</strong> Fire Dragon
          </p>
          <p>
            <strong>Level:</strong> 15
          </p>
        </div>
      </CardContent>
    </Card>
  ),
};

// Simple Card (No Header/Footer)
export const Simple: Story = {
  render: () => (
    <Card className="w-[300px]">
      <CardContent>
        <p>This is a simple card with just content. Perfect for basic information display.</p>
      </CardContent>
    </Card>
  ),
};

// Card with Complex Content
export const Complex: Story = {
  render: () => (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Dragon Farm Statistics</CardTitle>
        <CardDescription>Your progress in the mystical realm</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">12</div>
            <div className="text-sm text-muted-foreground">Dragons Owned</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">2,340</div>
            <div className="text-sm text-muted-foreground">Gold Earned</div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Experience</span>
            <span>75%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-purple-600 h-2 rounded-full" style={{ width: "75%" }}></div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="justify-between">
        <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
          Level Up
        </button>
        <span className="text-sm text-muted-foreground">Next: Level 16</span>
      </CardFooter>
    </Card>
  ),
};

// Card Variants
export const Variants: Story = {
  render: () => (
    <div className="flex gap-4 flex-wrap">
      <Card className="w-[250px] border-green-200 bg-green-50">
        <CardHeader>
          <CardTitle className="text-green-800">Success Card</CardTitle>
          <CardDescription className="text-green-600">
            Everything is working perfectly!
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className="w-[250px] border-red-200 bg-red-50">
        <CardHeader>
          <CardTitle className="text-red-800">Error Card</CardTitle>
          <CardDescription className="text-red-600">Something went wrong.</CardDescription>
        </CardHeader>
      </Card>

      <Card className="w-[250px] border-yellow-200 bg-yellow-50">
        <CardHeader>
          <CardTitle className="text-yellow-800">Warning Card</CardTitle>
          <CardDescription className="text-yellow-600">
            Please check this information.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  ),
};

// Interactive Card
export const Interactive: Story = {
  render: () => (
    <Card className="w-[350px] cursor-pointer hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle>Interactive Card</CardTitle>
        <CardDescription>Click me for interaction</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This card has hover effects and can be made interactive.</p>
      </CardContent>
      <CardFooter>
        <button className="w-full py-2 px-4 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors">
          Take Action
        </button>
      </CardFooter>
    </Card>
  ),
};
