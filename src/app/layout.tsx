"use client";

import { RecoilRoot } from "recoil";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "LeetCode Lite",
//   description: "Leetcode Lite a free and open source Leetcode clone",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <RecoilRoot>
        <body className={inter.className}>{children}</body>
        <ToastContainer />
      </RecoilRoot>
    </html>
  );
}
