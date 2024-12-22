import React from "react";
import styles from "./showcase-image.module.css";
import Image from "next/image";

type ShowcaseImageProps = {
  image: string;
  alt: string;
};

export default function ShowcaseImage({
  image,
  alt,
  ...props
}: ShowcaseImageProps) {
  return (
    <div className={styles.image_container}>
      <Image src={image} alt={alt} {...props} layout="fill" objectFit="cover" />
    </div>
  );
}
