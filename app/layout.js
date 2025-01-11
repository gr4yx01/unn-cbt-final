import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "EXAM.UNN",
};

export default function RootLayout({ children }) {
  return (
    <html className={`${geistSans} ${geistMono}`}>
    <body className="">
      <Header /> {/* Move Header inside the body */}
      <main className="max-w-screen-md mx-auto">{children}</main> {/* Wrap children in a main tag for semantic structure */}
    </body>
  </html>
  );
}
