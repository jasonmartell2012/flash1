"use client";

import React from "react";
import cn from "classnames";
import styles from "./hero.module.css";
import { useScroll, useTransform, motion } from "framer-motion";

export default function Hero() {
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end start"],
  });

  const imageVariants = {
    hidden: {
      scale: 1.4,
    },
    visible: {
      scale: 1,
      transition: { duration: 0.5, delay: 1.5, ease: [0.39, 0.575, 0.565, 1] },
    },
  };

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "100vh"]);

  return (
    <div className={cn("section", styles.section)}>
      <motion.img
        src="/images/hero.webp"
        alt="Hero"
        className={cn(styles.image, "image")}
        initial="hidden"
        animate="visible"
        variants={imageVariants}
        style={{ y }}
      />

      <div className={styles.overlay} />

      <motion.div className={cn("container", styles.container)}>
        <div className={cn("content", styles.content)}>
          <h1 className={cn("hero", styles.title)}>
            Ride the <br /> Future.
          </h1>

          <div className={styles.textWrapper}>
            <p className={cn("paragraph-2x-large", styles.subtitle)}>
              Join the revolution of electric biking. Elektra bikes offer
              unmatched performance and eco-friendly commuting options.
            </p>

            <button className={cn("button-stroke", styles.button)}>
              See solutions
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
