import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900 font-sans min-h-screen flex flex-col">
        <header className="p-6 bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-md">
          <h1 className="text-3xl font-bold text-center">
            Next.js + Tailwind Rendering Examples
          </h1>
        </header>
        <main className="flex-grow flex items-center justify-center p-6">
          {children}
        </main>
        <footer className="p-4 bg-blue-700 text-white text-center text-sm">
          © 2025 My Next.js Project. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
