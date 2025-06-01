import type { Metadata } from "next";
import "./globals.css";
import { Glory, Kodchasan, Zen_Loop, Single_Day } from "next/font/google";

const title = "Woori";

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
  title,
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
