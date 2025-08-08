import { useState } from "react";
import Input from "./input";

export default {
  title: "Components/UI/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

// Basic Input Types
export const BasicInputs = () => (
  <div className="w-80 space-y-4">
    <Input type="text" title="Text Input" placeholder="Enter your text here..." />
    <Input type="email" title="Email Input" placeholder="user@example.com" />
    <Input type="password" title="Password Input" placeholder="Enter your password" />
    <Input type="number" title="Number Input" placeholder="123" />
  </div>
);

// Input with Values
export const InputsWithValues = () => (
  <div className="w-80 space-y-4">
    <Input
      type="text"
      title="Pre-filled Text"
      value="Dragon Keeper"
      placeholder="Enter your name"
    />
    <Input
      type="email"
      title="Pre-filled Email"
      value="keeper@dragonland.com"
      placeholder="user@example.com"
    />
  </div>
);

// Interactive Input Example
export const InteractiveInput = () => {
  const [value, setValue] = useState("");

  return (
    <div className="w-80 space-y-4">
      <Input
        type="text"
        title="Interactive Input"
        placeholder="Type something..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p className="text-sm text-text-muted">Current value: &ldquo;{value}&rdquo;</p>
    </div>
  );
};

// Different Input States
export const InputStates = () => (
  <div className="w-80 space-y-4">
    <Input type="text" title="Normal State" placeholder="Normal input" />
    <Input
      type="text"
      title="With Custom Class"
      placeholder="Custom styling"
      className="border-red-500"
    />
    <div>
      <Input
        type="text"
        title="Disabled (simulated)"
        placeholder="Disabled input"
        className="opacity-50 cursor-not-allowed"
      />
      <p className="text-xs text-text-muted mt-1">
        Note: Disabled state would need additional props
      </p>
    </div>
  </div>
);

// Form-like Example
export const FormExample = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  return (
    <div className="w-80 space-y-4 p-6 border border-border rounded-lg bg-background">
      <h3 className="text-lg font-semibold text-text mb-4">Dragon Farm Registration</h3>

      <Input
        type="text"
        title="Username"
        placeholder="Enter your dragon keeper name"
        value={formData.username}
        onChange={handleChange("username")}
      />

      <Input
        type="email"
        title="Email"
        placeholder="keeper@dragonland.com"
        value={formData.email}
        onChange={handleChange("email")}
      />

      <Input
        type="password"
        title="Password"
        placeholder="Choose a strong password"
        value={formData.password}
        onChange={handleChange("password")}
      />

      <Input
        type="password"
        title="Confirm Password"
        placeholder="Confirm your password"
        value={formData.confirmPassword}
        onChange={handleChange("confirmPassword")}
      />
    </div>
  );
};

// Specialized Input Types
export const SpecializedInputs = () => (
  <div className="w-80 space-y-4">
    <Input type="search" title="Search Dragons" placeholder="Search for dragons..." />
    <Input type="url" title="Dragon Profile URL" placeholder="https://dragonland.com/profile" />
    <Input type="tel" title="Dragon Keeper Phone" placeholder="+1 (555) 123-4567" />
    <Input type="date" title="Dragon Birth Date" />
  </div>
);
