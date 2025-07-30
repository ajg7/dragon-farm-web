import * as React from "react";
import type { IconButtonProps } from "./types";
import { combineClasses } from "./styles";

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "medium",
      disabled = false,
      icon,
      "aria-label": ariaLabel,
      ...props
    },
    ref
  ) => {
    const sizeClasses = {
      small: "h-8 w-8 text-xs",
      sm: "h-8 w-8 text-xs",
      medium: "h-10 w-10 text-sm",
      default: "h-10 w-10 text-sm",
      large: "h-12 w-12 text-base",
      lg: "h-12 w-12 text-base",
      icon: "h-10 w-10 text-sm",
    };

    const baseClasses =
      "inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

    const variantClasses = {
      primary:
        "bg-dragon-navy text-white hover:bg-dragon-deep-purple active:bg-dragon-deep-purple/90 shadow-sm hover:shadow-md",
      secondary:
        "bg-dragon-emerald text-dragon-deep-purple hover:bg-dragon-emerald/90 active:bg-dragon-emerald/80 shadow-sm hover:shadow-md",
      default:
        "bg-dragon-navy text-white hover:bg-dragon-deep-purple active:bg-dragon-deep-purple/90 shadow-sm hover:shadow-md",
      dragon:
        "bg-dragon-navy text-white hover:bg-dragon-deep-purple active:bg-dragon-deep-purple/90 shadow-sm hover:shadow-md",
      emerald:
        "bg-dragon-emerald text-dragon-deep-purple hover:bg-dragon-emerald/90 active:bg-dragon-emerald/80 shadow-sm hover:shadow-md",
      teal: "bg-dragon-teal text-white hover:bg-dragon-teal/90 active:bg-dragon-teal/80 shadow-sm hover:shadow-md",
      mystical:
        "bg-gradient-to-r from-dragon-deep-purple to-dragon-dark-purple text-white hover:from-dragon-deep-purple/90 hover:to-dragon-dark-purple/90 active:from-dragon-deep-purple/80 active:to-dragon-dark-purple/80 shadow-sm hover:shadow-md",
      outline_dragon:
        "border-2 border-dragon-navy text-dragon-navy bg-transparent hover:bg-dragon-navy hover:text-white active:bg-dragon-navy/90 shadow-sm hover:shadow-md",
      outline:
        "border-2 border-dragon-navy text-dragon-navy bg-transparent hover:bg-dragon-navy hover:text-white active:bg-dragon-navy/90 shadow-sm hover:shadow-md",
      ghost:
        "text-dragon-navy bg-transparent hover:bg-dragon-navy/10 active:bg-dragon-navy/20 transition-colors",
    };

    const buttonClasses = combineClasses(
      baseClasses,
      sizeClasses[size],
      variantClasses[variant],
      disabled ? "opacity-50 cursor-not-allowed hover:bg-current hover:shadow-none" : "",
      className
    );

    return (
      <button
        className={buttonClasses}
        ref={ref}
        disabled={disabled}
        aria-label={ariaLabel}
        {...props}
      >
        {icon}
      </button>
    );
  }
);

IconButton.displayName = "IconButton";

export { IconButton };
