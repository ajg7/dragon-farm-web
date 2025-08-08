import type { FC } from "react";
import { H6 } from "../Header";

interface InputProps {
  type: string;
  title: string;
  className?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({ type, title, className = "", placeholder, value, onChange }) => {
  return (
    <div className="space-y-2">
      <H6 className="text-sm font-medium text-text"> {title} </H6>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full px-3 py-2 border border-border rounded-md 
          focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent
          transition-colors duration-200 
          bg-background text-text placeholder:text-text-muted
          ${className}`}
      />
    </div>
  );
};

export default Input;
