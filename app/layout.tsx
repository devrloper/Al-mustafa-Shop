import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { StoreProvider } from "@/components/StoreProvider";
export const metadata: Metadata = {
  title: { default: "AL Mustafa Shop | Everyday Finds, All in One Place", template: "%s | AL Mustafa Shop" },
  description: "Shop mobile accessories, thoughtful gifts and everyday stationery at AL Mustafa Shop.",
  openGraph: { title: "AL Mustafa Shop", description: "Everything you love, all in one place.", type: "website" }
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><StoreProvider><Header/><main>{children}</main><Footer/></StoreProvider></body></html>;
}