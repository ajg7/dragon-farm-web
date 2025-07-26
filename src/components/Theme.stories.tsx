import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider, useTheme } from "./theme-provider";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const ThemeDemo = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="p-8 space-y-6">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-dragon-deep-purple">🌓 Dragon Farm Theme System</h1>
        <p className="text-dragon-navy">
          Current theme: <span className="font-semibold capitalize">{theme}</span>
        </p>
        <div className="flex gap-2 justify-center">
          <Button
            variant={theme === "light" ? "dragon" : "outline_dragon"}
            onClick={() => setTheme("light")}
          >
            ☀️ Light
          </Button>
          <Button
            variant={theme === "dark" ? "dragon" : "outline_dragon"}
            onClick={() => setTheme("dark")}
          >
            🌙 Dark
          </Button>
          <Button
            variant={theme === "system" ? "dragon" : "outline_dragon"}
            onClick={() => setTheme("system")}
          >
            🖥️ System
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="border-dragon-emerald/30">
          <CardHeader>
            <CardTitle className="text-dragon-deep-purple">🌊 Ocean Theme</CardTitle>
            <CardDescription>Light theme inspired by ocean surfaces</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-dragon-navy mb-4">
              The light theme represents the bright, mystical surface waters where dragons play.
            </p>
            <div className="flex gap-2">
              <Button variant="emerald">Dive Deep</Button>
              <Button variant="teal">Explore</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border-dragon-dark-purple/30">
          <CardHeader>
            <CardTitle className="text-dragon-deep-purple">🌌 Abyss Theme</CardTitle>
            <CardDescription>Dark theme inspired by ocean depths</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-dragon-navy mb-4">
              The dark theme embodies the mysterious depths where ancient dragons slumber.
            </p>
            <div className="flex gap-2">
              <Button variant="mystical">Awaken</Button>
              <Button variant="outline_dragon">Descend</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gradient-to-r from-dragon-deep-purple/5 to-dragon-dark-purple/5">
        <CardHeader>
          <CardTitle className="text-dragon-deep-purple">🎨 Color Adaptation</CardTitle>
          <CardDescription>How colors adapt between themes</CardDescription>
        </CardHeader>
        <CardContent>
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
        </CardContent>
      </Card>
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
