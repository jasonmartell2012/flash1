import React from "react";
import cn from "classnames";
import styles from "./solutions.module.css";
import ScrollAnimatedText from "@/components/scroll-animated-text";
import Tag from "@/components/tag";
import { BatteryLeaf, BubbleGraph, Lightning, Plugin } from "@/constants/Icons";
import Image from "next/image";

const solutions = [
  {
    image: "/images/solutions/1.webp",
    icon: BatteryLeaf,
    title: "Cutting-Edge Intelligent Charging Technology",
    description:
      "Our proprietary charging technology is designed to deliver the fastest and most efficient charging experience for electric bikes.",
  },
  {
    image: "/images/solutions/2.webp",
    icon: Plugin,
    title: "Seamless Integration for Effortless Connectivity",
    description:
      "Our technology is designed to seamlessly integrate with your electric bike, providing a seamless and effortless charging experience.",
  },
  {
    image: "/images/solutions/3.webp",
    icon: BubbleGraph,
    title: "Scalable Solutions for Future Growth",
    description:
      "Our technology is designed to scale with your business, providing a future-proof solution for your electric bike charging needs.",
  },
  {
    image: "/images/solutions/4.webp",
    icon: Lightning,
    title: "Renewable Energy for Sustainable Riding",
    description:
      "Our technology is designed to harness the power of renewable energy, providing a sustainable solution for electric bike charging.",
  },
];

export default function Solutions() {
  const ref = React.useRef<HTMLDivElement>(null);

  return (
    <div id="solutions" className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.content}>
          <Tag title="Solutions" />

          <div className={styles.title}>
            <ScrollAnimatedText size="heading-3">
              Powering the Future of Electric Biking
            </ScrollAnimatedText>
          </div>
        </div>

        <div className={styles.solutions}>
          {solutions.map((solution, index) => (
            <div ref={ref} key={index} className={styles.solution}>
              <div className={cn(styles.image_container)}>
                <Image
                  src={solution.image}
                  alt={solution.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <div className={styles.solution_content}>
                {solution.icon}
                <h6 className={cn("heading-6", styles.solution_title)}>
                  {solution.title}
                </h6>
                <p
                  className={cn("paragraph-large", styles.solution_description)}
                >
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
