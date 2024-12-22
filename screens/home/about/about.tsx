"use client";

import React from "react";
import cn from "classnames";
import styles from "./about.module.css";
import ScrollAnimatedText from "@/components/scroll-animated-text";
import { motion, stagger, useAnimation, useInView } from "framer-motion";
import Tag from "@/components/tag";
import Image from "next/image";

const features = [
  {
    title: "Innovative Design",
    subtitle:
      "Our eletric bikes combine cutting edge technology with sleek, moderm aesthetics for an unbeatable riding experience.",
  },
  {
    title: "Premium Quality",
    subtitle:
      "We use only the best materials and components to ensure our electric bikes are built to last.",
  },
];

export default function About() {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className={cn("section")}>
      <div className={cn("container", styles.container)}>
        <div className={styles.content}>
          <Tag title="Our story" />

          <motion.div className={styles.column}>
            <motion.div>
              <ScrollAnimatedText size="heading-3">
                We are passionate about revolutionizing urban mobility with our
                state-of-the-art electric bikes.
              </ScrollAnimatedText>
            </motion.div>

            <motion.div
              ref={ref}
              className={cn(styles.image_container)}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/images/about.webp"
                alt="About"
                layout="fill"
                objectFit="cover"
              />
            </motion.div>
          </motion.div>
        </div>

        <div className={styles.divider} />

        <motion.div className={styles.features}>
          {features.map((feature, index) => (
            <motion.div key={index} className={styles.card}>
              <div className={cn("paragraph-x-large", styles.feature_title)}>
                {feature.title}
              </div>
              <div className={cn("paragraph-large", styles.feature_subtitle)}>
                {feature.subtitle}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
