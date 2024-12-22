import { DM_Sans, Inter, Plus_Jakarta_Sans } from "next/font/google";
import "../styles/index.css";
import cn from "classnames";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

const authorSemibold = localFont({
  src: "../public/fonts/Author-Semibold.otf",
  weight: "600",
  variable: "--font-author-semibold",
});

export const metadata = {
  title: "Elektra - E-bike Landing Template",
  description:
    "Elektra is a e-bike landing template that is beautifully designed and developed using the latest technology.",
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.variable,
          dmSans.variable,
          plusJakartaSans.variable,
          authorSemibold.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
