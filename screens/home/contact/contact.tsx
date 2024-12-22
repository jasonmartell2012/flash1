import React from "react";
import cn from "classnames";
import styles from "./contact.module.css";
import { TextArea, TextField } from "@/components/ui";
import { useForm, ValidationError } from "@formspree/react";
import ScrollAnimatedText from "@/components/scroll-animated-text";

export default function Contact() {
  const [state, handleSubmit] = useForm("mgeggwjn");

  return (
    <section id="contact" className={cn("section")}>
      <div className={cn("container", styles.container)}>
        <div className={styles.content}>
          <div className={styles.title}>
            <ScrollAnimatedText size="heading-3">
              {"We're here to help you and connect with you"}
            </ScrollAnimatedText>
          </div>

          <div>
            <div className={cn("paragraph-large", styles.content_text)}>
              Visit us
            </div>
            <div className={cn("paragraph-medium", styles.content_subtext)}>
              1234 Main Street, Suite 200
            </div>
          </div>

          <div>
            <div className={cn("paragraph-large", styles.content_text)}>
              General Inquiries
            </div>
            <div className={cn("paragraph-medium", styles.content_subtext)}>
              info@elektra.com
            </div>
            <div className={cn("paragraph-medium", styles.content_subtext)}>
              1-800-123-4567
            </div>
          </div>
        </div>

        <div>
          <form onSubmit={handleSubmit} className={styles.contact_form}>
            <TextField
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              required
            />
            <TextField
              id="phone"
              name="phone"
              type="tel"
              placeholder="Phone"
              required
            />
            <TextField
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              required
            />
            <TextArea
              placeholder="Enter your message"
              id="message"
              name="message"
              required
            />

            <button type="submit" className={cn("button", styles.button)}>
              Submit
            </button>
            <div className={cn("paragraph-small", styles.text)}>
              {"By submitting this form, you agree to our "}
              <a href="#" className={cn("link")}>
                {"Privacy Policy"}
              </a>
              {" and "}
              <a href="#" className={cn("link")}>
                {"Terms of Service"}
              </a>
              {"."}
            </div>
          </form>

          {state.succeeded && (
            <div className={cn("paragraph-small", styles.success)}>
              {"Thanks for reaching out! We'll get back to you soon."}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
