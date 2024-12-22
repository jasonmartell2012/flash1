import React from "react";
import cn from "classnames";
import styles from "./scroll-animated-text.module.css";

type ScrollAnimatedTextProps = {
  size: string;
  className?: string;
  children: React.ReactNode;
};

export default function ScrollAnimatedText({
  size,
  className,
  children,
}: ScrollAnimatedTextProps) {
  return (
    <div>
      <h1 className={cn(styles.title, className, size)}>{children}</h1>
    </div>
  );
}
