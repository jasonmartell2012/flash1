import React from "react";
import cn from "classnames";
import styles from "./image-marquee.module.css";
import Marquee from "react-fast-marquee";

type ImageMarqueeProps = {
  gradient?: boolean;
  direction?: "left" | "right";
  children: React.ReactNode;
};

export default function ImageMarquee({
  gradient = false,
  direction = "left",
  children,
}: ImageMarqueeProps) {
  return (
    <Marquee
      direction={direction}
      gradient={gradient}
      autoFill={true}
      speed={100}
    >
      {children}
    </Marquee>
  );
}
