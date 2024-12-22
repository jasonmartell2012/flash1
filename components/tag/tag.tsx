import React from "react";
import cn from "classnames";
import styles from "./tag.module.css";
import { FlashIcon } from "@/constants/Icons";

type TagProps = {
  title: string;
};

export default function Tag({ title }: TagProps) {
  return (
    <div className={cn("subheading-small", styles.title)}>
      {FlashIcon}
      <span>{title}</span>
    </div>
  );
}
