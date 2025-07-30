# Dragon Farm Button Component System

This document describes the comprehensive button component system redesigned for the Dragon Farm web application.

## Overview

The button system has been restructured into a modular folder-based approach with five distinct button types, each with primary and secondary color variants, three sizes, and proper disabled states.

## Button Components

### 1. Button (Basic Solid Button)

**File:** `src/components/ui/button/Button.tsx`
**Purpose:** Primary action buttons with solid backgrounds

#### Variants:

- **Primary**: Navy background (`dragon-navy`) with white text, hover effect to deep purple
- **Secondary**: Emerald background (`dragon-emerald`) with deep purple text

#### Sizes:

- **Small**: 32px height, 12px padding
- **Medium**: 40px height, 16px padding (default)
- **Large**: 48px height, 24px padding

#### States:

- Normal
- Hover (color transition + shadow)
- Active (pressed state)
- Disabled (50% opacity, no interactions)

### 2. TextButton

**File:** `src/components/ui/button/TextButton.tsx`
**Purpose:** Text-only buttons for secondary actions and navigation

#### Variants:

- **Primary**: Dragon navy text with subtle hover background
- **Secondary**: Dragon emerald text with subtle hover background

#### Features:

- No background in normal state
- Subtle hover effects with color transitions
- Reduced padding for compact layout

### 3. LinkButton

**File:** `src/components/ui/button/LinkButton.tsx`
**Purpose:** Link-styled buttons that can function as buttons or actual links

#### Special Properties:

- `href` prop for actual links
- `target` and `rel` props for link behavior
- Underline decoration with hover effects
- Can render as `<a>` or `<button>` depending on props

#### Variants:

- **Primary**: Dragon navy color with underline
- **Secondary**: Dragon emerald color with underline

### 4. IconButton

**File:** `src/components/ui/button/IconButton.tsx`
**Purpose:** Square icon-only buttons for toolbar actions and compact interfaces

#### Special Properties:

- `icon` prop for icon content (emoji, SVG, etc.)
- `aria-label` prop required for accessibility
- Square aspect ratio
- Optimized for single icons

#### Sizes:

- **Small**: 32x32px
- **Medium**: 40x40px (default)
- **Large**: 48x48px

### 5. OutlinedButton

**File:** `src/components/ui/button/OutlinedButton.tsx`
**Purpose:** Buttons with transparent backgrounds and colored borders

#### Variants:

- **Primary**: Dragon navy border and text, fills with navy on hover
- **Secondary**: Dragon emerald border and text, fills with emerald on hover

#### Features:

- 2px border width
- Smooth fill transition on hover
- Works well on various backgrounds

## Color System

All buttons use the Dragon Farm Ocean palette:

```typescript
// Primary colors
dragon-navy: #0c366f      // Deep blue for primary actions
dragon-emerald: #28dd86   // Bright green for secondary actions
dragon-deep-purple: #23024d // Dark purple for hover states
dragon-teal: #109ca7      // Teal for accents
```

## Usage Examples

### Basic Actions

```tsx
import { Button } from '@/components/ui/button';

// Primary action
<Button variant="primary" size="medium">Save Changes</Button>

// Secondary action
<Button variant="secondary" size="medium">Cancel</Button>
```

### Navigation

```tsx
import { TextButton, LinkButton } from '@/components/ui/button';

// In-page navigation
<TextButton variant="primary">View Details</TextButton>

// External link
<LinkButton variant="primary" href="/dragons" target="_blank">
  View All Dragons
</LinkButton>
```

### Toolbar Actions

```tsx
import { IconButton } from "@/components/ui/button";

<IconButton variant="primary" size="small" icon="⚙️" aria-label="Settings" />;
```

### Secondary Actions

```tsx
import { OutlinedButton } from "@/components/ui/button";

<OutlinedButton variant="primary" size="medium">
  View Statistics
</OutlinedButton>;
```

## Storybook Documentation

Each button component has comprehensive Storybook stories located in:

- `Button.stories.tsx` - Basic solid buttons
- `TextButton.stories.tsx` - Text-only buttons
- `LinkButton.stories.tsx` - Link-styled buttons
- `IconButton.stories.tsx` - Icon-only buttons
- `OutlinedButton.stories.tsx` - Outlined buttons
- `AllButtons.stories.tsx` - Complete showcase

## File Structure

```
src/components/ui/button/
├── index.ts              # Main exports
├── types.ts              # TypeScript types
├── styles.ts             # Shared styling utilities
├── Button.tsx            # Basic solid button
├── TextButton.tsx        # Text-only button
├── LinkButton.tsx        # Link-styled button
├── IconButton.tsx        # Icon-only button
├── OutlinedButton.tsx    # Outlined button
├── Button.stories.tsx    # Button stories
├── TextButton.stories.tsx
├── LinkButton.stories.tsx
├── IconButton.stories.tsx
├── OutlinedButton.stories.tsx
└── AllButtons.stories.tsx # Complete showcase
```

## Accessibility

All buttons include:

- Proper ARIA labels (especially IconButton)
- Keyboard navigation support
- Focus indicators with ring styles
- Semantic HTML elements
- Screen reader compatible text

## Best Practices

### When to Use Each Button Type

1. **Button (Solid)**: Primary actions, form submissions, important CTAs
2. **TextButton**: Secondary navigation, subtle actions, inline controls
3. **LinkButton**: Navigation to other pages, external links, breadcrumbs
4. **IconButton**: Toolbar actions, compact interfaces, quick controls
5. **OutlinedButton**: Alternative actions, secondary CTAs, ghost buttons

### Size Guidelines

- **Small**: Compact toolbars, inline actions, mobile interfaces
- **Medium**: Standard interface elements, most common use case
- **Large**: Hero sections, prominent CTAs, accessibility requirements

### Variant Guidelines

- **Primary**: Main actions, positive actions, primary navigation
- **Secondary**: Alternative actions, neutral actions, secondary navigation

## Migration from Old Button System

The old button component had multiple variants in a single file. The new system separates these into distinct components:

```tsx
// Old system
<Button variant="dragon">Action</Button>
<Button variant="outline_dragon">Secondary</Button>
<Button variant="ghost">Text Action</Button>

// New system
<Button variant="primary">Action</Button>
<OutlinedButton variant="primary">Secondary</OutlinedButton>
<TextButton variant="primary">Text Action</TextButton>
```

## Development Notes

- All buttons use the `class-variance-authority` library for style variants
- Tailwind CSS classes are used for styling
- TypeScript interfaces ensure type safety
- React.forwardRef is used for proper ref forwarding
- Components follow React best practices and patterns
