import React from "react";
import cn from "classnames";
import styles from "./features.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  BikeIcon,
  FlashLight,
  ShieldIcon,
  SteeringWheel,
} from "@/constants/Icons";

const tabs = [
  {
    id: 1,
    title: "Cuztomizable Modes",
    subtitle:
      "Tailor your ride to your preferences with customizable riding modes that allow you to adjust speed, power, and perfomance to match your needs and terrain conditions.",
    image: "/images/features/1.webp",
  },
  {
    id: 2,
    title: "Regenerative Braking",
    subtitle:
      "The regenerative braking system captures energy when braking or going downhill and uses it to recharge the battery, extending your range and ride time.",
    image: "/images/features/2.webp",
  },
  {
    id: 3,
    title: "Lightweight Frame",
    subtitle:
      "The lightweight and compact design makes it easy to carry and store your board when you're not riding, so you can take it with you wherever you go.",
    image: "/images/features/3.webp",
  },
];

const features = [
  {
    id: 1,
    title: "Quick-Release Wheels",
    icon: SteeringWheel,
  },
  {
    id: 2,
    title: "Integrated Lighting System",
    icon: FlashLight,
  },
  {
    id: 3,
    title: "Adjustable Suspension",
    icon: BikeIcon,
  },
  {
    id: 4,
    title: "Anti-Theft Protection",
    icon: ShieldIcon,
  },
];

export default function Features() {
  const [activeTab, setActiveTab] = React.useState(tabs[0]);

  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.content}>
          <div className={styles.tabs}>
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={cn(styles.tab, {
                  [styles.active]: activeTab.id === tab.id,
                })}
                onClick={() => setActiveTab(tab)}
              >
                <div className={cn("paragraph-x-large", styles.tab_title)}>
                  {tab.title}
                </div>
                <div className={cn("paragraph-medium", styles.tab_subtitle)}>
                  {tab.subtitle}
                </div>
              </div>
            ))}
          </div>

          <motion.div
            key={activeTab.id}
            className={styles.image_container}
            initial={{ clipPath: "circle(10% at 50% 50%)" }}
            animate={{ clipPath: "circle(100%)" }}
            transition={{ duration: 0.6 }}
          >
            <Image
              alt={activeTab.title}
              src={activeTab.image}
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
        </div>

        <div className={styles.features}>
          {features.map((feature) => (
            <div key={feature.id} className={styles.feature}>
              {feature.icon}
              <div className={cn("heading-3", styles.feature_title)}>
                {feature.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
