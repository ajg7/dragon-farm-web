# Button Component

A comprehensive button system for Dragon Farm with multiple variants, sizes, and link functionality. Built with Tailwind CSS and class-variance-authority for type-safe variant management.

## Features

- ✨ **Dragon-themed variants** with mystical colors
- 🔗 **Link button functionality** with internal and external link support
- 📱 **Responsive design** with multiple sizes
- ♿ **Accessibility features** with proper focus states
- 🎨 **Consistent styling** with CVA (Class Variance Authority)
- 💫 **Loading states** and disabled states
- 🖱️ **Icon button support** with different sizes

## Installation

The Button component is already set up in your project. Import it from:

```tsx
import {
  Button,
  LinkButton,
  ExternalLinkButton,
  DragonButton,
  EmeraldButton,
  MysticalButton,
} from "@/components/ui/Buttons";
```

## Basic Usage

### Standard Button

```tsx
import { Button } from "@/components/ui/Buttons";

// Basic button
<Button>Click me</Button>

// Button with variant
<Button variant="dragon">Dragon Button</Button>

// Button with size
<Button size="lg" variant="emerald">Large Emerald Button</Button>

// Full width button
<Button fullWidth variant="mystical">Full Width Mystical</Button>
```

### Link Buttons

```tsx
import { Button, LinkButton, ExternalLinkButton } from "@/components/ui/Buttons";

// Internal link button
<LinkButton href="/dashboard">Go to Dashboard</LinkButton>

// Button component with link functionality
<Button variant="dragon" href="/profile">View Profile</Button>

// External link button (opens in new tab)
<ExternalLinkButton href="https://github.com" external variant="emerald">
  Visit GitHub ↗
</ExternalLinkButton>
```

### Convenience Components

```tsx
import { DragonButton, EmeraldButton, MysticalButton } from "@/components/ui/Buttons";

// Pre-configured dragon-themed buttons
<DragonButton>Dragon Navy Button</DragonButton>
<EmeraldButton>Dragon Emerald Button</EmeraldButton>
<MysticalButton>Mystical Gradient Button</MysticalButton>
```

## Props

### Button Props

| Prop        | Type            | Default     | Description                               |
| ----------- | --------------- | ----------- | ----------------------------------------- |
| `variant`   | `ButtonVariant` | `"default"` | Visual style variant                      |
| `size`      | `ButtonSize`    | `"default"` | Button size                               |
| `fullWidth` | `boolean`       | `false`     | Whether button takes full container width |
| `disabled`  | `boolean`       | `false`     | Disabled state                            |
| `className` | `string`        | -           | Additional CSS classes                    |
| `children`  | `ReactNode`     | -           | Button content                            |

### Link Button Props

Link buttons inherit all Button props plus:

| Prop     | Type     | Default | Description                                  |
| -------- | -------- | ------- | -------------------------------------------- |
| `href`   | `string` | -       | Link destination (required for link buttons) |
| `target` | `string` | -       | Link target (`"_blank"`, `"_self"`, etc.)    |
| `rel`    | `string` | -       | Link relationship                            |

### External Link Button Props

External link buttons automatically set `target="_blank"` and `rel="noopener noreferrer"`:

| Prop       | Type     | Default | Description                   |
| ---------- | -------- | ------- | ----------------------------- |
| `external` | `true`   | -       | Marks button as external link |
| `href`     | `string` | -       | External link destination     |

## Variants

### Basic Variants

- `default` - Standard button with primary colors
- `secondary` - Secondary styling with teal colors
- `outline` - Outlined button with transparent background
- `ghost` - Minimal styling, background on hover only
- `destructive` - Red styling for dangerous actions
- `link` - Text link styling with underline on hover

### Dragon-Themed Variants

- `dragon` - Navy blue with dragon theme
- `emerald` - Bright emerald with dark text
- `teal` - Teal background with white text
- `mystical` - Gradient from deep purple to dark purple
- `success` - Success green (same as emerald)
- `accent` - Accent color variant

### Outline Dragon Variants

- `outline-dragon` - Navy outline with transparent background
- `outline-emerald` - Emerald outline with transparent background
- `outline-teal` - Teal outline with transparent background

### Link Variants with Dragon Theme

- `link-dragon` - Dragon navy text link
- `link-emerald` - Emerald text link
- `link-teal` - Teal text link
- `link-mystical` - Deep purple text link

## Sizes

- `xs` - Extra small (28px height)
- `sm` - Small (36px height)
- `default` - Default (40px height)
- `lg` - Large (44px height)
- `xl` - Extra large (48px height)
- `icon` - Square icon button (40x40px)
- `icon-sm` - Small square icon button (32x32px)
- `icon-lg` - Large square icon button (48x48px)

## Examples

### Basic Examples

