import * as React from "react";
import type { BaseButtonProps } from "./types";
import { combineClasses } from "./styles";

const TextButton = React.forwardRef<HTMLButtonElement, BaseButtonProps>(
  (
    { className, variant = "primary", size = "medium", disabled = false, children, ...props },
    ref
  ) => {
    const sizeClasses = {
      small: "h-8 px-2 text-xs",
      medium: "h-10 px-3 text-sm",
      large: "h-12 px-4 text-base",
    };

    const baseClasses =
      "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

    const variantClasses = {
      primary:
        "text-dragon-navy hover:text-dragon-deep-purple hover:bg-dragon-navy/10 active:bg-dragon-navy/15",
      secondary:
        "text-dragon-emerald hover:text-dragon-teal hover:bg-dragon-emerald/10 active:bg-dragon-emerald/15",
    };

    const buttonClasses = combineClasses(
      baseClasses,
      sizeClasses[size],
      variantClasses[variant],
      disabled ? "opacity-50 cursor-not-allowed hover:bg-transparent hover:text-current" : "",
      className
    );

    return (
      <button className={buttonClasses} ref={ref} disabled={disabled} {...props}>
        {children}
      </button>
    );
  }
);

TextButton.displayName = "TextButton";

export { TextButton };
