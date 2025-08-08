# Text Component

A comprehensive and flexible text component system for the Dragon Farm application, built with TypeScript, React, and Tailwind CSS. The component provides consistent typography with full customization options.

## Features

- **Multiple Sizes**: From `xs` (12px) to `4xl` (36px)
- **Color Variants**: 12 predefined variants including gradient and glow effects
- **Font Weights**: All 9 standard font weights (100-900)
- **Text Alignment**: Left, center, right, and justify
- **Font Families**: Sans, serif, monospace, and display fonts
- **Text Decorations**: Underline, overline, line-through, and none
- **Text Transforms**: Uppercase, lowercase, capitalize, and none
- **Whitespace Control**: Normal, nowrap, pre, pre-line, pre-wrap, break-spaces
- **Overflow Handling**: Visible, hidden, ellipsis, and clip
- **Semantic Elements**: Automatic HTML element selection based on usage
- **TypeScript Support**: Full type safety and IntelliSense support
- **Dragon Farm Theme**: Integrated with the application's color palette

## Basic Usage

```tsx
import { Text, P, Span, Label } from "@/components/ui/Text";

// Basic text with default styling
<Text>Default text content</Text>

// Paragraph element
<P>This is a paragraph of text.</P>

// Inline span with accent color
<Span variant="accent">Highlighted text</Span>

// Form label
<Label htmlFor="email">Email Address</Label>
```

## Props

### TextProps

| Prop         | Type                                                                                                                                                              | Default     | Description            |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ---------------------- |
| `size`       | `"xs" \| "sm" \| "base" \| "lg" \| "xl" \| "2xl" \| "3xl" \| "4xl"`                                                                                               | `"base"`    | Text size              |
| `variant`    | `"default" \| "primary" \| "secondary" \| "accent" \| "muted" \| "inverse" \| "mystical" \| "success" \| "info" \| "warning" \| "danger" \| "gradient" \| "glow"` | `"default"` | Color variant          |
| `weight`     | `"thin" \| "extralight" \| "light" \| "normal" \| "medium" \| "semibold" \| "bold" \| "extrabold" \| "black"`                                                     | `"normal"`  | Font weight            |
| `align`      | `"left" \| "center" \| "right" \| "justify"`                                                                                                                      | `"left"`    | Text alignment         |
| `family`     | `"sans" \| "serif" \| "mono" \| "display"`                                                                                                                        | `"sans"`    | Font family            |
| `decoration` | `"none" \| "underline" \| "overline" \| "line-through"`                                                                                                           | `"none"`    | Text decoration        |
| `transform`  | `"none" \| "uppercase" \| "lowercase" \| "capitalize"`                                                                                                            | `"none"`    | Text transform         |
| `whitespace` | `"normal" \| "nowrap" \| "pre" \| "pre-line" \| "pre-wrap" \| "break-spaces"`                                                                                     | `"normal"`  | Whitespace handling    |
| `overflow`   | `"visible" \| "hidden" \| "ellipsis" \| "clip"`                                                                                                                   | `"visible"` | Text overflow          |
| `as`         | `"p" \| "span" \| "div" \| "label" \| "small" \| "strong" \| "em" \| "mark" \| "del" \| "ins" \| "sub" \| "sup"`                                                  | `"p"`       | HTML element           |
| `className`  | `string`                                                                                                                                                          | -           | Additional CSS classes |
| `children`   | `React.ReactNode`                                                                                                                                                 | -           | Content to display     |

## Size Examples

```tsx
<Text size="xs">Extra small text (12px)</Text>
<Text size="sm">Small text (14px)</Text>
<Text size="base">Base text (16px)</Text>
<Text size="lg">Large text (18px)</Text>
<Text size="xl">Extra large text (20px)</Text>
<Text size="2xl">2XL text (24px)</Text>
<Text size="3xl">3XL text (30px)</Text>
<Text size="4xl">4XL text (36px)</Text>
```

## Color Variants

