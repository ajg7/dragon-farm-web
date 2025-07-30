import * as React from "react";
import type { BaseButtonProps } from "./types";
import { combineClasses } from "./styles";

const Button = React.forwardRef<HTMLButtonElement, BaseButtonProps>(
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
      "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

    const variantClasses = {
      primary:
        "bg-dragon-navy text-white hover:bg-dragon-deep-purple active:bg-dragon-deep-purple/90 shadow-sm hover:shadow-md",
      secondary:
        "bg-dragon-emerald text-dragon-deep-purple hover:bg-dragon-emerald/90 active:bg-dragon-emerald/80 font-semibold shadow-sm hover:shadow-md",
    };

    const buttonClasses = combineClasses(
      baseClasses,
      sizeClasses[size],
      variantClasses[variant],
      disabled ? "opacity-50 cursor-not-allowed hover:bg-current hover:shadow-none" : "",
      className
    );

    return (
      <button className={buttonClasses} ref={ref} disabled={disabled} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
