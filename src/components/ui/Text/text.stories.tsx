import type { Meta, StoryObj } from "@storybook/react";
import { Text, P, Span, Label, Small, Strong, Em, Mark, Del, Ins, Sub, Sup } from "./text";

const meta: Meta<typeof Text> = {
  title: "UI/Text",
  component: Text,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A flexible text component with various styling options for typography in the Dragon Farm theme.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "base", "lg", "xl", "2xl", "3xl", "4xl"],
      description: "Text size",
    },
    variant: {
      control: { type: "select" },
      options: [
        "default",
        "primary",
        "secondary",
        "accent",
        "muted",
        "inverse",
        "mystical",
        "success",
        "info",
        "warning",
        "danger",
        "gradient",
        "glow",
      ],
      description: "Text color variant",
    },
    weight: {
      control: { type: "select" },
      options: [
        "thin",
        "extralight",
        "light",
        "normal",
        "medium",
        "semibold",
        "bold",
        "extrabold",
        "black",
      ],
      description: "Font weight",
    },
    align: {
      control: { type: "select" },
      options: ["left", "center", "right", "justify"],
      description: "Text alignment",
    },
    family: {
      control: { type: "select" },
      options: ["sans", "serif", "mono", "display"],
      description: "Font family",
    },
    decoration: {
      control: { type: "select" },
      options: ["none", "underline", "overline", "line-through"],
      description: "Text decoration",
    },
    transform: {
      control: { type: "select" },
      options: ["none", "uppercase", "lowercase", "capitalize"],
      description: "Text transform",
    },
    whitespace: {
      control: { type: "select" },
      options: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"],
      description: "White space handling",
    },
    overflow: {
      control: { type: "select" },
      options: ["visible", "hidden", "ellipsis", "clip"],
      description: "Text overflow behavior",
    },
    as: {
      control: { type: "select" },
      options: [
        "p",
        "span",
        "div",
        "label",
        "small",
        "strong",
        "em",
        "mark",
        "del",
        "ins",
        "sub",
        "sup",
      ],
      description: "HTML element to render",
    },
    children: {
      control: { type: "text" },
      description: "Text content",
    },
  },
  args: {
    children: "The quick brown dragon jumps over the lazy knight.",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Examples
export const Default: Story = {
  args: {
    children: "This is the default text styling for Dragon Farm.",
  },
};

export const WithCustomElement: Story = {
  args: {
    as: "span",
    children: "This text is rendered as a span element.",
  },
};

// Size Variations
export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Text size="xs">Extra small text (12px)</Text>
      <Text size="sm">Small text (14px)</Text>
      <Text size="base">Base text (16px)</Text>
      <Text size="lg">Large text (18px)</Text>
      <Text size="xl">Extra large text (20px)</Text>
      <Text size="2xl">2XL text (24px)</Text>
      <Text size="3xl">3XL text (30px)</Text>
      <Text size="4xl">4XL text (36px)</Text>
    </div>
  ),
};

// Color Variants
export const ColorVariants: Story = {
  render: () => (
    <div className="space-y-2 bg-background-secondary p-4 rounded-lg">
      <Text variant="default">Default text color</Text>
      <Text variant="primary">Primary text color</Text>
      <Text variant="secondary">Secondary text color</Text>
      <Text variant="accent">Accent text color</Text>
      <Text variant="muted">Muted text color</Text>
      <Text variant="mystical">Mystical text color</Text>
      <Text variant="success">Success text color</Text>
      <Text variant="info">Info text color</Text>
      <Text variant="warning">Warning text color</Text>
      <Text variant="danger">Danger text color</Text>
      <Text variant="gradient">Gradient text effect</Text>
      <Text variant="glow">Glowing text effect</Text>
      <div className="bg-dragon-deep-purple p-2 rounded">
        <Text variant="inverse">Inverse text for dark backgrounds</Text>
      </div>
    </div>
  ),
};

// Font Weights
export const FontWeights: Story = {
  render: () => (
    <div className="space-y-2">
      <Text weight="thin">Thin weight (100)</Text>
      <Text weight="extralight">Extra light weight (200)</Text>
      <Text weight="light">Light weight (300)</Text>
      <Text weight="normal">Normal weight (400)</Text>
      <Text weight="medium">Medium weight (500)</Text>
      <Text weight="semibold">Semibold weight (600)</Text>
      <Text weight="bold">Bold weight (700)</Text>
      <Text weight="extrabold">Extra bold weight (800)</Text>
      <Text weight="black">Black weight (900)</Text>
    </div>
  ),
};

