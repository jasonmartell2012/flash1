import React from "react";
import Curtain from "./curtain";
import Header from "./header";
import Footer from "./footer";
import ScrollToTop from "./scroll-top-button";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Curtain />
      <Header />
      <ScrollToTop />
      {children}
      <Footer />
    </>
  );
}
