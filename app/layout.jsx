import "./globals.css";
import { Space_Mono } from "next/font/google";

//components
import Navbar from "./components/Navbar";

const space_Mono = Space_Mono({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "daily-diary",
  description: "my daily memories, meaningful monments",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={space_Mono.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
