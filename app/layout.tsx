import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";

const tajawal = Tajawal({
  subsets: ["arabic"],
  variable: "--font-tajawal",
  display: "swap",
  weight: ["400", "700"]
});

export const metadata: Metadata = {
  title: "مُبدع الويب",
  description: "منصة رقمية تستعرض خبرتنا في بناء التجارب الرقمية المتقنة."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={tajawal.variable}>
      <body>{children}</body>
    </html>
  );
}
