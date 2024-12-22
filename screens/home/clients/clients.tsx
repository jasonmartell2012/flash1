import React from "react";
import cn from "classnames";
import styles from "./clients.module.css";
import Tag from "@/components/tag";
import ScrollAnimatedText from "@/components/scroll-animated-text";
import { BikeIcon, Helmet, Quotes } from "@/constants/Icons";

const clients = [
  {
    id: 1,
    review: "Elektra e-bikes boosted our effiency. Fantastic product!",
    name: "Luna lovegood",
    company: "Tech Innovators Inc.",
    logo: BikeIcon,
  },
  {
    id: 2,
    review: "Elektra e-bikes are a game-changer for urban travel.",
    name: "Emily Blunt",
    company: "EcoTransport Network",
    logo: Helmet,
  },
];

export default function Clients() {
  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.content}>
          <Tag title="Clients" />

          <div className={styles.title}>
            <ScrollAnimatedText size="heading-3">
              Hear From Our Satified Clients
            </ScrollAnimatedText>
          </div>
        </div>

        <div className={styles.clients}>
          {clients.map((client) => (
            <div key={client.id} className={styles.client}>
              <div className={styles.quotes}>{Quotes}</div>

              <div className={cn("heading-6", styles.client_review)}>
                {client.review}
              </div>

              <div>
                <div className={cn("paragraph-medium", styles.client_name)}>
                  {client.name}
                </div>
                <div className={styles.client_wrapper}>
                  {client.logo}
                  <div
                    className={cn("paragraph-x-large", styles.client_company)}
                  >
                    {client.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
