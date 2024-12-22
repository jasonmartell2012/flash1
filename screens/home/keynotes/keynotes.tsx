import React from "react";
import cn from "classnames";
import styles from "./keynotes.module.css";
import Tag from "@/components/tag";
import ScrollAnimatedText from "@/components/scroll-animated-text";
import Image from "next/image";

export default function Keynotes() {
  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.content}>
          <Tag title="Keynotes" />

          <div className={styles.title}>
            <ScrollAnimatedText size="heading-3">
              Discover the Unmatched Advantages of Riding Elektra
            </ScrollAnimatedText>
          </div>
        </div>

        <div className={styles.keynotes}>
          <div className={styles.large_keynote}>
            <div className={styles.large_image}>
              <Image
                alt="keynotes"
                src="/images/keynotes/1.webp"
                layout="fill"
                objectFit="cover"
              />
            </div>

            <div className={styles.keynote_content}>
              <div className={cn("paragraph-x-large", styles.keynote_title)}>
                Ride Green, Live Green
              </div>
              <div
                className={cn("paragraph-medium", styles.keynote_description)}
              >
                Reduce your carbon footprint effortlessly. Our electric bike
                emits zero emissions, making it a sustainable choice for daily
                commuting and recreational rides.
              </div>
            </div>
          </div>

          <div className={styles.column}>
            <div className={styles.small_keynote}>
              <div className={styles.small_image}>
                <Image
                  alt="keynotes"
                  src="/images/keynotes/2.webp"
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <div className={cn("paragraph-x-large", styles.keynote_title)}>
                Save Money, Ride Smart
              </div>
              <div
                className={cn("paragraph-medium", styles.keynote_description)}
              >
                Say goodbye to expensive fuel costs and maintenance fees. Our
                electric bike is a cost-effective alternative to traditional
                vehicles, saving you money in the long run.
              </div>
            </div>
            <div className={styles.small_keynote}>
              <div className={styles.small_image}>
                <Image
                  alt="keynotes"
                  src="/images/keynotes/3.webp"
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <div className={cn("paragraph-x-large", styles.keynote_title)}>
                Fitness Meets Convenience
              </div>
              <div
                className={cn("paragraph-medium", styles.keynote_description)}
              >
                Stay active and healthy while enjoying a smooth and comfortable
                ride. Our electric bike is designed to provide a fun and
                effortless workout experience.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
