import type { Meta, StoryObj } from "@storybook/react";
import { ColorPaletteShowcase } from "./ColorPaletteShowcase";

const meta = {
  title: "Dragon Farm/ColorPaletteShowcase",
  component: ColorPaletteShowcase,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "The complete Ocean Dragon Color Palette showcase component, demonstrating all colors, UI components, and design system guidelines for the Dragon Farm application.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ColorPaletteShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "The complete color palette showcase including all Ocean Dragon colors, button variants, card examples, and design system documentation.",
      },
    },
  },
};

export const LightBackground: Story = {
  parameters: {
    backgrounds: { default: "light" },
    docs: {
      description: {
        story:
          "Color palette showcase on a light background to see how colors work in the default theme.",
      },
    },
  },
};

export const DragonNavyBackground: Story = {
  parameters: {
    backgrounds: { default: "dragon-navy" },
    docs: {
      description: {
        story:
          "Color palette showcase on a dragon navy background to test contrast and readability.",
      },
    },
  },
};
