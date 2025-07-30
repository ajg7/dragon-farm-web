import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider, useTheme } from "./theme-provider";

const ThemeDemo = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="p-8 space-y-6">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-dragon-deep-purple">🌓 Dragon Farm Theme System</h1>
        <p className="text-dragon-navy">
          Current theme: <span className="font-semibold capitalize">{theme}</span>
        </p>
        <div className="flex gap-4 justify-center">
          <div
            className={`px-4 py-2 rounded-lg cursor-pointer transition-colors ${
              theme === "light"
                ? "bg-dragon-deep-purple text-white"
                : "bg-gray-200 text-dragon-navy hover:bg-gray-300"
            }`}
            onClick={() => setTheme("light")}
          >
            ☀️ Light
          </div>
          <div
            className={`px-4 py-2 rounded-lg cursor-pointer transition-colors ${
              theme === "dark"
                ? "bg-dragon-deep-purple text-white"
                : "bg-gray-200 text-dragon-navy hover:bg-gray-300"
            }`}
            onClick={() => setTheme("dark")}
          >
            🌙 Dark
          </div>
          <div
            className={`px-4 py-2 rounded-lg cursor-pointer transition-colors ${
              theme === "system"
                ? "bg-dragon-deep-purple text-white"
                : "bg-gray-200 text-dragon-navy hover:bg-gray-300"
            }`}
            onClick={() => setTheme("system")}
          >
            🖥️ System
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="border border-dragon-emerald/30 rounded-lg p-6 bg-white dark:bg-gray-800">
          <div className="mb-4">
            <h3 className="text-dragon-deep-purple text-xl font-semibold mb-2">🌊 Ocean Theme</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Light theme inspired by ocean surfaces
            </p>
          </div>
          <div>
            <p className="text-dragon-navy mb-4">
              The light theme represents the bright, mystical surface waters where dragons play.
            </p>
            <div className="flex gap-2">
              <div className="px-4 py-2 bg-dragon-emerald text-white rounded-lg">Dive Deep</div>
              <div className="px-4 py-2 bg-dragon-teal text-white rounded-lg">Explore</div>
            </div>
          </div>
        </div>

        <div className="border border-dragon-dark-purple/30 rounded-lg p-6 bg-white dark:bg-gray-800">
          <div className="mb-4">
            <h3 className="text-dragon-deep-purple text-xl font-semibold mb-2">🌌 Abyss Theme</h3>
            <p className="text-gray-600 dark:text-gray-400">Dark theme inspired by ocean depths</p>
          </div>
          <div>
            <p className="text-dragon-navy mb-4">
              The dark theme embodies the mysterious depths where ancient dragons slumber.
            </p>
            <div className="flex gap-2">
              <div className="px-4 py-2 bg-dragon-dark-purple text-white rounded-lg">Awaken</div>
              <div className="px-4 py-2 border border-dragon-navy text-dragon-navy rounded-lg">
                Descend
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-dragon-deep-purple/5 to-dragon-dark-purple/5 rounded-lg p-6">
        <div className="mb-4">
          <h3 className="text-dragon-deep-purple text-xl font-semibold mb-2">
            🎨 Color Adaptation
          </h3>
          <p className="text-gray-600 dark:text-gray-400">How colors adapt between themes</p>
        </div>
        <div>
          <div className="grid grid-cols-5 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-dragon-emerald rounded-lg mx-auto mb-2"></div>
              <p className="text-xs text-dragon-navy">Emerald</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-dragon-teal rounded-lg mx-auto mb-2"></div>
              <p className="text-xs text-dragon-navy">Teal</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-dragon-navy rounded-lg mx-auto mb-2"></div>
              <p className="text-xs text-dragon-navy">Navy</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-dragon-deep-purple rounded-lg mx-auto mb-2"></div>
              <p className="text-xs text-dragon-navy">Deep Purple</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-dragon-dark-purple rounded-lg mx-auto mb-2"></div>
              <p className="text-xs text-dragon-navy">Dark Purple</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const meta = {
  title: "Dragon Farm/Design System/Theme",
  component: ThemeDemo,
  decorators: [
    (Story) => (
      <ThemeProvider defaultTheme="light">
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "The Dragon Farm theme system supports light and dark modes, with colors that adapt to represent different depths of the mystical ocean.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ThemeDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Interactive theme switcher showing how the Ocean Dragon palette adapts to different themes.",
      },
    },
  },
};

export const LightMode: Story = {
  decorators: [
    (Story) => (
      <ThemeProvider defaultTheme="light">
        <div className="light">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "Light theme representing the bright ocean surfaces.",
      },
    },
  },
};

export const DarkMode: Story = {
  decorators: [
    (Story) => (
      <ThemeProvider defaultTheme="dark">
        <div className="dark">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "Dark theme representing the mysterious ocean depths.",
      },
    },
  },
};
