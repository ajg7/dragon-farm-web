import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headerVariants = cva(
  "font-display text-dragon-deep-purple tracking-tight transition-colors",
  {
    variants: {
      level: {
        1: "text-5xl md:text-6xl lg:text-7xl font-black leading-none mb-8",
        2: "text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6",
        3: "text-3xl md:text-4xl lg:text-5xl font-bold leading-snug mb-5",
        4: "text-2xl md:text-3xl lg:text-4xl font-semibold leading-normal mb-4",
        5: "text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed mb-3",
        6: "text-lg md:text-xl lg:text-2xl font-normal leading-loose mb-2",
      },
      variant: {
        default: "text-dragon-deep-purple",
        primary: "text-dragon-navy",
        accent: "text-dragon-emerald",
        mystical:
          "text-dragon-deep-purple bg-gradient-to-r from-dragon-deep-purple to-dragon-dark-purple bg-clip-text text-transparent",
        teal: "text-dragon-teal",
        gradient:
          "bg-gradient-to-r from-dragon-emerald via-dragon-teal to-dragon-navy bg-clip-text text-transparent",
        shadow: "text-dragon-deep-purple drop-shadow-lg",
        glow: "text-dragon-emerald drop-shadow-[0_0_10px_rgba(40,221,134,0.5)]",
      },
      align: {
        left: "text-left",
        center: "text-center",
        right: "text-right",
      },
    },
    defaultVariants: {
      level: 1,
      variant: "default",
      align: "left",
    },
  }
);

export interface HeaderProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headerVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
}

const Header = React.forwardRef<HTMLHeadingElement, HeaderProps>(
  ({ className, level, variant, align, as, children, ...props }, ref) => {
    // Determine the HTML element to use
    const Component = (as || `h${level}`) as React.ElementType;

    return React.createElement(
      Component,
      {
        className: cn(headerVariants({ level, variant, align, className })),
        ref,
        ...props,
      },
      children
    );
  }
);
Header.displayName = "Header";

// Individual header components for convenience
export const H1 = React.forwardRef<HTMLHeadingElement, Omit<HeaderProps, "level" | "as">>(
  ({ className, variant, align, children, ...props }, ref) => (
    <Header
      ref={ref}
      level={1}
      as="h1"
      variant={variant}
      align={align}
      className={className}
      {...props}
    >
      {children}
    </Header>
  )
);
H1.displayName = "H1";

export const H2 = React.forwardRef<HTMLHeadingElement, Omit<HeaderProps, "level" | "as">>(
  ({ className, variant, align, children, ...props }, ref) => (
    <Header
      ref={ref}
      level={2}
      as="h2"
      variant={variant}
      align={align}
      className={className}
      {...props}
    >
      {children}
    </Header>
  )
);
H2.displayName = "H2";

export const H3 = React.forwardRef<HTMLHeadingElement, Omit<HeaderProps, "level" | "as">>(
  ({ className, variant, align, children, ...props }, ref) => (
    <Header
      ref={ref}
      level={3}
      as="h3"
      variant={variant}
      align={align}
      className={className}
      {...props}
    >
      {children}
    </Header>
  )
);
H3.displayName = "H3";

export const H4 = React.forwardRef<HTMLHeadingElement, Omit<HeaderProps, "level" | "as">>(
  ({ className, variant, align, children, ...props }, ref) => (
    <Header
      ref={ref}
      level={4}
      as="h4"
      variant={variant}
      align={align}
      className={className}
      {...props}
    >
      {children}
    </Header>
  )
);
H4.displayName = "H4";

export const H5 = React.forwardRef<HTMLHeadingElement, Omit<HeaderProps, "level" | "as">>(
  ({ className, variant, align, children, ...props }, ref) => (
    <Header
      ref={ref}
      level={5}
      as="h5"
      variant={variant}
      align={align}
      className={className}
      {...props}
    >
      {children}
    </Header>
  )
);
H5.displayName = "H5";

export const H6 = React.forwardRef<HTMLHeadingElement, Omit<HeaderProps, "level" | "as">>(
  ({ className, variant, align, children, ...props }, ref) => (
    <Header
      ref={ref}
      level={6}
      as="h6"
      variant={variant}
      align={align}
      className={className}
      {...props}
    >
      {children}
    </Header>
  )
);
H6.displayName = "H6";

export { Header, headerVariants };