```tsx
// Standard buttons
<Button>Default Button</Button>
<Button variant="dragon">Dragon Button</Button>
<Button variant="emerald">Emerald Button</Button>
<Button variant="mystical">Mystical Button</Button>

// Outline buttons
<Button variant="outline">Outline Button</Button>
<Button variant="outline-dragon">Outline Dragon</Button>
<Button variant="outline-emerald">Outline Emerald</Button>
```

### Size Examples

```tsx
<Button size="xs">Extra Small</Button>
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>
```

### Icon Button Examples

```tsx
<Button size="icon" variant="dragon">
  <StarIcon />
</Button>

<Button size="icon-sm" variant="emerald">
  <PlusIcon />
</Button>

<Button size="icon-lg" variant="mystical">
  <CheckIcon />
</Button>
```

### Link Button Examples

```tsx
// Internal links
<LinkButton href="/dashboard">Dashboard</LinkButton>
<Button variant="link-dragon" href="/profile">Profile</Button>

// External links
<ExternalLinkButton href="https://github.com" external variant="dragon">
  GitHub ↗
</ExternalLinkButton>

// Link with custom styling
<Button variant="link-emerald" href="https://docs.example.com">
  Documentation
</Button>
```

### Loading State Examples

```tsx
<Button disabled variant="dragon">
  <Spinner className="mr-2" />
  Loading...
</Button>

<Button disabled variant="emerald">
  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2" />
  Processing...
</Button>
```

### Full Width Examples

```tsx
<div className="w-full max-w-md space-y-4">
  <Button fullWidth variant="dragon">
    Full Width Dragon
  </Button>
  <Button fullWidth variant="emerald">
    Full Width Emerald
  </Button>
  <Button fullWidth variant="outline">
    Full Width Outline
  </Button>
</div>
```

### Event Handler Examples

```tsx
<Button
  variant="dragon"
  onClick={() => console.log("Button clicked!")}
>
  Click to Log
</Button>

<Button
  variant="emerald"
  onClick={(e) => {
    e.preventDefault();
    alert("Emerald button clicked!");
  }}
>
  Click for Alert
</Button>
```

## Accessibility

The Button component includes several accessibility features:

- **Focus management**: Proper focus ring with dragon theme colors
- **Keyboard navigation**: Full keyboard support
- **Screen reader support**: Proper ARIA attributes
- **Disabled states**: Proper disabled styling and behavior
- **Link semantics**: Proper link behavior for link buttons

```tsx
// Accessible button with ARIA label
<Button
  variant="dragon"
  aria-label="Add new dragon to farm"
  onClick={handleAddDragon}
>
  <PlusIcon />
</Button>

// Accessible external link
<ExternalLinkButton
  href="https://github.com/your-repo"
  external
  aria-label="View source code on GitHub (opens in new tab)"
>
  GitHub
</ExternalLinkButton>
```

## Styling

The component uses Tailwind CSS with custom dragon theme colors. All variants are defined using `class-variance-authority` for type safety.

### Custom Colors Used

- `dragon-navy`: #0c366f
- `dragon-emerald`: #28dd86
- `dragon-teal`: #109ca7
- `dragon-deep-purple`: #23024d
- `dragon-dark-purple`: #34073a

### Focus States

Focus states use a 2px ring with the dragon navy color and 2px offset for accessibility.

### Hover States

Hover states use opacity changes and color transformations consistent with the dragon theme.

## TypeScript

The component is fully typed with TypeScript:

```tsx
import type {
  ButtonProps,
  LinkButtonProps,
  ExternalLinkButtonProps,
} from "@/components/ui/Buttons";

// Type-safe button props
const buttonProps: ButtonProps = {
  variant: "dragon",
  size: "lg",
  fullWidth: true,
  disabled: false,
};

// Type-safe link button props
const linkProps: LinkButtonProps = {
  href: "/dashboard",
  variant: "emerald",
  target: "_self",
};
```

## Advanced Usage

### Custom Styling

```tsx
<Button variant="dragon" className="shadow-lg hover:shadow-xl transition-shadow duration-300">
  Custom Shadow Button
</Button>
```

### Conditional Rendering

```tsx
const MyComponent = ({ isLoading, isExternal, href }) => (
  <>
    {isExternal ? (
      <ExternalLinkButton href={href} external variant="dragon">
        External Link
      </ExternalLinkButton>
    ) : (
      <Button variant="emerald" disabled={isLoading}>
        {isLoading ? "Loading..." : "Submit"}
      </Button>
    )}
  </>
);
```

### Form Integration

```tsx
<form onSubmit={handleSubmit}>
  <Button type="submit" variant="dragon" fullWidth>
    Submit Form
  </Button>

  <Button type="button" variant="outline" onClick={handleReset}>
    Reset
  </Button>
</form>
```

## Demo Component

To see all button variants in action, you can use the `ButtonDemo` component:

```tsx
import ButtonDemo from "@/components/ui/Buttons/ButtonDemo";

// Displays all button variants and examples
<ButtonDemo />;
```

This component showcases all variants, sizes, states, and usage patterns in a comprehensive demo.
