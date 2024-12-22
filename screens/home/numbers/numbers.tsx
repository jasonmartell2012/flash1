import React from "react";
import cn from "classnames";
import styles from "./numbers.module.css";
import ScrollAnimatedText from "@/components/scroll-animated-text";
import Tag from "@/components/tag";

const numbers = [
  {
    title: "1000",
    span: "+",
    description: "Satisfied riders",
  },
  {
    title: "98",
    span: "%",
    description: "Advanced technology",
  },
  {
    title: "30",
    span: "m",
    description: "30 minutes charge",
  },
];

export default function Numbers() {
  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container")}>
        <div className={styles.content}>
          <Tag title="Numbers" />

          <div className={styles.title}>
            <ScrollAnimatedText size="heading-3">
              Metrics of Innovation
              <br /> and Success
            </ScrollAnimatedText>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.numbers}>
          {numbers.map((number, index) => (
            <div key={index} className={styles.number}>
              <div className={cn("hero", styles.number_title)}>
                {number.title}
                <span className={cn("paragraph-large")}>{number.span}</span>
              </div>

              <div
                className={cn("paragraph-medium", styles.number_description)}
              >
                {number.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
