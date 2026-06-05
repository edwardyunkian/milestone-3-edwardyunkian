import { Stack_Sans_Headline, SN_Pro } from "next/font/google";
import Navbar from "@/components/Navbar";
import { CartProvider } from "@/context/CartContext";
import "./globals.css";

const stackSansHeadline = Stack_Sans_Headline({
  variable: "--font-stack-sans-headline",
  subsets: ["latin"],
});

const snPro = SN_Pro({
  variable: "--font-sn-pro",
  subsets: ["latin"],
});

export const metadata = {
  title: "RevoShop",
  description: "A fictional e-commerce store built with Next.js.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${stackSansHeadline.variable} ${snPro.variable} h-full antialiased`}
    >
      <body className="bg-white text-gray-900">
        <CartProvider>
          <Navbar />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
