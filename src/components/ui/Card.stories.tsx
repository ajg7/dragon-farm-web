import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { Button } from "./button";

const meta = {
  title: "Dragon Farm/UI/Card",
  component: Card,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A flexible card component with header, content, and description areas. Used throughout the Dragon Farm application for displaying information.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: { type: "text" },
      description: "Additional CSS classes",
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicCard: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Dragon Statistics</CardTitle>
        <CardDescription>Track your dragon collection progress</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is a basic card with header and content.</p>
      </CardContent>
    </Card>
  ),
};

export const DragonStatsCard: Story = {
  render: () => (
    <Card className="w-[350px] border-dragon-navy/20 hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-dragon-deep-purple flex items-center gap-2">
          🐉 Dragon Statistics
        </CardTitle>
        <CardDescription>Track your dragon collection progress</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-dragon-navy">Total Dragons:</span>
          <span className="font-bold text-dragon-deep-purple text-xl">5</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-dragon-navy">Eggs Hatching:</span>
          <span className="font-bold text-dragon-teal text-xl">2</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-dragon-navy">Experience Points:</span>
          <span className="font-bold text-dragon-emerald text-xl">1,250</span>
        </div>
      </CardContent>
    </Card>
  ),
};

export const DragonActionsCard: Story = {
  render: () => (
    <Card className="w-[350px] border-dragon-teal/20 hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-dragon-deep-purple flex items-center gap-2">
          ⚡ Quick Actions
        </CardTitle>
        <CardDescription>Manage your dragons with ease</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <Button variant="dragon" className="w-full">
          🥚 Breed New Dragon
        </Button>
        <Button variant="emerald" className="w-full">
          🍖 Feed All Dragons
        </Button>
        <Button variant="teal" className="w-full">
          🏋️ Train Dragons
        </Button>
      </CardContent>
    </Card>
  ),
};

export const OceanDepthsCard: Story = {
  render: () => (
    <Card className="w-[350px] border-dragon-emerald/30 hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-dragon-deep-purple">🌊 Ocean Depths</CardTitle>
        <CardDescription>Explore the mysterious waters where dragons dwell</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-dragon-navy mb-4">
          Dive deep into the mystical waters and discover the secrets hidden beneath the waves.
        </p>
        <Button variant="emerald">Explore</Button>
      </CardContent>
    </Card>
  ),
};

export const MysticalPowersCard: Story = {
  render: () => (
    <Card className="w-[350px] border-dragon-navy/30 hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-dragon-deep-purple">⚡ Mystical Powers</CardTitle>
        <CardDescription>Harness the elemental forces of your dragons</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-dragon-navy mb-4">
          Unlock the hidden potential within each dragon and master their unique abilities.
        </p>
        <Button variant="mystical">Unleash</Button>
      </CardContent>
    </Card>
  ),
};

export const GradientCard: Story = {
  render: () => (
    <Card className="w-[350px] border-dragon-deep-purple/30 bg-gradient-to-r from-dragon-deep-purple/5 to-dragon-dark-purple/5">
      <CardHeader>
        <CardTitle className="text-dragon-deep-purple">🎨 Design System</CardTitle>
        <CardDescription>Ocean Dragon palette in action</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-dragon-navy mb-4">
          This card showcases the subtle gradient background using our Ocean Dragon color palette.
        </p>
        <Button variant="outline_dragon">Learn More</Button>
      </CardContent>
    </Card>
  ),
};

export const CardGrid: Story = {
  render: () => (
    <div className="grid md:grid-cols-2 gap-6 p-4">
      <Card className="border-dragon-emerald/30 hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle className="text-dragon-deep-purple">🌊 Ocean Depths</CardTitle>
          <CardDescription>Explore mystical waters</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-dragon-navy mb-4">Discover secrets beneath the waves.</p>
          <Button variant="emerald">Explore</Button>
        </CardContent>
      </Card>

      <Card className="border-dragon-teal/30 hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle className="text-dragon-deep-purple">🐉 Dragon Scales</CardTitle>
          <CardDescription>Collect dragon companions</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-dragon-navy mb-4">Each scale tells a story of power.</p>
          <Button variant="teal">Collect</Button>
        </CardContent>
      </Card>
    </div>
  ),
  parameters: {
    layout: "padded",
  },
};
