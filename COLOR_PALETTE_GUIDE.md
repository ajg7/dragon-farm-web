# Ocean Dragon Color Palette - Dragon Farm

## Overview

This document outlines the Ocean Dragon color palette implementation for the Dragon Farm web application. The palette is inspired by ocean depths and dragon scales, creating a mystical and cohesive visual experience.

## Color Palette

### Primary Colors

| Color                  | Hex       | RGB                 | HSL                  | Usage                                     |
| ---------------------- | --------- | ------------------- | -------------------- | ----------------------------------------- |
| **Dragon Emerald**     | `#28dd86` | `rgb(40, 221, 134)` | `hsl(151, 73%, 51%)` | Success states, CTAs, growth indicators   |
| **Dragon Teal**        | `#109ca7` | `rgb(16, 156, 167)` | `hsl(184, 82%, 36%)` | Secondary actions, info states            |
| **Dragon Navy**        | `#0c366f` | `rgb(12, 54, 111)`  | `hsl(215, 81%, 24%)` | Primary actions, navigation, headers      |
| **Dragon Deep Purple** | `#23024d` | `rgb(35, 2, 77)`    | `hsl(266, 95%, 15%)` | Text, mystical elements, premium features |
| **Dragon Dark Purple** | `#34073a` | `rgb(52, 7, 58)`    | `hsl(293, 78%, 13%)` | Dark backgrounds, shadows, ancient themes |

## Implementation

### CSS Variables (index.css)

The colors are implemented as CSS custom properties for both light and dark themes:

```css
:root {
  --primary: 215 81% 24%; /* dragon-navy */
  --secondary: 184 82% 36%; /* dragon-teal */
  --accent: 151 73% 51%; /* dragon-emerald */
  /* ... */
}
```

### Tailwind Configuration

Custom color classes are available in Tailwind:

```javascript
// Available classes
bg - dragon - emerald;
bg - dragon - teal;
bg - dragon - navy;
bg - dragon - deep - purple;
bg - dragon - dark - purple;

text - dragon - emerald;
text - dragon - teal;
// ... etc
```

### Button Variants

New dragon-themed button variants have been added:

- `variant="dragon"` - Navy blue with white text
- `variant="emerald"` - Bright emerald with dark purple text
- `variant="teal"` - Teal with white text
- `variant="mystical"` - Gradient from deep purple to dark purple
- `variant="outline_dragon"` - Navy outline with transparent background

## Usage Guidelines

### Color Meanings

- **Emerald**: Growth, success, life energy, positive actions
- **Teal**: Wisdom, balance, tranquility, secondary information
- **Navy**: Depth, trust, stability, primary navigation
- **Deep Purple**: Mystery, magic, power, premium content
- **Dark Purple**: Ancient wisdom, shadows, dark themes

### Best Practices

1. Use **Navy** for primary actions and main navigation
2. Use **Emerald** for success states and call-to-action buttons
3. Use **Teal** for secondary actions and informational elements
4. Use **Purple shades** for premium features and mystical content
5. Maintain proper contrast ratios for accessibility
6. Use gradients sparingly for special emphasis

### Accessibility

- All color combinations meet WCAG AA contrast requirements
- Text colors are carefully chosen to ensure readability
- Focus states use high-contrast ring colors

## Components Updated

### Button Component

- Added 5 new dragon-themed variants
- Maintained existing functionality
- Enhanced with transition effects

### Color Palette Showcase

- Comprehensive demonstration component
- Shows all colors and their usage
- Interactive button examples
- Design system documentation

### App Component

- Updated to use new color scheme
- Enhanced navigation with dragon theme
- Improved visual hierarchy
- Added mystical gradient backgrounds

## File Structure

```
src/
├── lib/
│   └── colors.ts          # Color palette definitions
├── components/
│   ├── ui/
│   │   ├── button.tsx     # Enhanced with dragon variants
│   │   ├── card.tsx       # Uses semantic color variables
│   │   └── sonner.tsx     # Toast notifications
│   └── ColorPaletteShowcase.tsx  # Demonstration component
├── index.css              # CSS variables and theme setup
└── App.tsx                # Main app with new design

tailwind.config.js         # Tailwind color configuration
```

## Future Enhancements

- Add more UI component variants
- Implement theme switching functionality
- Create dragon-specific icon set
- Add animation effects using the color palette
- Develop complementary gradients and patterns
