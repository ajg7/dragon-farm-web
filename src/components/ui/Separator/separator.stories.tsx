import Separator from "./separator";

export default {
  title: "Components/UI/Separator",
  component: Separator,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

// Basic Separator
export const BasicSeparator = () => (
  <div className="w-96 space-y-4">
    <div className="p-4 border border-border rounded bg-background">
      <h3 className="text-lg font-semibold text-text">Section Above</h3>
      <p className="text-text">This is some content above the separator.</p>
    </div>

    <Separator />

    <div className="p-4 border border-border rounded bg-background">
      <h3 className="text-lg font-semibold text-text">Section Below</h3>
      <p className="text-text">This is some content below the separator.</p>
    </div>
  </div>
);

// Separator with Text
export const SeparatorWithText = () => (
  <div className="w-96 space-y-4">
    <div className="p-4 border border-border rounded bg-background">
      <h3 className="text-lg font-semibold text-text">Dragon Collection</h3>
      <p className="text-text">Your current dragons are displayed above.</p>
    </div>

    <Separator text="OR" />

    <div className="p-4 border border-border rounded bg-background">
      <h3 className="text-lg font-semibold text-text">Add New Dragon</h3>
      <p className="text-text">Use the form below to add a new dragon to your collection.</p>
    </div>
  </div>
);

// Multiple Separators with Different Text
export const MultipleSeparators = () => (
  <div className="w-96 space-y-6">
    <div className="p-4 border border-border rounded bg-background">
      <h3 className="text-lg font-semibold text-text">Fire Dragons</h3>
      <p className="text-text">Powerful dragons that breathe fire and control heat.</p>
    </div>

    <Separator text="AND" />

    <div className="p-4 border border-border rounded bg-background">
      <h3 className="text-lg font-semibold text-text">Water Dragons</h3>
      <p className="text-text">Graceful dragons that control water and ice.</p>
    </div>

    <Separator text="ALSO" />

    <div className="p-4 border border-border rounded bg-background">
      <h3 className="text-lg font-semibold text-text">Earth Dragons</h3>
      <p className="text-text">Strong dragons connected to nature and the ground.</p>
    </div>

    <Separator />

    <div className="p-4 border border-border rounded bg-background">
      <h3 className="text-lg font-semibold text-text">Rare Dragons</h3>
      <p className="text-text">Legendary and mythical dragon species.</p>
    </div>
  </div>
);

// Form Section Separators
export const FormSectionSeparators = () => (
  <div className="w-96 space-y-4 p-6 border border-border rounded-lg bg-background">
    <h2 className="text-xl font-bold text-text">Dragon Registration Form</h2>

    <div className="space-y-3">
      <h3 className="text-md font-semibold text-text">Basic Information</h3>
      <div className="space-y-2">
        <input
          type="text"
          placeholder="Dragon Name"
          className="w-full px-3 py-2 border border-border rounded-md bg-background text-text placeholder:text-text-muted"
        />
        <input
          type="text"
          placeholder="Dragon Type"
          className="w-full px-3 py-2 border border-border rounded-md bg-background text-text placeholder:text-text-muted"
        />
      </div>
    </div>

    <Separator text="Physical Attributes" />

    <div className="space-y-2">
      <input
        type="number"
        placeholder="Age (in dragon years)"
        className="w-full px-3 py-2 border border-border rounded-md bg-background text-text placeholder:text-text-muted"
      />
      <input
        type="text"
        placeholder="Scale Color"
        className="w-full px-3 py-2 border border-border rounded-md bg-background text-text placeholder:text-text-muted"
      />
    </div>

    <Separator text="Abilities & Powers" />

    <div className="space-y-2">
      <input
        type="text"
        placeholder="Primary Element"
        className="w-full px-3 py-2 border border-border rounded-md bg-background text-text placeholder:text-text-muted"
      />
      <input
        type="text"
        placeholder="Special Abilities"
        className="w-full px-3 py-2 border border-border rounded-md bg-background text-text placeholder:text-text-muted"
      />
    </div>

    <Separator />

    <div className="flex gap-2">
      <button className="px-4 py-2 bg-accent text-white rounded-md hover:bg-accent/90 transition-colors">
        Register Dragon
      </button>
      <button className="px-4 py-2 border border-border rounded-md text-text hover:bg-background-muted transition-colors">
        Cancel
      </button>
    </div>
  </div>
);

// Separator Variations
export const SeparatorVariations = () => (
  <div className="w-96 space-y-8">
    <div>
      <h3 className="text-sm font-medium text-text mb-2">Plain Separator</h3>
      <Separator />
    </div>

    <div>
      <h3 className="text-sm font-medium text-text mb-2">With Short Text</h3>
      <Separator text="OR" />
    </div>

    <div>
      <h3 className="text-sm font-medium text-text mb-2">With Longer Text</h3>
      <Separator text="Continue Reading" />
    </div>

    <div>
      <h3 className="text-sm font-medium text-text mb-2">With Icon-like Text</h3>
      <Separator text="⚡" />
    </div>

    <div>
      <h3 className="text-sm font-medium text-text mb-2">With Dragon Theme</h3>
      <Separator text="🐉 Dragon Division 🐉" />
    </div>
  </div>
);

// Login/Register Form Example
export const LoginFormExample = () => (
  <div className="w-80 space-y-4 p-6 border border-border rounded-lg bg-background">
    <h2 className="text-xl font-bold text-text text-center">Dragon Keeper Portal</h2>

    <div className="space-y-3">
      <input
        type="email"
        placeholder="Email"
        className="w-full px-3 py-2 border border-border rounded-md bg-background text-text placeholder:text-text-muted"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full px-3 py-2 border border-border rounded-md bg-background text-text placeholder:text-text-muted"
      />
      <button className="w-full px-4 py-2 bg-accent text-white rounded-md hover:bg-accent/90 transition-colors">
        Sign In
      </button>
    </div>

    <Separator text="OR" />

    <div className="space-y-3">
      <button className="w-full px-4 py-2 border border-border rounded-md text-text hover:bg-background-muted transition-colors">
        Sign in with Google
      </button>
      <button className="w-full px-4 py-2 border border-border rounded-md text-text hover:bg-background-muted transition-colors">
        Sign in with Discord
      </button>
    </div>

    <Separator />

    <p className="text-center text-sm text-text-muted">
      New keeper?{" "}
      <a href="#" className="text-accent hover:underline">
        Create an account
      </a>
    </p>
  </div>
);
