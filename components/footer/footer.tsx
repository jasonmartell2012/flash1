import React from "react";
import cn from "classnames";
import styles from "./footer.module.css";
import { TextField } from "../ui";
import Logo from "../logo";
import { DownloadLine } from "@/constants/Icons";

const links = [
  {
    id: 1,
    title: "Solutions",
    url: "#",
  },
  {
    id: 2,
    title: "Approach",
    url: "#",
  },
  {
    id: 3,
    title: "Team",
    url: "#",
  },
  {
    id: 4,
    title: "FAQ",
    url: "#",
  },
  {
    id: 5,
    title: "Contact",
    url: "#",
  },
  {
    id: 6,
    title: "Facebook",
    url: "#",
  },
  {
    id: 7,
    title: "Instagram",
    url: "#",
  },
  {
    id: 8,
    title: "Twitter",
    url: "#",
  },
  {
    id: 9,
    title: "Linkedin",
    url: "#",
  },
];

export default function Footer() {
  return (
    <section className={cn("section", styles.section)}>
      <div className={cn("container")}>
        <div className={styles.content}>
          <div className={cn("heading-6", styles.title)}>
            Subscribe to our newsletter
          </div>

          <div className={styles.newsletter}>
            <TextField
              placeholder="Enter your email"
              className={styles.textfield}
              darkMode
            />
            <button className={cn("button-stroke", styles.button)}>
              Subscribe
            </button>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.body}>
          <div>
            <Logo />
          </div>

          <div className={styles.column}>
            <div className={styles.links}>
              {links.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  className={cn("label-medium", styles.link)}
                >
                  {link.title}
                </a>
              ))}
            </div>

            <div className={styles.download}>
              <button
                className={cn("button-circle-stroke", styles.rounded_btn)}
              >
                {DownloadLine}
              </button>
              <div>
                <div className={cn("label-medium", styles.download_text)}>
                  Download Presentation
                </div>
                <div className={cn("paragraph-small", styles.download_subtext)}>
                  PDF, 10.2 MB
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <div className={cn("paragraph-small", styles.link)}>
            © 2024 Elektra. All rights reserved.
          </div>

          <div className={styles.term_links}>
            <a href="#" className={cn("paragraph-small", styles.link)}>
              Privacy Policy
            </a>
            <a href="#" className={cn("paragraph-small", styles.link)}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
