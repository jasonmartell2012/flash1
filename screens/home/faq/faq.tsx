import React from "react";
import cn from "classnames";
import styles from "./faq.module.css";
import Tag from "@/components/tag";
import ScrollAnimatedText from "@/components/scroll-animated-text";
import { PlusIcon } from "@/constants/Icons";

const faqs = [
  {
    id: 1,
    number: "01",
    question: "How long does it take to fully charge the battery?",
    answer:
      "The charging for our e-bike batteries can vary depending on the specific model and the capacity of the battery. On average, with our intelligent charging system, a full charge can be achieved within 3 to 5 hours.",
  },
  {
    id: 2,
    number: "02",
    question: "What is the maximum range on a single charge?",
    answer:
      "The maximum range of our e-bikes can vary depending on the specific model and the capacity of the battery. On average, our e-bikes can travel up to 50 miles on a single charge.",
  },
  {
    id: 3,
    number: "03",
    question: "Are the e-bikes water-resistant?",
    answer:
      "Yes, our e-bikes are water-resistant and can be ridden in light rain. However, we recommend avoiding riding in heavy rain or submerging the e-bike in water to prevent damage to the electrical components.",
  },
  {
    id: 4,
    number: "04",
    question: "How do I mantain my e-bike to ensure it's longetivity?",
    answer:
      "To ensure the longevity of your e-bike, we recommend regular maintenance and care. This includes keeping the e-bike clean and dry, checking the tire pressure, and lubricating the chain regularly. Additionally, it is important to store the e-bike in a dry and secure location when not in use.",
  },
];

export default function Faq() {
  const [activeFaq, setActiveFaq] = React.useState<number | null>(null);

  return (
    <section id="faq" className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.content}>
          <Tag title="Faq" />

          <div className={styles.title}>
            <ScrollAnimatedText size="heading-3">
              Common Questions and Answers
            </ScrollAnimatedText>
          </div>
        </div>

        <div className={styles.faqs}>
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className={cn(styles.faq, {
                [styles.active]: activeFaq === faq.id,
              })}
              onClick={() => {
                setActiveFaq(faq.id);
              }}
            >
              <div className={cn("paragraph-small", styles.faq_number)}>
                {faq.number}
              </div>

              <div className={styles.faq_content}>
                <div className={cn("heading-6", styles.faq_question)}>
                  {faq.question}
                </div>

                {activeFaq === faq.id && (
                  <div className={cn("paragraph-medium", styles.faq_answer)}>
                    {faq.answer}
                  </div>
                )}
              </div>

              <div
                className={cn("button-circle-stroke", styles.faq_button, {
                  [styles.active]: activeFaq === faq.id,
                })}
              >
                {PlusIcon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
