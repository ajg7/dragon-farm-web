import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const textVariants = cva("transition-colors", {
  variants: {
    size: {
      xs: "text-xs leading-tight", // 12px
      sm: "text-sm leading-snug", // 14px
      base: "text-base leading-normal", // 16px
      lg: "text-lg leading-relaxed", // 18px
      xl: "text-xl leading-loose", // 20px
      "2xl": "text-2xl leading-tight", // 24px
      "3xl": "text-3xl leading-snug", // 30px
      "4xl": "text-4xl leading-none", // 36px
    },
    variant: {
      default: "text-text",
      primary: "text-dragon-navy",
      secondary: "text-text-secondary",
      accent: "text-text-accent",
      muted: "text-text-muted",
      inverse: "text-text-inverse",
      mystical: "text-text-mystical",
      success: "text-dragon-emerald",
      info: "text-dragon-teal",
      warning: "text-amber-600",
      danger: "text-red-600",
      gradient:
        "bg-gradient-to-r from-dragon-emerald via-dragon-teal to-dragon-navy bg-clip-text text-transparent",
      glow: "text-dragon-emerald drop-shadow-[0_0_10px_rgba(40,221,134,0.5)]",
    },
    weight: {
      thin: "font-thin", // 100
      extralight: "font-extralight", // 200
      light: "font-light", // 300
      normal: "font-normal", // 400
      medium: "font-medium", // 500
      semibold: "font-semibold", // 600
      bold: "font-bold", // 700
      extrabold: "font-extrabold", // 800
      black: "font-black", // 900
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify",
    },
    family: {
      sans: "font-sans",
      serif: "font-serif",
      mono: "font-mono",
      display: "font-display",
    },
    decoration: {
      none: "no-underline",
      underline: "underline",
      overline: "overline",
      "line-through": "line-through",
    },
    transform: {
      none: "normal-case",
      uppercase: "uppercase",
      lowercase: "lowercase",
      capitalize: "capitalize",
    },
    whitespace: {
      normal: "whitespace-normal",
      nowrap: "whitespace-nowrap",
      pre: "whitespace-pre",
      "pre-line": "whitespace-pre-line",
      "pre-wrap": "whitespace-pre-wrap",
      "break-spaces": "whitespace-break-spaces",
    },
    overflow: {
      visible: "overflow-visible",
      hidden: "overflow-hidden",
      ellipsis: "truncate",
      clip: "text-clip",
    },
  },
  defaultVariants: {
    size: "base",
    variant: "default",
    weight: "normal",
    align: "left",
    family: "sans",
    decoration: "none",
    transform: "none",
    whitespace: "normal",
    overflow: "visible",
  },
});

export interface TextProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof textVariants> {
  as?:
    | "p"
    | "span"
    | "div"
    | "label"
    | "small"
    | "strong"
    | "em"
    | "mark"
    | "del"
    | "ins"
    | "sub"
    | "sup";
  children: React.ReactNode;
}

const Text = React.forwardRef<HTMLElement, TextProps>(
  (
    {
      className,
      size,
      variant,
      weight,
      align,
      family,
      decoration,
      transform,
      whitespace,
      overflow,
      as = "p",
      children,
      ...props
    },
    ref
  ) => {
    const Component = as as React.ElementType;

    return React.createElement(
      Component,
      {
        className: cn(
          textVariants({
            size,
            variant,
            weight,
            align,
            family,
            decoration,
            transform,
            whitespace,
            overflow,
            className,
          })
        ),
        ref,
        ...props,
      },
      children
    );
  }
);
Text.displayName = "Text";

// Convenience components for common use cases
export const P = React.forwardRef<HTMLParagraphElement, Omit<TextProps, "as">>((props, ref) => (
  <Text ref={ref} as="p" {...props} />
));
P.displayName = "P";

export const Span = React.forwardRef<HTMLSpanElement, Omit<TextProps, "as">>((props, ref) => (
  <Text ref={ref} as="span" {...props} />
));
Span.displayName = "Span";

export interface LabelProps
  extends Omit<TextProps, "as">,
    Pick<React.LabelHTMLAttributes<HTMLLabelElement>, "htmlFor"> {}

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  (
    {
      htmlFor,
      className,
      size,
      variant,
      weight,
      align,
      family,
      decoration,
      transform,
      whitespace,
      overflow,
      children,
      ...props
    },
    ref
  ) => {
    const Component = "label" as React.ElementType;

    return React.createElement(
      Component,
      {
        className: cn(
          textVariants({
            size,
            variant,
            weight,
            align,
            family,
            decoration,
            transform,
            whitespace,
            overflow,
            className,
          })
        ),
        htmlFor,
        ref,
        ...props,
      },
      children
    );
  }
);
Label.displayName = "Label";

export const Small = React.forwardRef<HTMLElement, Omit<TextProps, "as" | "size">>((props, ref) => (
  <Text ref={ref} as="small" size="sm" {...props} />
));
Small.displayName = "Small";

export const Strong = React.forwardRef<HTMLElement, Omit<TextProps, "as" | "weight">>(
  (props, ref) => <Text ref={ref} as="strong" weight="bold" {...props} />
);
Strong.displayName = "Strong";

export const Em = React.forwardRef<HTMLElement, Omit<TextProps, "as">>((props, ref) => (
  <Text ref={ref} as="em" {...props} />
));
Em.displayName = "Em";

export const Mark = React.forwardRef<HTMLElement, Omit<TextProps, "as">>((props, ref) => (
  <Text ref={ref} as="mark" {...props} />
));
Mark.displayName = "Mark";

export const Del = React.forwardRef<HTMLElement, Omit<TextProps, "as" | "decoration">>(
  (props, ref) => <Text ref={ref} as="del" decoration="line-through" {...props} />
);
Del.displayName = "Del";

export const Ins = React.forwardRef<HTMLElement, Omit<TextProps, "as" | "decoration">>(
  (props, ref) => <Text ref={ref} as="ins" decoration="underline" {...props} />
);
Ins.displayName = "Ins";

export const Sub = React.forwardRef<HTMLElement, Omit<TextProps, "as">>((props, ref) => (
  <Text ref={ref} as="sub" {...props} />
));
Sub.displayName = "Sub";

export const Sup = React.forwardRef<HTMLElement, Omit<TextProps, "as">>((props, ref) => (
  <Text ref={ref} as="sup" {...props} />
));
Sup.displayName = "Sup";

export { Text, textVariants };
