import {
  Button,
  LinkButton,
  ExternalLinkButton,
  DragonButton,
  EmeraldButton,
  MysticalButton,
} from "./button";

export default {
  title: "Components/UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

// Basic Examples
export const BasicButtons = () => (
  <div className="flex gap-4 flex-wrap">
    <Button>Default</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="destructive">Destructive</Button>
  </div>
);

// Dragon Theme Examples
export const DragonThemeButtons = () => (
  <div className="flex gap-4 flex-wrap">
    <DragonButton>Dragon Navy</DragonButton>
    <EmeraldButton>Dragon Emerald</EmeraldButton>
    <Button variant="teal">Dragon Teal</Button>
    <MysticalButton>Mystical Gradient</MysticalButton>
  </div>
);

// Size Examples
export const ButtonSizes = () => (
  <div className="flex gap-4 items-end flex-wrap">
    <Button size="xs">Extra Small</Button>
    <Button size="sm">Small</Button>
    <Button size="default">Default</Button>
    <Button size="lg">Large</Button>
    <Button size="xl">Extra Large</Button>
  </div>
);

// Link Examples
export const LinkButtons = () => (
  <div className="flex flex-col gap-4 items-start">
    <LinkButton href="#basic">Default Link</LinkButton>
    <Button variant="link-dragon" href="#dragon">
      Dragon Link
    </Button>
    <Button variant="link-emerald" href="#emerald">
      Emerald Link
    </Button>
    <ExternalLinkButton href="https://github.com" external variant="dragon">
      External Link ↗
    </ExternalLinkButton>
  </div>
);

// Icon Examples
export const IconButtons = () => (
  <div className="flex gap-4 items-center">
    <Button size="icon-sm" variant="dragon">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    </Button>
    <Button size="icon" variant="emerald">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
      </svg>
    </Button>
  </div>
);

// Full Width Example
export const FullWidthButtons = () => (
  <div className="w-80 space-y-3">
    <Button fullWidth variant="dragon">
      Full Width Dragon
    </Button>
    <EmeraldButton fullWidth>Full Width Emerald</EmeraldButton>
    <Button fullWidth variant="outline">
      Full Width Outline
    </Button>
  </div>
);
