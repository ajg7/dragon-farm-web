import type { Meta, StoryObj } from "@storybook/react";

const DragonFarmOverview = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 to-dragon-emerald/10">
    {/* Navigation */}
    <nav className="bg-dragon-navy shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">🐲 Dragon Farm</h1>
          <div className="space-x-2">
            <div className="inline-block px-4 py-2 text-white border border-white rounded hover:bg-white hover:text-dragon-navy cursor-pointer transition-colors">
              Profile
            </div>
            <div className="inline-block px-4 py-2 bg-dragon-emerald text-white rounded cursor-pointer hover:bg-dragon-emerald/80 transition-colors">
              Shop
            </div>
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
          <div className="inline-block px-6 py-3 bg-dragon-emerald text-white rounded-lg cursor-pointer hover:bg-dragon-emerald/80 transition-colors">
            Start Your Adventure
          </div>
          <div className="inline-block px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-dragon-navy cursor-pointer transition-colors">
            Learn More
          </div>
        </div>
      </div>
    </div>

    {/* Dashboard */}
    <div className="max-w-6xl mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="border border-dragon-navy/20 hover:shadow-lg transition-shadow rounded-lg p-6 bg-white">
          <div className="mb-4">
            <h3 className="text-dragon-deep-purple flex items-center gap-2 text-xl font-semibold mb-2">
              🐉 Dragon Statistics
            </h3>
            <p className="text-gray-600">Track your dragon collection progress</p>
          </div>
          <div className="space-y-3">
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
          </div>
        </div>

        <div className="border border-dragon-teal/20 hover:shadow-lg transition-shadow rounded-lg p-6 bg-white">
          <div className="mb-4">
            <h3 className="text-dragon-deep-purple flex items-center gap-2 text-xl font-semibold mb-2">
              ⚡ Quick Actions
            </h3>
            <p className="text-gray-600">Manage your dragons with ease</p>
          </div>
          <div className="space-y-3">
            <div className="w-full px-4 py-2 bg-dragon-deep-purple text-white rounded cursor-pointer hover:bg-dragon-deep-purple/80 transition-colors text-center">
              🥚 Breed New Dragon
            </div>
            <div className="w-full px-4 py-2 bg-dragon-emerald text-white rounded cursor-pointer hover:bg-dragon-emerald/80 transition-colors text-center">
              🍖 Feed All Dragons
            </div>
            <div className="w-full px-4 py-2 bg-dragon-teal text-white rounded cursor-pointer hover:bg-dragon-teal/80 transition-colors text-center">
              🏋️ Train Dragons
            </div>
          </div>
        </div>

        <div className="border border-dragon-emerald/20 hover:shadow-lg transition-shadow rounded-lg p-6 bg-white">
          <div className="mb-4">
            <h3 className="text-dragon-deep-purple flex items-center gap-2 text-xl font-semibold mb-2">
              🎯 Daily Quests
            </h3>
            <p className="text-gray-600">Complete tasks for rewards</p>
          </div>
          <div className="space-y-3">
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
            <div className="w-full px-4 py-2 bg-dragon-dark-purple text-white rounded cursor-pointer hover:bg-dragon-dark-purple/80 transition-colors text-center mt-4">
              View All Quests
            </div>
          </div>
        </div>
      </div>

      {/* Feature Showcase */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="border border-dragon-emerald/30 hover:shadow-lg transition-shadow rounded-lg p-6 bg-white">
          <div className="mb-4">
            <h3 className="text-dragon-deep-purple text-xl font-semibold mb-2">🌊 Ocean Depths</h3>
            <p className="text-gray-600">Explore the mysterious waters where dragons dwell</p>
          </div>
          <div>
            <p className="text-dragon-navy mb-4">
              Dive deep into the mystical waters and discover the secrets hidden beneath the waves.
            </p>
            <div className="px-4 py-2 bg-dragon-emerald text-white rounded cursor-pointer hover:bg-dragon-emerald/80 transition-colors inline-block">
              Explore
            </div>
          </div>
        </div>

        <div className="border border-dragon-teal/30 hover:shadow-lg transition-shadow rounded-lg p-6 bg-white">
          <div className="mb-4">
            <h3 className="text-dragon-deep-purple text-xl font-semibold mb-2">🐉 Dragon Scales</h3>
            <p className="text-gray-600">Collect and nurture your dragon companions</p>
          </div>
          <div>
            <p className="text-dragon-navy mb-4">
              Each dragon scale tells a story of ancient power and mystical energy.
            </p>
            <div className="px-4 py-2 bg-dragon-teal text-white rounded cursor-pointer hover:bg-dragon-teal/80 transition-colors inline-block">
              Collect
            </div>
          </div>
        </div>

        <div className="border border-dragon-navy/30 hover:shadow-lg transition-shadow rounded-lg p-6 bg-white">
          <div className="mb-4">
            <h3 className="text-dragon-deep-purple text-xl font-semibold mb-2">
              ⚡ Mystical Powers
            </h3>
            <p className="text-gray-600">Harness the elemental forces of your dragons</p>
          </div>
          <div>
            <p className="text-dragon-navy mb-4">
              Unlock the hidden potential within each dragon and master their unique abilities.
            </p>
            <div className="px-4 py-2 bg-dragon-dark-purple text-white rounded cursor-pointer hover:bg-dragon-dark-purple/80 transition-colors inline-block">
              Unleash
            </div>
          </div>
        </div>
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