// Text Alignment
export const TextAlignment: Story = {
  render: () => (
    <div className="w-96 space-y-4 border border-border p-4 rounded-lg">
      <Text align="left">
        Left aligned text - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Text>
      <Text align="center">
        Center aligned text - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Text>
      <Text align="right">
        Right aligned text - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Text>
      <Text align="justify">
        Justified text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>
    </div>
  ),
};

// Font Families
export const FontFamilies: Story = {
  render: () => (
    <div className="space-y-3">
      <Text family="sans">Sans-serif font - Clean and modern typography</Text>
      <Text family="serif">Serif font - Traditional and elegant typography</Text>
      <Text family="mono">Monospace font - Perfect for code snippets</Text>
      <Text family="display">Display font - Decorative and eye-catching</Text>
    </div>
  ),
};

// Text Decorations
export const TextDecorations: Story = {
  render: () => (
    <div className="space-y-2">
      <Text decoration="none">No text decoration</Text>
      <Text decoration="underline">Underlined text</Text>
      <Text decoration="overline">Overlined text</Text>
      <Text decoration="line-through">Line-through text</Text>
    </div>
  ),
};

// Text Transforms
export const TextTransforms: Story = {
  render: () => (
    <div className="space-y-2">
      <Text transform="none">Original Case Text</Text>
      <Text transform="uppercase">UPPERCASE TEXT</Text>
      <Text transform="lowercase">lowercase text</Text>
      <Text transform="capitalize">Capitalized Text</Text>
    </div>
  ),
};

// Whitespace Handling
export const WhitespaceHandling: Story = {
  render: () => (
    <div className="w-64 space-y-4 border border-border p-4 rounded-lg">
      <div>
        <Text size="sm" weight="semibold">
          Normal whitespace:
        </Text>
        <Text whitespace="normal">This text will wrap normally and collapse whitespace.</Text>
      </div>
      <div>
        <Text size="sm" weight="semibold">
          No wrap:
        </Text>
        <Text whitespace="nowrap">This text will not wrap even if it&apos;s very long.</Text>
      </div>
      <div>
        <Text size="sm" weight="semibold">
          Pre-formatted:
        </Text>
        <Text whitespace="pre">{"Line 1\\nLine 2\\n    Indented"}</Text>
      </div>
    </div>
  ),
};

// Text Overflow
export const TextOverflow: Story = {
  render: () => (
    <div className="w-48 space-y-4 border border-border p-4 rounded-lg">
      <div>
        <Text size="sm" weight="semibold">
          Visible overflow:
        </Text>
        <Text overflow="visible">This is a very long text that will overflow the container.</Text>
      </div>
      <div>
        <Text size="sm" weight="semibold">
          Hidden overflow:
        </Text>
        <Text overflow="hidden">
          This is a very long text that will be hidden when it overflows.
        </Text>
      </div>
      <div>
        <Text size="sm" weight="semibold">
          Ellipsis overflow:
        </Text>
        <Text overflow="ellipsis">
          This is a very long text that will show ellipsis when it overflows.
        </Text>
      </div>
    </div>
  ),
};

// Combined Styling
export const CombinedStyling: Story = {
  render: () => (
    <div className="space-y-4">
      <Text size="2xl" variant="gradient" weight="bold" align="center" family="display">
        Dragon Farm: Mystical Adventure
      </Text>
      <Text size="lg" variant="accent" weight="semibold" decoration="underline">
        Welcome to the realm of dragons
      </Text>
      <Text variant="muted" transform="capitalize" family="serif">
        explore magical lands and tame mighty creatures
      </Text>
    </div>
  ),
};

// Convenience Components
export const ConvenienceComponents: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <P>This is a paragraph using the P component.</P>
      </div>
      <div>
        <Label>This is a label: </Label>
        <Span variant="accent">inline span text</Span>
      </div>
      <div>
        <Small variant="muted">Small print text</Small>
      </div>
      <div>
        <Strong>Bold text using Strong component</Strong>
      </div>
      <div>
        <Em>Emphasized text using Em component</Em>
      </div>
      <div>
        <Mark className="bg-yellow-200 px-1">Highlighted text</Mark>
      </div>
      <div>
        <Text>
          Original text with <Del>deleted text</Del> and <Ins>inserted text</Ins>
        </Text>
      </div>
      <div>
        <Text>
          Chemical formula: H<Sub>2</Sub>O and E=mc<Sup>2</Sup>
        </Text>
      </div>
    </div>
  ),
};
