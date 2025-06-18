import type { Metadata } from "next";
import "./globals.css";
import { Glory, Kodchasan, Zen_Loop, Single_Day } from "next/font/google";

const zenLoop = Zen_Loop({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-zenLoop",
});

const glory = Glory({
  subsets: ["latin"],
  weight: "300",
  variable: "--font-glory",
});

const kodchasan = Kodchasan({
  subsets: ["latin"],
  weight: "300",
  variable: "--font-kodchasan",
});

const singleDay = Single_Day({
  weight: "400",
  variable: "--font-singleDay",
});

export const metadata: Metadata = {
  category: "Food & Drink",
  creator: "Woori",
  title: "Woori",
  description: "Koreanska rätter i Fredhäll, Kristineberg!",
  keywords: [
    "Woori",
    "Korean",
    "Koreansk",
    "Italiensk",
    "Restaurang",
    "Bibimbap",
    "Bulgogi",
    "Pizza",
    "Fredhäll",
    "Kristineberg",
    "Stockholm",
  ],
  authors: [{ name: "Woori", url: "https://wooristockholm.se" }],
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  referrer: "origin-when-cross-origin",
  openGraph: {
    siteName: "Woori Stockholm",
    title: "Woori",
    description: "Koreanska rätter i Fredhäll, Kristineberg!",
    authors: "Woori",
    url: "https://wooristockholm.se",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${zenLoop.variable} ${glory.variable} ${kodchasan.variable} ${singleDay.variable} font-sans`}
    >
      <body className={"antialiased"}>
        <main>
          <div>{children}</div>
        </main>
      </body>
    </html>
  );
}
