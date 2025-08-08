# Checkbox Component

A comprehensive and accessible checkbox component for the Dragon Farm application, built with TypeScript, React, and Tailwind CSS. The component provides consistent styling with full customization options and follows accessibility best practices.

## Features

- **Multiple Sizes**: From `sm` to `xl` for different contexts
- **8 Variants**: Including Dragon Farm theme colors and outline style
- **Rounded Options**: From square to fully circular checkboxes
- **Label Support**: Built-in label with positioning options
- **Description Text**: Optional secondary text for additional context
- **State Management**: Controlled and uncontrolled modes
- **Indeterminate State**: Support for tri-state checkboxes
- **Validation**: Error and success message display
- **Accessibility**: WCAG compliant with keyboard navigation
- **TypeScript Support**: Full type safety and IntelliSense
- **Custom Styling**: Extensible with additional classes

## Basic Usage

```tsx
import { Checkbox } from "@/components/ui/Checkboxes";

// Basic checkbox with label
<Checkbox label="I agree to the terms" />

// Controlled checkbox
<Checkbox
  label="Enable notifications"
  checked={isChecked}
  onChange={(e) => setIsChecked(e.target.checked)}
/>

// Checkbox without label
<Checkbox />
```

## Props

| Prop                   | Type                                                                                                  | Default     | Description                       |
| ---------------------- | ----------------------------------------------------------------------------------------------------- | ----------- | --------------------------------- |
| `size`                 | `"sm" \| "base" \| "lg" \| "xl"`                                                                      | `"base"`    | Size of the checkbox              |
| `variant`              | `"default" \| "primary" \| "accent" \| "mystical" \| "success" \| "danger" \| "warning" \| "outline"` | `"default"` | Visual style variant              |
| `rounded`              | `"none" \| "sm" \| "base" \| "md" \| "lg" \| "full"`                                                  | `"sm"`      | Border radius                     |
| `label`                | `string`                                                                                              | -           | Label text for the checkbox       |
| `description`          | `string`                                                                                              | -           | Additional description text       |
| `indeterminate`        | `boolean`                                                                                             | `false`     | Whether checkbox is indeterminate |
| `labelVariant`         | `"default" \| "primary" \| "secondary" \| "accent" \| "muted" \| "inverse" \| "mystical"`             | `"default"` | Label color variant               |
| `labelWeight`          | `"normal" \| "medium" \| "semibold"`                                                                  | `"normal"`  | Label font weight                 |
| `labelClassName`       | `string`                                                                                              | -           | Custom label styling              |
| `descriptionClassName` | `string`                                                                                              | -           | Custom description styling        |
| `labelPosition`        | `"right" \| "left"`                                                                                   | `"right"`   | Label position                    |
| `error`                | `string`                                                                                              | -           | Error message to display          |
| `success`              | `string`                                                                                              | -           | Success message to display        |
| `disabled`             | `boolean`                                                                                             | `false`     | Whether checkbox is disabled      |

## Size Examples

```tsx
<Checkbox size="sm" label="Small checkbox" />
<Checkbox size="base" label="Default size checkbox" />
<Checkbox size="lg" label="Large checkbox" />
<Checkbox size="xl" label="Extra large checkbox" />
```

## Variants

```tsx
<Checkbox variant="default" label="Default styling" />
<Checkbox variant="primary" label="Dragon navy blue" />
<Checkbox variant="accent" label="Dragon emerald green" />
<Checkbox variant="mystical" label="Deep purple mystical" />
<Checkbox variant="success" label="Success green" />
<Checkbox variant="danger" label="Error red" />
<Checkbox variant="warning" label="Warning amber" />
<Checkbox variant="outline" label="Transparent with border" />
```

## States

```tsx
// Basic states
<Checkbox label="Unchecked" />
<Checkbox label="Checked" defaultChecked />
<Checkbox label="Disabled" disabled />

// Indeterminate state (useful for "select all" functionality)
<Checkbox label="Select all" indeterminate />

// With validation messages
<Checkbox
  label="Required field"
  error="This field is required"
/>

<Checkbox
  label="Validated field"
  success="Field validated successfully"
  defaultChecked
/>
```

## Label Customization

```tsx
// Label variants
<Checkbox label="Default label" labelVariant="default" />
<Checkbox label="Primary label" labelVariant="primary" />
<Checkbox label="Accent label" labelVariant="accent" />
<Checkbox label="Muted label" labelVariant="muted" />

// Label weights
<Checkbox label="Normal weight" labelWeight="normal" />
<Checkbox label="Medium weight" labelWeight="medium" />
<Checkbox label="Semibold weight" labelWeight="semibold" />

// Label position
<Checkbox label="Right side label" labelPosition="right" />
<Checkbox label="Left side label" labelPosition="left" />
```

## With Description