```tsx
<Text variant="default">Default Dragon Farm text</Text>
<Text variant="primary">Primary navy blue</Text>
<Text variant="secondary">Secondary text color</Text>
<Text variant="accent">Dragon emerald green</Text>
<Text variant="muted">Subtle muted text</Text>
<Text variant="inverse">White text for dark backgrounds</Text>
<Text variant="mystical">Deep purple mystical color</Text>
<Text variant="success">Success green</Text>
<Text variant="info">Information teal</Text>
<Text variant="warning">Warning amber</Text>
<Text variant="danger">Error red</Text>
<Text variant="gradient">Rainbow gradient effect</Text>
<Text variant="glow">Glowing emerald effect</Text>
```

## Font Weights

```tsx
<Text weight="thin">Thin (100)</Text>
<Text weight="light">Light (300)</Text>
<Text weight="normal">Normal (400)</Text>
<Text weight="medium">Medium (500)</Text>
<Text weight="semibold">Semibold (600)</Text>
<Text weight="bold">Bold (700)</Text>
<Text weight="black">Black (900)</Text>
```

## Text Alignment

```tsx
<Text align="left">Left aligned text</Text>
<Text align="center">Center aligned text</Text>
<Text align="right">Right aligned text</Text>
<Text align="justify">Justified text for longer paragraphs</Text>
```

## Font Families

```tsx
<Text family="sans">Sans-serif (Inter)</Text>
<Text family="serif">Serif (Playfair Display)</Text>
<Text family="mono">Monospace (JetBrains Mono)</Text>
<Text family="display">Display (Cinzel)</Text>
```

## Advanced Styling

```tsx
// Mystical title with gradient
<Text
  size="2xl"
  variant="gradient"
  weight="bold"
  align="center"
  family="display"
>
  Dragon Farm Adventure
</Text>

// Muted description with custom styling
<Text
  variant="muted"
  transform="capitalize"
  family="serif"
  overflow="ellipsis"
  className="max-w-xs"
>
  Enter the mystical realm of dragons
</Text>

// Warning message with emphasis
<Text
  variant="warning"
  weight="semibold"
  decoration="underline"
  transform="uppercase"
>
  Important Notice
</Text>
```

## Convenience Components

The Text component includes several convenience components for common HTML elements:

### Paragraph (P)

```tsx
<P>A paragraph of text with default styling.</P>
<P variant="muted" size="sm">A smaller, muted paragraph.</P>
```

### Span

```tsx
<P>
  This paragraph contains <Span variant="accent">highlighted text</Span> inline.
</P>
```

### Label

```tsx
<Label htmlFor="email" variant="primary" weight="medium">
  Email Address
</Label>
<input id="email" type="email" />
```

### Small

```tsx
<Small variant="muted">Fine print or disclaimer text</Small>
```

### Strong

```tsx
<Strong>Important bold text</Strong>
```

### Em

```tsx
<Em>Emphasized italic text</Em>
```

### Mark

```tsx
<Text>
  This text has <Mark className="bg-yellow-200 px-1">highlighted content</Mark> in it.
</Text>
```

### Del and Ins

```tsx
<Text>
  The price is <Del>$99.99</Del> <Ins>$79.99</Ins>
</Text>
```

### Sub and Sup

```tsx
<Text>
  Chemical formula: H<Sub>2</Sub>O and E=mc<Sup>2</Sup>
</Text>
```

## Responsive Design

The component works seamlessly with Tailwind's responsive utilities:

```tsx
<Text className="text-sm md:text-base lg:text-lg">
  Responsive text that grows with screen size
</Text>

<Text size="base" className="text-center md:text-left">
  Centered on mobile, left-aligned on desktop
</Text>
```

## Accessibility

- Semantic HTML elements are used based on content purpose
- Color variants maintain sufficient contrast ratios
- Font sizes follow WCAG guidelines
- Text can be scaled without breaking layout

## Customization

Extend the component with additional Tailwind classes:

```tsx
<Text variant="accent" className="hover:underline transition-all duration-200">
  Interactive text with hover effects
</Text>
```

## Storybook

View all component variations and examples in Storybook:

- Main Text component: `UI/Text`
- Individual components: `UI/Text/P`, `UI/Text/Span`, `UI/Text/Label`

## Integration

The Text component is fully integrated with the Dragon Farm color palette and design system. It automatically uses the theme colors defined in `index.css` and works with the project's Tailwind configuration.
