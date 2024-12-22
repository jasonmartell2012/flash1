import React from "react";
import cn from "classnames";
import styles from "./burger.module.css";

export default function Burger({ className, visibleNav, setVisibleNav }) {
  return (
    <button
      className={cn(styles.button, className)}
      onClick={() => setVisibleNav(!visibleNav)}
    >
      <div
        className={cn(styles.burger, {
          [styles.active]: visibleNav,
        })}
      ></div>
    </button>
  );
}
