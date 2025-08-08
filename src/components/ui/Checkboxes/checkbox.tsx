import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const checkboxVariants = cva(
  "relative inline-flex items-center justify-center rounded border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      size: {
        sm: "h-4 w-4",
        base: "h-5 w-5",
        lg: "h-6 w-6",
        xl: "h-7 w-7",
      },
      variant: {
        default:
          "border-border focus:ring-dragon-teal data-[state=checked]:bg-dragon-teal data-[state=checked]:border-dragon-teal data-[state=checked]:text-white",
        primary:
          "border-dragon-navy focus:ring-dragon-navy data-[state=checked]:bg-dragon-navy data-[state=checked]:border-dragon-navy data-[state=checked]:text-white",
        accent:
          "border-dragon-emerald focus:ring-dragon-emerald data-[state=checked]:bg-dragon-emerald data-[state=checked]:border-dragon-emerald data-[state=checked]:text-white",
        mystical:
          "border-dragon-deep-purple focus:ring-dragon-deep-purple data-[state=checked]:bg-dragon-deep-purple data-[state=checked]:border-dragon-deep-purple data-[state=checked]:text-white",
        success:
          "border-dragon-emerald focus:ring-dragon-emerald data-[state=checked]:bg-dragon-emerald data-[state=checked]:border-dragon-emerald data-[state=checked]:text-white",
        danger:
          "border-red-500 focus:ring-red-500 data-[state=checked]:bg-red-500 data-[state=checked]:border-red-500 data-[state=checked]:text-white",
        warning:
          "border-amber-500 focus:ring-amber-500 data-[state=checked]:bg-amber-500 data-[state=checked]:border-amber-500 data-[state=checked]:text-white",
        outline:
          "border-border bg-transparent hover:bg-background-muted focus:ring-dragon-teal data-[state=checked]:bg-transparent data-[state=checked]:border-dragon-teal data-[state=checked]:text-dragon-teal",
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        base: "rounded",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      size: "base",
      variant: "default",
      rounded: "sm",
    },
  }
);

const checkboxLabelVariants = cva("text-sm transition-colors cursor-pointer select-none", {
  variants: {
    variant: {
      default: "text-text",
      primary: "text-dragon-navy",
      secondary: "text-text-secondary",
      accent: "text-text-accent",
      muted: "text-text-muted",
      inverse: "text-text-inverse",
      mystical: "text-text-mystical",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
    },
    disabled: {
      true: "opacity-50 cursor-not-allowed",
      false: "",
    },
  },
  defaultVariants: {
    variant: "default",
    weight: "normal",
    disabled: false,
  },
});

// Check icon component
const CheckIcon = ({ className }: { className?: string }) => (
  <svg
    className={cn("pointer-events-none", className)}
    viewBox="0 0 16 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
      clipRule="evenodd"
    />
  </svg>
);

// Indeterminate icon component
const IndeterminateIcon = ({ className }: { className?: string }) => (
  <svg
    className={cn("pointer-events-none", className)}
    viewBox="0 0 16 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="3" y="7" width="10" height="2" rx="1" />
  </svg>
);

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type">,
    VariantProps<typeof checkboxVariants> {
  /** Label text for the checkbox */
  label?: string;
  /** Additional description text */
  description?: string;
  /** Whether the checkbox is in an indeterminate state */
  indeterminate?: boolean;
  /** Label variant styling */
  labelVariant?: VariantProps<typeof checkboxLabelVariants>["variant"];
  /** Label weight styling */
  labelWeight?: VariantProps<typeof checkboxLabelVariants>["weight"];
  /** Custom label className */
  labelClassName?: string;
  /** Custom description className */
  descriptionClassName?: string;
  /** Position of the label relative to the checkbox */
  labelPosition?: "right" | "left";
  /** Error message to display */
  error?: string;
  /** Success message to display */
  success?: string;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className,
      size,
      variant,
      rounded,
      label,
      description,
      indeterminate = false,
      labelVariant = "default",
      labelWeight = "normal",
      labelClassName,
      descriptionClassName,
      labelPosition = "right",
      error,
      success,
      disabled,
      id,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const checkboxId = id || generatedId;
    const [isChecked, setIsChecked] = React.useState(
      props.checked || props.defaultChecked || false
    );
    const [isIndeterminate, setIsIndeterminate] = React.useState(indeterminate);

    const inputRef = React.useRef<HTMLInputElement>(null);

    React.useImperativeHandle(ref, () => inputRef.current!);

    React.useEffect(() => {
      if (inputRef.current) {
        inputRef.current.indeterminate = isIndeterminate;
      }
    }, [isIndeterminate]);

    React.useEffect(() => {
      setIsIndeterminate(indeterminate);
    }, [indeterminate]);

    React.useEffect(() => {
      if (props.checked !== undefined) {
        setIsChecked(props.checked);
      }
    }, [props.checked]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (props.checked === undefined) {
        setIsChecked(event.target.checked);
      }
      setIsIndeterminate(false);
      props.onChange?.(event);
    };

    const getDataState = () => {
      if (isIndeterminate) return "indeterminate";
      if (isChecked) return "checked";
      return "unchecked";
    };

    const iconSize = {
      sm: "h-3 w-3",
      base: "h-3.5 w-3.5",
      lg: "h-4 w-4",
      xl: "h-5 w-5",
    }[size || "base"];

    const CheckboxInput = (
      <div className="relative">
        <input
          ref={inputRef}
          type="checkbox"
          id={checkboxId}
          className="sr-only"
          disabled={disabled}
          onChange={handleChange}
          {...props}
        />
        <div
          className={cn(
            checkboxVariants({ size, variant, rounded, className }),
            error && "border-red-500 focus:ring-red-500",
            success && "border-green-500 focus:ring-green-500"
          )}
          data-state={getDataState()}
          onClick={() => {
            if (!disabled && inputRef.current) {
              inputRef.current.click();
            }
          }}
        >
          {(isChecked || isIndeterminate) && (
            <div className="absolute inset-0 flex items-center justify-center">
              {isIndeterminate ? (
                <IndeterminateIcon className={iconSize} />
              ) : (
                <CheckIcon className={iconSize} />
              )}
            </div>
          )}
        </div>
      </div>
    );

    const LabelContent = label && (
      <div className="flex flex-col">
        <label
          htmlFor={checkboxId}
          className={cn(
            checkboxLabelVariants({
              variant: labelVariant,
              weight: labelWeight,
              disabled: disabled,
            }),
            labelClassName
          )}
        >
          {label}
        </label>
        {description && (
          <span
            className={cn(
              "text-xs text-text-muted mt-0.5",
              disabled && "opacity-50",
              descriptionClassName
            )}
          >
            {description}
          </span>
        )}
      </div>
    );

    const MessageContent = (error || success) && (
      <div className="mt-1">
        {error && (
          <span className="text-xs text-red-600 flex items-center gap-1">
            <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            {error}
          </span>
        )}
        {success && (
          <span className="text-xs text-green-600 flex items-center gap-1">
            <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            {success}
          </span>
        )}
      </div>
    );

    if (!label) {
      return (
        <div className="flex flex-col">
          {CheckboxInput}
          {MessageContent}
        </div>
      );
    }

    return (
      <div className="flex flex-col">
        <div
          className={cn("flex items-start gap-2", labelPosition === "left" && "flex-row-reverse")}
        >
          {CheckboxInput}
          {LabelContent}
        </div>
        {MessageContent}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

export { Checkbox, checkboxVariants, checkboxLabelVariants };
