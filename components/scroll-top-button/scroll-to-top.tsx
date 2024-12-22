import React from "react";
import cn from "classnames";
import styles from "./scroll-to-top.module.css";
import { ArrowTop } from "@/constants/Icons";

export default function ScrollToTop() {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={cn("button-circle-stroke", styles.button, {
        [styles.show]: show,
      })}
      onClick={handleClick}
    >
      {ArrowTop}
    </button>
  );
}
