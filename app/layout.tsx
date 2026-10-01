import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bank Konten · Daftar Campaign | Accesstrade",
  description:
    "Mockup dashboard publisher Accesstrade — Bank Konten, daftar campaign, banner & video siap pakai.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={nunito.variable}>
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
