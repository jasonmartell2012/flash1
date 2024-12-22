"use client";

import React from "react";
import Layout from "@/components/Layout";
import Hero from "./hero";
import About from "./about";
import Lenis from "lenis";
import Numbers from "./numbers";
import Solutions from "./solutions";
import Approach from "./approach";
import Highlights from "./highlights";
import ShowcaseImage from "@/components/showcase-image";
import Features from "./features";
import Keynotes from "./keynotes";
import Faq from "./faq";
import Slideshow from "./slideshow";
import Team from "./team";
import Values from "./values";
import Clients from "./clients";
import Contact from "./contact";

export default function HomePage() {
  React.useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <Layout>
      <Hero />
      <About />
      <Numbers />
      <Solutions />
      <Approach />
      <Highlights />
      <ShowcaseImage image="/images/showcase/2.webp" alt="Showcase image" />
      <Features />
      <ShowcaseImage image="/images/showcase/3.webp" alt="Showcase image" />
      <Keynotes />
      <Faq />
      <Slideshow />
      <Team />
      <Values />
      <ShowcaseImage image="/images/showcase/4.webp" alt="Showcase image" />
      <Clients />
      <Contact />
    </Layout>
  );
}
