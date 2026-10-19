import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { StoreProvider } from "@/components/StoreProvider";
export const metadata: Metadata = {
  title: { default: "Al-Mustafa Stationery & Gift Hub", template: "%s | Al-Mustafa" },
  description: "Stationery, gifts, toys, sports items, mobile accessories and photocopy and printing services at Al-Mustafa, Shahareed Park.",
  openGraph: { title: "Al-Mustafa Stationery & Gift Hub", description: "One stop for all your stationery, gifts and printing needs.", type: "website" }
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><StoreProvider><Header/><main>{children}</main><Footer/></StoreProvider></body></html>;
}
