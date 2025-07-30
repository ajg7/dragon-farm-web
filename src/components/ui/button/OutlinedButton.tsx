import * as React from "react";
import type { BaseButtonProps } from "./types";
import { combineClasses } from "./styles";

const OutlinedButton = React.forwardRef<HTMLButtonElement, BaseButtonProps>(
  (
    { className, variant = "primary", size = "medium", disabled = false, children, ...props },
    ref
  ) => {
    const sizeClasses = {
      small: "h-8 px-3 text-xs",
      medium: "h-10 px-4 py-2 text-sm",
      large: "h-12 px-6 py-3 text-base",
    };

    const baseClasses =
      "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-2";

    const variantClasses = {
      primary:
        "border-dragon-navy text-dragon-navy bg-transparent hover:bg-dragon-navy hover:text-white active:bg-dragon-deep-purple active:border-dragon-deep-purple",
      secondary:
        "border-dragon-emerald text-dragon-emerald bg-transparent hover:bg-dragon-emerald hover:text-dragon-deep-purple active:bg-dragon-emerald/90",
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

OutlinedButton.displayName = "OutlinedButton";

export { OutlinedButton };
