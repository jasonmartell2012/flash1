import React from "react";
import cn from "classnames";
import styles from "./highlights.module.css";
import Image from "next/image";

const highlights = [
  {
    image: "/images/highlights/1.webp",
    title: "Experience the thrill of smooth acceleration",
    subtitle: "Powerful Motor",
  },
  {
    image: "/images/highlights/2.webp",
    title: "Enjoy extended rides without worrying about recharging",
    subtitle: "Long Battery Life",
  },
  {
    image: "/images/highlights/3.webp",
    title: "Ride safely at night with powerful LED lights",
    subtitle: "Bright LED Headlights",
  },
  {
    image: "/images/highlights/4.webp",
    title: "Stay balanced and steady on any terrain",
    subtitle: "All-Terrain Wheels",
  },
];

export default function Highlights() {
  return (
    <div className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.highlights}>
          {highlights.map((highlight, index) => (
            <div key={index} className={styles.highlight}>
              <div className={styles.image_container}>
                <Image
                  src={highlight.image}
                  alt={highlight.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <div className={styles.highlight_content}>
                <div
                  className={cn("paragraph-large", styles.highlight_subtitle)}
                >
                  {highlight.subtitle}
                </div>

                <div className={cn("heading-3", styles.highlight_title)}>
                  {highlight.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
