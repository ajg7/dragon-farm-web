import * as React from "react";
import type { BaseButtonProps } from "./types";
import { combineClasses } from "./styles";

interface LinkButtonProps extends BaseButtonProps {
  href?: string;
  target?: string;
  rel?: string;
}

const LinkButton = React.forwardRef<HTMLButtonElement, LinkButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "medium",
      disabled = false,
      children,
      href,
      target,
      rel,
      ...props
    },
    ref
  ) => {
    const sizeClasses = {
      small: "text-xs py-1",
      sm: "text-xs py-1",
      medium: "text-sm py-1",
      default: "text-sm py-1",
      large: "text-base py-2",
      lg: "text-base py-2",
      icon: "text-sm py-1",
    };

    const baseClasses =
      "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 underline-offset-4";

    const variantClasses = {
      primary: "text-dragon-navy hover:text-dragon-deep-purple underline hover:no-underline",
      secondary: "text-dragon-emerald hover:text-dragon-teal underline hover:no-underline",
      default: "text-dragon-navy hover:text-dragon-deep-purple underline hover:no-underline",
      dragon: "text-dragon-navy hover:text-dragon-deep-purple underline hover:no-underline",
      emerald: "text-dragon-emerald hover:text-dragon-teal underline hover:no-underline",
      teal: "text-dragon-teal hover:text-dragon-navy underline hover:no-underline",
      mystical:
        "text-dragon-deep-purple hover:text-dragon-dark-purple underline hover:no-underline",
      outline_dragon: "text-dragon-navy hover:text-dragon-deep-purple underline hover:no-underline",
      outline: "text-dragon-navy hover:text-dragon-deep-purple underline hover:no-underline",
      ghost: "text-dragon-navy hover:text-dragon-deep-purple underline hover:no-underline",
    };

    const buttonClasses = combineClasses(
      baseClasses,
      sizeClasses[size],
      variantClasses[variant],
      disabled ? "opacity-50 cursor-not-allowed hover:text-current" : "",
      className
    );

    if (href && !disabled) {
      return (
        <a className={buttonClasses} href={href} target={target} rel={rel}>
          {children}
        </a>
      );
    }

    return (
      <button className={buttonClasses} ref={ref} disabled={disabled} {...props}>
        {children}
      </button>
    );
  }
);

LinkButton.displayName = "LinkButton";

export { LinkButton };
