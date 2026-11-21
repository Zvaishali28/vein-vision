import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/navbar";

export const metadata: Metadata = {
  title: "VeinVision - AI Varicose Vein Detection",
  description: "AI-Powered Varicose Vein Detection and Analysis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark bg-[#0a1128]" suppressHydrationWarning>
      <body className="bg-[#0a1128] text-[#f8fafc] min-h-screen" suppressHydrationWarning>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
