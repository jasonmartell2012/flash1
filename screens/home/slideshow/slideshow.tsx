import React from "react";
import ImageMarquee from "@/components/image-marquee";
import Image from "next/image";
import styles from "./slideshow.module.css";
import cn from "classnames";

const top_images = [
  {
    id: 1,
    src: "/images/slideshow/1.webp",
    alt: "Picture of the author",
  },
  {
    id: 2,
    src: "/images/slideshow/2.webp",
    alt: "Picture of the author",
  },
  {
    id: 3,
    src: "/images/slideshow/3.webp",
    alt: "Picture of the author",
  },
  {
    id: 4,
    src: "/images/slideshow/4.webp",
    alt: "Picture of the author",
  },
];

const bottom_images = [
  {
    id: 1,
    src: "/images/slideshow/5.webp",
    alt: "Picture of the author",
  },
  {
    id: 2,
    src: "/images/slideshow/6.webp",
    alt: "Picture of the author",
  },
  {
    id: 3,
    src: "/images/slideshow/7.webp",
    alt: "Picture of the author",
  },
  {
    id: 4,
    src: "/images/slideshow/8.webp",
    alt: "Picture of the author",
  },
];

export default function Slideshow() {
  return (
    <div className={cn("section")}>
      <div className={styles.container}>
        <ImageMarquee>
          {top_images.map((image) => (
            <div key={image.id} className={styles.image_container}>
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </ImageMarquee>

        <ImageMarquee direction="right">
          {bottom_images.map((image) => (
            <div key={image.id} className={styles.image_container}>
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </ImageMarquee>
      </div>
    </div>
  );
}
