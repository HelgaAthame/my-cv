import type { Metadata } from "next";

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
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
