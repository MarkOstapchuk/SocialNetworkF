import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AsideLeft from "@/components/AsideLeft/AsideLeft";
import Main from "@/components/Main/Main";
import AsideRight from "@/components/AsideRight/AsideRight";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Social network",
  description: "qwedsa10 social network"
};

export default function RootLayout({
                                     children
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={inter.className}>
      <AsideLeft />
      <Main>{children}</Main>
      <AsideRight />
    </body>
    </html>
  );
}
