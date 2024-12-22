import Image from "next/image";
import React from "react";
import cn from "classnames";
import styles from "./approach.module.css";
import Tag from "@/components/tag";
import ScrollAnimatedText from "@/components/scroll-animated-text";
import { motion } from "framer-motion";
import ShowcaseImage from "@/components/showcase-image";

const items = [
  {
    number: "01",
    title: "Innovation",
    description:
      "Our e-bikes feature cutting-edge technology, providing advanced solutions for a superior riding experience.",
  },
  {
    number: "02",
    title: "Effiency",
    description:
      "Our e-bikes are designed to be efficient, providing a sustainable and eco-friendly mode of transportation.",
  },
  {
    number: "03",
    title: "Comfort",
    description:
      "Ergonomically designed, our e-bikes are built for comfort, ensuring a smooth and enjoyable ride.",
  },
  {
    number: "04",
    title: "Safety",
    description:
      "Safety is our top priority. Our e-bikes are equipped with advanced safety features to ensure a secure ride.",
  },
];

export default function Approach() {
  return (
    <>
      <ShowcaseImage image="/images/showcase/1.webp" alt="Showcase image" />

      <div id="approach" className={cn("section")}>
        <div className={cn("container")}>
          <div className={styles.content}>
            <Tag title="Approach" />

            <div className={styles.title}>
              <ScrollAnimatedText size="heading-3">
                Discover our approach through our key principles
              </ScrollAnimatedText>
            </div>
          </div>

          <div className={styles.items}>
            {items.map((item, index) => (
              <div key={index} className={styles.item}>
                <div className={cn("paragraph-small", styles.item_number)}>
                  {item.number}
                </div>
                <div className={cn("heading-3", styles.item_title)}>
                  {item.title}
                </div>
                <div className={cn("paragraph-large", styles.item_description)}>
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
