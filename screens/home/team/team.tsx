import React from "react";
import cn from "classnames";
import styles from "./team.module.css";
import Tag from "@/components/tag";
import ScrollAnimatedText from "@/components/scroll-animated-text";
import Image from "next/image";
import { motion } from "framer-motion";

const team_members = [
  {
    id: 1,
    name: "John Smith",
    role: "Lead Engineering",
    image: "/images/team/1.webp",
    description:
      "John is a seasoned engineer with over 10 years of experience in the field. He has worked on a variety of projects and has a strong background in software development.",
  },

  {
    id: 2,
    name: "Michael Johnson",
    role: "Marketing Manager",
    image: "/images/slideshow/1.webp",
    description:
      "Michael is a product manager with a background in design and development. She has a passion for creating products that are user-friendly and intuitive.",
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Product Manager",
    image: "/images/slideshow/3.webp",
    description:
      "Emily is a marketing manager with a background in digital marketing and social media. He has a passion for creating engaging content and building brand awareness.",
  },
  {
    id: 4,
    name: "Sarah Williams",
    role: "Customer Support",
    image: "/images/team/4.webp",
    description:
      "Sarah is a customer support specialist with a background in customer service and technical support. She has a passion for helping customers and solving problems.",
  },
];

export default function Team() {
  const [activeMember, setActiveMember] = React.useState(team_members[0]);

  return (
    <section id="team" className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.content}>
          <Tag title="Our team" />

          <div className={styles.title}>
            <ScrollAnimatedText size="heading-3">
              Meet Our Dedicated and Innovative Team
            </ScrollAnimatedText>
          </div>
        </div>

        <div className={styles.team_members}>
          <div className={styles.column}>
            {team_members.map((member) => (
              <div
                key={member.id}
                className={cn(styles.team_member)}
                onClick={() => setActiveMember(member)}
              >
                <div
                  className={cn("heading-6", styles.team_name, {
                    [styles.active]: activeMember === member,
                  })}
                >
                  {member.name}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.column}>
            <motion.div
              className={styles.team_image}
              initial={{ clipPath: "circle(10% at 50% 50%)" }}
              animate={{ clipPath: "circle(100%)" }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src={activeMember.image}
                layout="fill"
                objectFit="cover"
                alt="John Smith"
              />
            </motion.div>
            <div className={cn("paragraph-x-large", styles.team_role)}>
              {activeMember.role}
            </div>
            <div className={cn("paragraph-large", styles.team_description)}>
              {activeMember.description}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
