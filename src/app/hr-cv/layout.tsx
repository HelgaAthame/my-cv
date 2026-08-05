import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Olga - Frontend Developer CV",
  description: "HR-friendly CV for Frontend Developer position",
};

export default function HrCVLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        {/*
          Runs before first paint so a returning visitor who chose the light
          theme never sees a flash of the dark one. It has to be inline and
          synchronous — a useEffect would run after the first paint, which is
          exactly the flash we are avoiding. Dark stays the default when
          nothing is stored: the page is designed dark-first, and the toggle
          is right there for anyone who wants otherwise.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('cv-theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch(e){}`,
          }}
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
