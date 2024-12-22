import React from "react";
import cn from "classnames";
import styles from "./values.module.css";
import Tag from "@/components/tag";
import ScrollAnimatedText from "@/components/scroll-animated-text";
import { HandStars, Gem, Users, Orbit } from "@/constants/Icons";

const values = [
  {
    id: 1,
    icon: HandStars,
    title: "Integrity",
    description:
      "We are honest, transparent, and committed to doing what is best for our customers and our company.",
  },
  {
    id: 2,
    icon: Users,
    title: "Teamwork",
    description:
      "We collaborate and share knowledge to benefit our customers and our company.",
  },
  {
    id: 3,
    icon: Gem,
    title: "Quality",
    description:
      "We provide outstanding products and unsurpassed service that, together, deliver premium value to our customers.",
  },
  {
    id: 4,
    icon: Orbit,
    title: "Customer Focus",
    description:
      "We are dedicated to satisfying customer needs and honoring commitments that we have made to them.",
  },
];

export default function Values() {
  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.content}>
          <Tag title="Core values" />

          <div className={styles.title}>
            <ScrollAnimatedText size="heading-3">
              Guiding Principles for Excellence and Innovation
            </ScrollAnimatedText>
          </div>
        </div>

        <div className={styles.values}>
          {values.map((value) => (
            <div key={value.id} className={styles.value}>
              {value.icon}

              <div className={styles.value_content}>
                <div className={cn("heading-6", styles.value_title)}>
                  {value.title}
                </div>
                <div
                  className={cn("paragraph-large", styles.value_description)}
                >
                  {value.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
