import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import { ParallaxBackground } from "@/components/parallax";
// import { StarBackground } from "@/components/starbg";

const onest = localFont({
  src: "./fonts/Onest.ttf",
  variable: "--font-onest",
  weight: "100 200 300 400 500 600 700 800 900",
});

export const metadata: Metadata = {
  title: "FrontEnd developer Olga",
  description: "Frontend developer with full-stack skills CV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${onest.variable} antialiased`}>
        <div className="relative w-full h-full flex items-center">
          {/* <StarBackground />
          <ParallaxBackground /> */}
          {children}
        </div>
      </body>
    </html>
  );
}
