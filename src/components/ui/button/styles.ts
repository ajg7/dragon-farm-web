import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Base button styles with size and variant configurations
export const baseButtonStyles = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      size: {
        small: "h-8 px-3 text-xs",
        medium: "h-10 px-4 py-2 text-sm",
        large: "h-12 px-6 py-3 text-base",
      },
      variant: {
        primary: "",
        secondary: "",
      },
    },
    defaultVariants: {
      size: "medium",
      variant: "primary",
    },
  }
);

// Primary button variants
export const primaryButtonStyles = cva([baseButtonStyles()], {
  variants: {
    size: {
      small: "h-8 px-3 text-xs",
      medium: "h-10 px-4 py-2 text-sm",
      large: "h-12 px-6 py-3 text-base",
    },
    disabled: {
      true: "opacity-50 cursor-not-allowed",
      false: "",
    },
  },
  defaultVariants: {
    size: "medium",
    disabled: false,
  },
});

// Secondary button variants
export const secondaryButtonStyles = cva([baseButtonStyles()], {
  variants: {
    size: {
      small: "h-8 px-3 text-xs",
      medium: "h-10 px-4 py-2 text-sm",
      large: "h-12 px-6 py-3 text-base",
    },
    disabled: {
      true: "opacity-50 cursor-not-allowed",
      false: "",
    },
  },
  defaultVariants: {
    size: "medium",
    disabled: false,
  },
});

// Icon button specific styles
export const iconButtonStyles = cva([baseButtonStyles()], {
  variants: {
    size: {
      small: "h-8 w-8 rounded-md",
      medium: "h-10 w-10 rounded-md",
      large: "h-12 w-12 rounded-lg",
    },
    disabled: {
      true: "opacity-50 cursor-not-allowed",
      false: "",
    },
  },
  defaultVariants: {
    size: "medium",
    disabled: false,
  },
});

// Utility function to combine classes
export const combineClasses = (...classes: (string | undefined)[]) => {
  return cn(...classes);
};
