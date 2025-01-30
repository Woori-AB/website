import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const title = "Woori website";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-300 dark:bg-gray-950`}
      >
        <main>
          <div className="flex flex-col container mx-auto bg-gray-100 dark:bg-gray-900 p-12">
            <h1
              className="mx-auto text-4xl text-center font-black mb-2 text-gray-700 dark:text-gray-100"
              data-testid="layout-h1"
            >
              {title}
            </h1>
            <div>{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
