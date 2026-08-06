import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

/*
  The design system lives in the hr-cv route and is imported, not copied.
  Both pages are the same person and must not drift apart visually — a
  second copy of these tokens would guarantee they eventually do. This
  route adds no styles of its own; everything below uses the semantic
  utilities defined there (.t-title, .surface, .chip, …).
*/
import "../hr-cv/globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ольга — Full-Stack TypeScript / AI-интеграции",
  description:
    "Full-stack разработчик на TypeScript: React, Next.js, Node.js, PostgreSQL. Довожу LLM-фичи до продакшена — стриминг, агенты с инструментами, защита от галлюцинаций, контроль стоимости.",
};

export default function AiEngineerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" data-theme="dark">
      <head>
        {/*
          Same pre-paint theme restore as the hr-cv layout, and deliberately
          the same `cv-theme` key: a visitor who picked light on one page
          should not be flashed the dark theme on the other.
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
