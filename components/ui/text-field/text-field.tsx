import React from "react";
import cn from "classnames";
import styles from "./text-field.module.css";
import { PlusIcon } from "@/constants/Icons";

type TextFieldProps = {
  placeholder: string;
  className?: string;
  show?: boolean;
  showPassword?: boolean;
  togglePasswordVisibility?: () => void;
  darkMode?: boolean;
  error?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function TextField({
  placeholder,
  className,
  show,
  showPassword,
  togglePasswordVisibility,
  darkMode,
  error,
  ...props
}: TextFieldProps) {
  return (
    <div className={cn(styles.container)}>
      <input
        type={props.type || "text"}
        className={cn("label-medium", styles.input, {
          [styles.dark]: darkMode,
          [styles.error]: error,
        })}
        placeholder={placeholder}
        {...props}
      />

      {show && (
        <button
          type="button"
          className={styles.button}
          onClick={togglePasswordVisibility}
        >
          {showPassword ? PlusIcon : PlusIcon}
        </button>
      )}
    </div>
  );
}
