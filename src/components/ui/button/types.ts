import * as React from "react";

export type ButtonSize = "small" | "medium" | "large" | "sm" | "lg" | "default" | "icon";
export type ButtonVariant =
  | "primary"
  | "secondary"
  | "dragon"
  | "emerald"
  | "teal"
  | "mystical"
  | "outline_dragon"
  | "default"
  | "outline"
  | "ghost";

export interface BaseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  variant?: ButtonVariant;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
}

export interface IconButtonProps extends Omit<BaseButtonProps, "children"> {
  icon: React.ReactNode;
  "aria-label": string;
}
