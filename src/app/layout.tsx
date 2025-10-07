import type { Metadata } from "next";
import "@/app/globals.css";
import ThemeProvider from "@/components/layout/ThemeProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Chatbot from "@/components/chat/Chatbot";
import { Playfair_Display, Inter } from "next/font/google";

const displayFont = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
});
const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sri — Portfolio",
  description: "AI/ML • CV • Robotics — portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${displayFont.variable} ${bodyFont.variable} bg-bg text-fg`}>
        <ThemeProvider>
          <Header />
          <main className="mx-auto max-w-6xl px-4">{children}</main>
          <Footer />
        </ThemeProvider>
        <Chatbot />  {/* <-- after ThemeProvider, still inside <body> */}
      </body>
    </html>
  );
}


