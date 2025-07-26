import type { Meta, StoryObj } from "@storybook/react";
import { oceanDragonPalette } from "../lib/colors";

const ColorSwatch = ({
  name,
  color,
}: {
  name: string;
  color: { hex: string; rgb: string; hsl: string };
}) => (
  <div className="text-center space-y-2">
    <div
      className="w-24 h-24 rounded-lg shadow-lg border-2 border-white mx-auto"
      style={{ backgroundColor: color.hex }}
    />
    <div className="space-y-1">
      <h3 className="font-semibold text-dragon-deep-purple capitalize text-sm">
        {name.replace(/([A-Z])/g, " $1").trim()}
      </h3>
      <p className="text-xs text-dragon-navy font-mono">{color.hex}</p>
      <p className="text-xs text-gray-600">{color.rgb}</p>
    </div>
  </div>
);

const ColorGrid = () => (
  <div className="p-8">
    <div className="text-center mb-8">
      <h1 className="text-3xl font-bold text-dragon-deep-purple mb-2">
        🐉 Ocean Dragon Color Palette
      </h1>
      <p className="text-dragon-navy">
        The five sacred colors inspired by ocean depths and dragon scales
      </p>
    </div>

    <div className="grid grid-cols-5 gap-6 mb-8">
      {Object.entries(oceanDragonPalette).map(([name, color]) => (
        <ColorSwatch key={name} name={name} color={color} />
      ))}
    </div>

    <div className="bg-white rounded-lg p-6 shadow-sm border border-dragon-navy/20">
      <h2 className="text-xl font-semibold text-dragon-deep-purple mb-4">Color Usage</h2>
      <div className="grid md:grid-cols-2 gap-6 text-sm">
        <div>
          <h3 className="font-semibold text-dragon-deep-purple mb-2">Primary Colors</h3>
          <ul className="space-y-1 text-dragon-navy">
            <li>
              <span className="w-3 h-3 bg-dragon-emerald inline-block rounded mr-2"></span>
              <strong>Emerald:</strong> Success, CTAs, growth
            </li>
            <li>
              <span className="w-3 h-3 bg-dragon-teal inline-block rounded mr-2"></span>
              <strong>Teal:</strong> Secondary actions, info
            </li>
            <li>
              <span className="w-3 h-3 bg-dragon-navy inline-block rounded mr-2"></span>
              <strong>Navy:</strong> Primary actions, navigation
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-dragon-deep-purple mb-2">Accent Colors</h3>
          <ul className="space-y-1 text-dragon-navy">
            <li>
              <span className="w-3 h-3 bg-dragon-deep-purple inline-block rounded mr-2"></span>
              <strong>Deep Purple:</strong> Text, mystical elements
            </li>
            <li>
              <span className="w-3 h-3 bg-dragon-dark-purple inline-block rounded mr-2"></span>
              <strong>Dark Purple:</strong> Dark themes, shadows
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const meta = {
  title: "Dragon Farm/Design System/Colors",
  component: ColorGrid,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "The Ocean Dragon color palette used throughout the Dragon Farm application. These colors are inspired by the mystical depths of the ocean and the ancient scales of dragons.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ColorGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ColorPalette: Story = {
  parameters: {
    docs: {
      description: {
        story: "The complete Ocean Dragon color palette with hex values and usage guidelines.",
      },
    },
  },
};

export const OnLightBackground: Story = {
  parameters: {
    backgrounds: { default: "light" },
    docs: {
      description: {
        story: "Color palette displayed on a light background.",
      },
    },
  },
};

export const OnDarkBackground: Story = {
  parameters: {
    backgrounds: { default: "dragon-navy" },
    docs: {
      description: {
        story: "Color palette displayed on a dark dragon navy background to test contrast.",
      },
    },
  },
};

// Individual color stories
export const DragonEmerald: Story = {
  render: () => (
    <div className="p-8 text-center">
      <div className="w-32 h-32 bg-dragon-emerald rounded-full mx-auto mb-4 shadow-lg"></div>
      <h2 className="text-2xl font-bold text-dragon-deep-purple">Dragon Emerald</h2>
      <p className="text-dragon-navy mt-2">#28dd86</p>
      <p className="text-sm text-gray-600 mt-1">rgb(40, 221, 134)</p>
      <p className="text-sm text-dragon-navy mt-4 max-w-md mx-auto">
        Represents growth, success, and life energy. Perfect for success states and call-to-action
        buttons.
      </p>
    </div>
  ),
};

export const DragonTeal: Story = {
  render: () => (
    <div className="p-8 text-center">
      <div className="w-32 h-32 bg-dragon-teal rounded-full mx-auto mb-4 shadow-lg"></div>
      <h2 className="text-2xl font-bold text-dragon-deep-purple">Dragon Teal</h2>
      <p className="text-dragon-navy mt-2">#109ca7</p>
      <p className="text-sm text-gray-600 mt-1">rgb(16, 156, 167)</p>
      <p className="text-sm text-dragon-navy mt-4 max-w-md mx-auto">
        Represents wisdom, balance, and tranquility. Ideal for secondary actions and informational
        elements.
      </p>
    </div>
  ),
};

export const DragonNavy: Story = {
  render: () => (
    <div className="p-8 text-center">
      <div className="w-32 h-32 bg-dragon-navy rounded-full mx-auto mb-4 shadow-lg"></div>
      <h2 className="text-2xl font-bold text-dragon-deep-purple">Dragon Navy</h2>
      <p className="text-dragon-navy mt-2">#0c366f</p>
      <p className="text-sm text-gray-600 mt-1">rgb(12, 54, 111)</p>
      <p className="text-sm text-dragon-navy mt-4 max-w-md mx-auto">
        Represents depth, trust, and stability. Excellent for primary actions and main navigation.
      </p>
    </div>
  ),
};
