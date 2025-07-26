import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";

const DragonFarmOverview = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 to-dragon-emerald/10">
    {/* Navigation */}
    <nav className="bg-dragon-navy shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">🐲 Dragon Farm</h1>
          <div className="space-x-2">
            <Button
              size="sm"
              className="text-white border-white hover:bg-white hover:text-dragon-navy"
              variant="outline_dragon"
            >
              Profile
            </Button>
            <Button variant="emerald" size="sm">
              Shop
            </Button>
          </div>
        </div>
      </div>
    </nav>

    {/* Hero Section */}
    <div className="bg-gradient-to-r from-dragon-navy via-dragon-deep-purple to-dragon-dark-purple text-white py-12">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h1 className="text-5xl font-bold mb-4">Welcome to Dragon Farm</h1>
        <p className="text-xl mb-6 text-dragon-emerald">
          Embark on a mystical journey to breed, raise, and train legendary dragons!
        </p>
        <div className="space-x-4">
          <Button variant="emerald" size="lg">
            Start Your Adventure
          </Button>
          <Button
            variant="outline_dragon"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-dragon-navy"
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>

    {/* Dashboard */}
    <div className="max-w-6xl mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card className="border-dragon-navy/20 hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="text-dragon-deep-purple flex items-center gap-2">
              🐉 Dragon Statistics
            </CardTitle>
            <CardDescription>Track your dragon collection progress</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-dragon-navy">Total Dragons:</span>
              <span className="font-bold text-dragon-deep-purple text-xl">12</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-dragon-navy">Eggs Hatching:</span>
              <span className="font-bold text-dragon-teal text-xl">3</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-dragon-navy">Experience Points:</span>
              <span className="font-bold text-dragon-emerald text-xl">2,450</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-dragon-teal/20 hover:shadow-lg transition-shadow">
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

        <Card className="border-dragon-emerald/20 hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="text-dragon-deep-purple flex items-center gap-2">
              🎯 Daily Quests
            </CardTitle>
            <CardDescription>Complete tasks for rewards</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-dragon-emerald rounded-full"></div>
                <span className="text-sm text-dragon-navy">Feed 5 dragons ✓</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-dragon-emerald rounded-full"></div>
                <span className="text-sm text-dragon-navy">Breed 1 dragon ✓</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                <span className="text-sm text-dragon-navy">Win 3 battles</span>
              </div>
            </div>
            <Button variant="mystical" className="w-full mt-4">
              View All Quests
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Feature Showcase */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="border-dragon-emerald/30 hover:shadow-lg transition-shadow">
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

        <Card className="border-dragon-teal/30 hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="text-dragon-deep-purple">🐉 Dragon Scales</CardTitle>
            <CardDescription>Collect and nurture your dragon companions</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-dragon-navy mb-4">
              Each dragon scale tells a story of ancient power and mystical energy.
            </p>
            <Button variant="teal">Collect</Button>
          </CardContent>
        </Card>

        <Card className="border-dragon-navy/30 hover:shadow-lg transition-shadow">
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
      </div>
    </div>
  </div>
);

const meta = {
  title: "Dragon Farm/Complete App",
  component: DragonFarmOverview,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A complete Dragon Farm application showcase demonstrating how all UI components work together with the Ocean Dragon color palette.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DragonFarmOverview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DragonFarmApp: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "The complete Dragon Farm application interface showcasing navigation, hero section, dashboard cards, and feature areas all styled with the Ocean Dragon color palette.",
      },
    },
  },
};
