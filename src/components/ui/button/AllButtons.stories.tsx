import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { TextButton } from "./TextButton";
import { LinkButton } from "./LinkButton";
import { IconButton } from "./IconButton";
import { OutlinedButton } from "./OutlinedButton";

const meta = {
  title: "Dragon Farm/UI/Buttons/All Buttons Showcase",
  component: Button,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A comprehensive showcase of all button components in the Dragon Farm design system. This includes Button, TextButton, LinkButton, IconButton, and OutlinedButton with all their variants and sizes.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllButtonTypes: Story = {
  args: {
    children: "Button",
  },
  render: () => (
    <div className="p-8 space-y-8 max-w-6xl mx-auto">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-dragon-deep-purple">Dragon Farm Button System</h1>
        <p className="text-dragon-navy">
          Complete collection of button components with primary and secondary variants
        </p>
      </div>

      {/* Basic Buttons */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-dragon-deep-purple border-b border-dragon-emerald/30 pb-2">
          Basic Buttons
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h3 className="text-lg font-medium text-dragon-navy">Primary Variant</h3>
            <div className="flex flex-wrap gap-3 items-center">
              <Button variant="primary" size="small">
                Small
              </Button>
              <Button variant="primary" size="medium">
                Medium
              </Button>
              <Button variant="primary" size="large">
                Large
              </Button>
              <Button variant="primary" size="medium" disabled>
                Disabled
              </Button>
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-medium text-dragon-navy">Secondary Variant</h3>
            <div className="flex flex-wrap gap-3 items-center">
              <Button variant="secondary" size="small">
                Small
              </Button>
              <Button variant="secondary" size="medium">
                Medium
              </Button>
              <Button variant="secondary" size="large">
                Large
              </Button>
              <Button variant="secondary" size="medium" disabled>
                Disabled
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Text Buttons */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-dragon-deep-purple border-b border-dragon-emerald/30 pb-2">
          Text Buttons
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h3 className="text-lg font-medium text-dragon-navy">Primary Variant</h3>
            <div className="flex flex-wrap gap-3 items-center">
              <TextButton variant="primary" size="small">
                Small
              </TextButton>
              <TextButton variant="primary" size="medium">
                Medium
              </TextButton>
              <TextButton variant="primary" size="large">
                Large
              </TextButton>
              <TextButton variant="primary" size="medium" disabled>
                Disabled
              </TextButton>
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-medium text-dragon-navy">Secondary Variant</h3>
            <div className="flex flex-wrap gap-3 items-center">
              <TextButton variant="secondary" size="small">
                Small
              </TextButton>
              <TextButton variant="secondary" size="medium">
                Medium
              </TextButton>
              <TextButton variant="secondary" size="large">
                Large
              </TextButton>
              <TextButton variant="secondary" size="medium" disabled>
                Disabled
              </TextButton>
            </div>
          </div>
        </div>
      </section>

      {/* Link Buttons */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-dragon-deep-purple border-b border-dragon-emerald/30 pb-2">
          Link Buttons
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h3 className="text-lg font-medium text-dragon-navy">Primary Variant</h3>
            <div className="flex flex-wrap gap-3 items-center">
              <LinkButton variant="primary" size="small">
                Small Link
              </LinkButton>
              <LinkButton variant="primary" size="medium">
                Medium Link
              </LinkButton>
              <LinkButton variant="primary" size="large">
                Large Link
              </LinkButton>
              <LinkButton variant="primary" size="medium" disabled>
                Disabled Link
              </LinkButton>
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-medium text-dragon-navy">Secondary Variant</h3>
            <div className="flex flex-wrap gap-3 items-center">
              <LinkButton variant="secondary" size="small">
                Small Link
              </LinkButton>
              <LinkButton variant="secondary" size="medium">
                Medium Link
              </LinkButton>
              <LinkButton variant="secondary" size="large">
                Large Link
              </LinkButton>
              <LinkButton variant="secondary" size="medium" disabled>
                Disabled Link
              </LinkButton>
            </div>
          </div>
        </div>
      </section>

      {/* Icon Buttons */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-dragon-deep-purple border-b border-dragon-emerald/30 pb-2">
          Icon Buttons
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h3 className="text-lg font-medium text-dragon-navy">Primary Variant</h3>
            <div className="flex flex-wrap gap-3 items-center">
              <IconButton variant="primary" size="small" icon="🐉" aria-label="Small dragon" />
              <IconButton variant="primary" size="medium" icon="🐉" aria-label="Medium dragon" />
              <IconButton variant="primary" size="large" icon="🐉" aria-label="Large dragon" />
              <IconButton
                variant="primary"
                size="medium"
                icon="🐉"
                aria-label="Disabled dragon"
                disabled
              />
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-medium text-dragon-navy">Secondary Variant</h3>
            <div className="flex flex-wrap gap-3 items-center">
              <IconButton variant="secondary" size="small" icon="🥚" aria-label="Small egg" />
              <IconButton variant="secondary" size="medium" icon="🥚" aria-label="Medium egg" />
              <IconButton variant="secondary" size="large" icon="🥚" aria-label="Large egg" />
              <IconButton
                variant="secondary"
                size="medium"
                icon="🥚"
                aria-label="Disabled egg"
                disabled
              />
            </div>
          </div>
        </div>
      </section>

      {/* Outlined Buttons */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-dragon-deep-purple border-b border-dragon-emerald/30 pb-2">
          Outlined Buttons
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h3 className="text-lg font-medium text-dragon-navy">Primary Variant</h3>
            <div className="flex flex-wrap gap-3 items-center">
              <OutlinedButton variant="primary" size="small">
                Small
              </OutlinedButton>
              <OutlinedButton variant="primary" size="medium">
                Medium
              </OutlinedButton>
              <OutlinedButton variant="primary" size="large">
                Large
              </OutlinedButton>
              <OutlinedButton variant="primary" size="medium" disabled>
                Disabled
              </OutlinedButton>
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-medium text-dragon-navy">Secondary Variant</h3>
            <div className="flex flex-wrap gap-3 items-center">
              <OutlinedButton variant="secondary" size="small">
                Small
              </OutlinedButton>
              <OutlinedButton variant="secondary" size="medium">
                Medium
              </OutlinedButton>
              <OutlinedButton variant="secondary" size="large">
                Large
              </OutlinedButton>
              <OutlinedButton variant="secondary" size="medium" disabled>
                Disabled
              </OutlinedButton>
            </div>
          </div>
        </div>
      </section>

      {/* Dragon Farm Example */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-dragon-deep-purple border-b border-dragon-emerald/30 pb-2">
          Dragon Farm Example Interface
        </h2>
        <div className="bg-gradient-to-br from-slate-50 to-dragon-emerald/10 rounded-lg p-6 space-y-6">
          {/* Header Actions */}
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-dragon-deep-purple">🐉 Dragon Management</h3>
            <div className="flex items-center gap-2">
              <IconButton variant="primary" size="small" icon="⚙️" aria-label="Settings" />
              <IconButton variant="primary" size="small" icon="🔍" aria-label="Search" />
              <IconButton variant="secondary" size="small" icon="❤️" aria-label="Favorites" />
            </div>
          </div>

          {/* Main Actions */}
          <div className="flex flex-wrap gap-3">
            <Button variant="primary">🥚 Breed New Dragon</Button>
            <Button variant="secondary">🍖 Feed All Dragons</Button>
            <OutlinedButton variant="primary">📊 View Statistics</OutlinedButton>
            <OutlinedButton variant="secondary">💰 Visit Marketplace</OutlinedButton>
          </div>

          {/* Secondary Actions */}
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-3">
              <TextButton variant="primary">View All</TextButton>
              <TextButton variant="secondary">Filter</TextButton>
              <TextButton variant="primary">Sort</TextButton>
            </div>
            <div className="flex gap-2">
              <LinkButton variant="secondary" href="#help">
                Help
              </LinkButton>
              <LinkButton variant="primary" href="#docs">
                Documentation
              </LinkButton>
            </div>
          </div>

          {/* Dragon Card Actions */}
          <div className="bg-white rounded-lg p-4 border">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-dragon-emerald/20 rounded-lg flex items-center justify-center text-xl">
                  🐉
                </div>
                <div>
                  <h4 className="font-semibold text-dragon-deep-purple">Thunder the Magnificent</h4>
                  <p className="text-sm text-dragon-navy">Level 25 • Fire Type</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <IconButton variant="secondary" size="small" icon="🍖" aria-label="Feed dragon" />
                <IconButton variant="secondary" size="small" icon="🏋️" aria-label="Train dragon" />
                <IconButton variant="primary" size="small" icon="✏️" aria-label="Edit dragon" />
                <OutlinedButton variant="primary" size="small">
                  Details
                </OutlinedButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Complete showcase of all button components used together in a realistic Dragon Farm interface.",
      },
    },
  },
};
