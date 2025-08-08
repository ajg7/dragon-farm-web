# Dragon Farm Header Components

A comprehensive set of semantic header components designed for the Dragon Farm application, featuring dragon-themed styling, responsive design, and accessibility features.

## Components

### `Header` - Base Component

The main header component that supports all heading levels (h1-h6) with flexible styling options.

### Individual Components

- `H1` - Hero headings and page titles
- `H2` - Major section headers
- `H3` - Subsection titles
- `H4` - Content headers
- `H5` - Minor section headers
- `H6` - Micro-sections and metadata

## Features

- ✅ **Semantic HTML** - Proper heading hierarchy with h1-h6 elements
- ✅ **Dragon Theme** - Integrated with the Ocean Dragon color palette
- ✅ **Responsive Design** - Scales beautifully across all device sizes
- ✅ **TypeScript Support** - Full type safety and IntelliSense
- ✅ **Accessibility** - WCAG compliant with proper contrast ratios
- ✅ **Flexible Variants** - 8 different color and style variants
- ✅ **Alignment Options** - Left, center, and right text alignment
- ✅ **Semantic Override** - Visual/semantic element separation

## Color Variants

### `default` - Deep Purple Magic

Default styling using the dragon deep purple color for mystical content.

### `primary` - Ocean Navy Depths

Primary variant in dragon navy for main navigation and important sections.

### `accent` - Emerald Dragon Scales

Accent variant in dragon emerald for highlighting and call-to-action content.

### `mystical` - Ancient Dragon Power

Gradient variant from deep purple to dark purple for magical elements.

### `teal` - Wisdom of the Waters

Teal variant for educational content and secondary information.

### `gradient` - Rainbow Dragon Breath

Multi-color gradient from emerald through teal to navy for spectacular displays.

### `shadow` - Mysterious Depths

Adds drop-shadow effects for subtle emphasis and depth.

### `glow` - Emerald Dragon Aura

Glowing emerald text with shadow effects for magical announcements.

## Usage Examples

### Basic Usage

```tsx
import { H1, H2, H3, H4, H5, H6 } from "@/components/ui";

function DragonFarmPage() {
  return (
    <div>
      <H1 variant="gradient" align="center">
        Welcome to Dragon Farm
      </H1>

      <H2 variant="mystical">Ancient Dragon Sanctuary</H2>

      <H3 variant="accent">Ocean Dragon Species</H3>
    </div>
  );
}
```

### Advanced Usage with Semantic Override

```tsx
// Visual H1 but semantic H2 for proper document structure
<Header level={1} as="h2" variant="primary">
  Visually Large but Semantically Second-Level
</Header>
```

### Responsive Hero Section

```tsx
<div className="bg-gradient-to-r from-dragon-deep-purple/5 to-dragon-dark-purple/5 p-6 rounded-lg">
  <H1 variant="gradient" align="center">
    Dragon Farm
  </H1>
  <H2 variant="mystical" align="center">
    Ancient Creatures Await
  </H2>
</div>
```

## Props

### `HeaderProps`

- `level?: 1 | 2 | 3 | 4 | 5 | 6` - Heading level (defaults to 1)
- `variant?: "default" | "primary" | "accent" | "mystical" | "teal" | "gradient" | "shadow" | "glow"` - Visual style variant
- `align?: "left" | "center" | "right"` - Text alignment (defaults to left)
- `as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"` - Override semantic HTML element
- `className?: string` - Additional CSS classes
- `children: React.ReactNode` - Header content

### Individual Component Props

All individual components (H1-H6) accept the same props except `level` and `as`, which are predetermined.

## Responsive Behavior

Headers automatically scale across breakpoints:

- **Mobile (default)**: Base font sizes optimized for mobile viewing
- **md (768px+)**: Increased font sizes for tablet screens
- **lg (1024px+)**: Maximum font sizes for desktop displays

## Accessibility

- Proper semantic HTML structure maintains heading hierarchy
- WCAG AA contrast ratios for all color variants
- Screen reader friendly with descriptive component names
- Keyboard navigation support inherited from semantic HTML

## Design System Integration

Headers integrate seamlessly with the Dragon Farm design system:

- Uses CSS custom properties from `index.css`
- Follows the Ocean Dragon color palette
- Consistent with Tailwind configuration
- Compatible with existing theme variables

## Storybook Documentation

Comprehensive Storybook documentation includes:

- Interactive component playground
- All variants and combinations showcase
- Real-world usage examples
- Accessibility testing with a11y addon
- Design system integration examples

Access Storybook at: `http://localhost:6006`

## File Structure

```
src/components/ui/
├── header.tsx           # Main header component
├── header.stories.tsx   # Main Storybook stories
├── h1.stories.tsx      # H1 specific stories
├── h2.stories.tsx      # H2 specific stories
├── h3.stories.tsx      # H3 specific stories
├── h4.stories.tsx      # H4 specific stories
├── h5.stories.tsx      # H5 specific stories
├── h6.stories.tsx      # H6 specific stories
└── index.ts            # Component exports
```

## Development

To develop and test the header components:

```bash
# Start Storybook development server
npm run storybook

# Run tests
npm test

# Build and type-check
npm run build
```

## Integration with Dragon Farm Theme

The header components are specifically designed for the Dragon Farm application and integrate with:

- **Color Palette**: Ocean Dragon themed colors (emerald, teal, navy, deep purple, dark purple)
- **Typography**: Display fonts with appropriate weights and spacing
- **Responsive Design**: Mobile-first approach with desktop enhancements
- **Animation**: Smooth transitions and hover effects
- **Accessibility**: High contrast ratios and semantic structure

## Best Practices

1. **Maintain Hierarchy**: Always use headers in proper semantic order (H1 → H2 → H3, etc.)
2. **Choose Appropriate Variants**: Use `primary` for main sections, `accent` for highlights, `mystical` for special content
3. **Consider Context**: Match variant to content purpose and surrounding design
4. **Responsive Testing**: Test headers across different screen sizes
5. **Accessibility**: Ensure proper contrast and logical heading structure

## Contributing

When adding new variants or features:

1. Update the `headerVariants` CVA configuration
2. Add comprehensive Storybook stories
3. Test across all breakpoints and themes
4. Ensure accessibility compliance
5. Update this documentation

---

_Built with ❤️ for the Dragon Farm universe_