```tsx
<Checkbox
  label="Enable notifications"
  description="Get notified when your dragons need attention"
  variant="accent"
/>
```

## Form Integration

```tsx
import { useState } from "react";

function PreferencesForm() {
  const [preferences, setPreferences] = useState({
    notifications: false,
    newsletter: true,
    analytics: false,
  });

  return (
    <form>
      <Checkbox
        name="notifications"
        label="Email Notifications"
        description="Receive important updates"
        checked={preferences.notifications}
        onChange={(e) =>
          setPreferences((prev) => ({
            ...prev,
            notifications: e.target.checked,
          }))
        }
      />

      <Checkbox
        name="newsletter"
        label="Newsletter Subscription"
        description="Weekly dragon farming tips"
        checked={preferences.newsletter}
        onChange={(e) =>
          setPreferences((prev) => ({
            ...prev,
            newsletter: e.target.checked,
          }))
        }
      />
    </form>
  );
}
```

## Indeterminate State

Perfect for "select all" functionality:

```tsx
function SelectAllExample() {
  const [items, setItems] = useState([
    { id: 1, name: "Fire Dragon", selected: false },
    { id: 2, name: "Ice Dragon", selected: true },
    { id: 3, name: "Earth Dragon", selected: false },
  ]);

  const selectedCount = items.filter((item) => item.selected).length;
  const isAllSelected = selectedCount === items.length;
  const isIndeterminate = selectedCount > 0 && selectedCount < items.length;

  const handleSelectAll = (checked: boolean) => {
    setItems(items.map((item) => ({ ...item, selected: checked })));
  };

  return (
    <div>
      <Checkbox
        label="Select All Dragons"
        checked={isAllSelected}
        indeterminate={isIndeterminate}
        onChange={(e) => handleSelectAll(e.target.checked)}
      />

      {items.map((item) => (
        <Checkbox
          key={item.id}
          label={item.name}
          checked={item.selected}
          onChange={(e) => {
            setItems(
              items.map((i) => (i.id === item.id ? { ...i, selected: e.target.checked } : i))
            );
          }}
        />
      ))}
    </div>
  );
}
```

## Validation

```tsx
function ValidationExample() {
  const [accepted, setAccepted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!accepted) {
      setError("You must accept the terms to continue");
    } else {
      setError("");
      // Proceed with form submission
    }
  };

  return (
    <div>
      <Checkbox
        label="I accept the Terms and Conditions"
        description="Please read our terms before accepting"
        checked={accepted}
        onChange={(e) => {
          setAccepted(e.target.checked);
          if (e.target.checked) setError("");
        }}
        error={error}
        variant={error ? "danger" : "success"}
      />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
```

## Rounded Variations

```tsx
<Checkbox rounded="none" label="Square corners" />
<Checkbox rounded="sm" label="Small rounded" />
<Checkbox rounded="base" label="Base rounded" />
<Checkbox rounded="md" label="Medium rounded" />
<Checkbox rounded="lg" label="Large rounded" />
<Checkbox rounded="full" label="Circular" />
```

## Custom Styling

```tsx
// Custom checkbox styling
<Checkbox
  className="shadow-lg"
  label="Custom checkbox"
  variant="accent"
/>

// Custom label styling
<Checkbox
  label="Custom label"
  labelClassName="text-lg font-bold text-purple-600"
  descriptionClassName="text-purple-400"
  description="With custom description"
/>
```

## Accessibility Features

- **Keyboard Navigation**: Full keyboard support with Tab and Space
- **Screen Reader Support**: Proper ARIA labels and descriptions
- **Focus Management**: Clear focus indicators
- **High Contrast**: Works with high contrast modes
- **Touch Friendly**: Adequate touch targets for mobile devices

### Keyboard Controls

- `Tab` - Navigate to checkbox
- `Space` - Toggle checkbox state
- `Shift + Tab` - Navigate backwards

## Browser Support

The component is compatible with all modern browsers and follows web standards for maximum compatibility.

## Integration with Dragon Farm Theme

The Checkbox component is fully integrated with the Dragon Farm color palette:

- Uses theme colors defined in `index.css`
- Supports all Dragon Farm color variants
- Maintains visual consistency with other components
- Responsive design with proper scaling

## Storybook

View all component variations and interactive examples in Storybook under `UI/Checkbox`.

## Examples in Context

### Login Form

```tsx
<Checkbox
  label="Remember me"
  description="Stay signed in for 30 days"
  variant="primary"
  size="sm"
/>
```

### Settings Panel

```tsx
<Checkbox
  label="Dark Mode"
  description="Use dark theme across the application"
  variant="mystical"
  size="lg"
  defaultChecked
/>
```

### Terms Acceptance

```tsx
<Checkbox
  label="I agree to the Terms of Service and Privacy Policy"
  error={!agreed ? "Please accept to continue" : undefined}
  variant="success"
  required
/>
```
