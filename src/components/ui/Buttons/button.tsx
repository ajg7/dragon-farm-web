import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dragon-navy focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-text-inverse hover:bg-primary/90 shadow-md hover:shadow-lg",
        destructive: "bg-red-500 text-text-inverse hover:bg-red-600 shadow-md",
        outline:
          "border border-border bg-background hover:bg-background-secondary hover:text-text-secondary",
        secondary: "bg-dragon-teal text-text-inverse hover:bg-dragon-teal/90 shadow-md",
        ghost: "hover:bg-background-secondary hover:text-text-secondary",
        link: "text-primary underline-offset-4 hover:underline hover:text-dragon-teal transition-colors duration-200",

        // Dragon-themed variants
        dragon:
          "bg-dragon-navy text-text-inverse hover:bg-dragon-navy/90 shadow-dragon hover:shadow-lg",
        emerald:
          "bg-dragon-emerald text-dragon-deep-purple hover:bg-dragon-emerald/90 shadow-md font-semibold",
        teal: "bg-dragon-teal text-text-inverse hover:bg-dragon-teal/90 shadow-md",
        mystical:
          "bg-gradient-to-r from-dragon-deep-purple to-dragon-dark-purple text-text-inverse hover:from-dragon-deep-purple/90 hover:to-dragon-dark-purple/90 shadow-mystical",

        // Outlined dragon variants
        "outline-dragon":
          "border border-dragon-navy text-dragon-navy hover:bg-dragon-navy hover:text-text-inverse",
        "outline-emerald":
          "border border-dragon-emerald text-dragon-emerald hover:bg-dragon-emerald hover:text-dragon-deep-purple",
        "outline-teal":
          "border border-dragon-teal text-dragon-teal hover:bg-dragon-teal hover:text-text-inverse",

        // Success and accent variants
        success: "bg-dragon-emerald text-dragon-deep-purple hover:bg-dragon-emerald/90 shadow-md",
        accent: "bg-accent text-dragon-deep-purple hover:bg-accent/90 shadow-md font-semibold",

        // Link variants with dragon theme
        "link-dragon":
          "text-dragon-navy underline-offset-4 hover:underline hover:text-dragon-teal transition-colors duration-200",
        "link-emerald":
          "text-dragon-emerald underline-offset-4 hover:underline hover:text-dragon-emerald/80 transition-colors duration-200",
        "link-teal":
          "text-dragon-teal underline-offset-4 hover:underline hover:text-dragon-teal/80 transition-colors duration-200",
        "link-mystical":
          "text-dragon-deep-purple underline-offset-4 hover:underline hover:text-dragon-dark-purple transition-colors duration-200",
      },
      size: {
        default: "h-10 px-4 py-2",
        xs: "h-7 rounded px-2 text-xs",
        sm: "h-9 rounded-md px-3 text-sm",
        lg: "h-11 rounded-md px-8 text-base",
        xl: "h-12 rounded-lg px-10 text-lg font-semibold",
        icon: "h-10 w-10",
        "icon-sm": "h-8 w-8",
        "icon-lg": "h-12 w-12",
      },
      fullWidth: {
        true: "w-full",
        false: "w-auto",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      fullWidth: false,
    },
  }
);

export interface BaseButtonProps extends VariantProps<typeof buttonVariants> {
  className?: string;
  disabled?: boolean;
}

// Regular button props
export interface ButtonProps
  extends BaseButtonProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "disabled"> {
  asChild?: never;
  href?: never;
  target?: never;
  rel?: never;
}

// Link button props
export interface LinkButtonProps
  extends BaseButtonProps,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "disabled"> {
  asChild?: never;
  href: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
}

// External link convenience props
export interface ExternalLinkButtonProps extends Omit<LinkButtonProps, "target" | "rel"> {
  external?: true;
}

export type AllButtonProps = ButtonProps | LinkButtonProps | ExternalLinkButtonProps;

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, AllButtonProps>(
  ({ className, variant, size, fullWidth, children, ...props }, ref) => {
    const baseClassName = cn(buttonVariants({ variant, size, fullWidth, className }));

    // Check if it's an external link
    if ("external" in props && props.external) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { external, ...linkProps } = props as ExternalLinkButtonProps;
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={baseClassName}
          target="_blank"
          rel="noopener noreferrer"
          {...linkProps}
        >
          {children}
        </a>
      );
    }

    // Check if it's a link button
    if ("href" in props && props.href) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={baseClassName}
          {...(props as LinkButtonProps)}
        >
          {children}
        </a>
      );
    }

    // Regular button
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={baseClassName}
        {...(props as ButtonProps)}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

// Convenience components for common button types
export const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ variant = "link", ...props }, ref) => <Button ref={ref} variant={variant} {...props} />
);
LinkButton.displayName = "LinkButton";

export const ExternalLinkButton = React.forwardRef<HTMLAnchorElement, ExternalLinkButtonProps>(
  ({ variant = "link", ...props }, ref) => <Button ref={ref} variant={variant} {...props} />
);
ExternalLinkButton.displayName = "ExternalLinkButton";

export const DragonButton = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, AllButtonProps>(
  ({ variant = "dragon", ...props }, ref) => <Button ref={ref} variant={variant} {...props} />
);
DragonButton.displayName = "DragonButton";

export const EmeraldButton = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  AllButtonProps
>(({ variant = "emerald", ...props }, ref) => <Button ref={ref} variant={variant} {...props} />);
EmeraldButton.displayName = "EmeraldButton";

export const MysticalButton = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  AllButtonProps
>(({ variant = "mystical", ...props }, ref) => <Button ref={ref} variant={variant} {...props} />);
MysticalButton.displayName = "MysticalButton";

export { Button, buttonVariants };
