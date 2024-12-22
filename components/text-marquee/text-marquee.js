import React from "react";
import cn from "classnames";
import styles from "./text-marquee.module.css";
import Marquee from "react-fast-marquee";

export default function TextMarquee({
  gradient = true,
  color = "var(--black)",
  children,
}) {
  return (
    <Marquee gradient={gradient} autoFill={true} speed={100}>
      <h1 className={cn("hero", styles.title)} style={{ color }}>
        {children}
      </h1>
    </Marquee>
  );
}
