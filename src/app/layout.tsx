import type { Metadata } from "next";
import "@/app/globals.css";
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
  metadataBase: new URL("https://wooristockholm.se"),
  category: "Food & Drink",
  creator: "Woori",
  title: "Woori - Koreanska rätter i Fredhäll, Kristineberg, Stockholm",
  description:
    "Woori serverar autentiska koreanska rätter i Fredhäll, Kristineberg, Stockholm. Se vår meny, öppettider, adress och kontaktuppgifter. Välkommen!",
  keywords: [
    "Woori",
    "Koreansk restaurang",
    "Bibimbap",
    "Bulgogi",
    "Koreansk friterad kyckling",
    "Soju",
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
    title: "Woori - Autentisk koreansk restaurang i Stockholm",
    description:
      "Woori serverar autentiska koreanska rätter i Fredhäll, Kristineberg, Stockholm. Se vår meny, öppettider, adress och kontaktuppgifter. Välkommen!",
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
      <body className={"antialiased"}>{children}</body>
    </html>
  );
}
