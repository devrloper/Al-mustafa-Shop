import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone, ShoppingBag } from "lucide-react";
import Logo from "./Logo";
export default function Footer() {
  return <footer className="footer"><div className="container footer-grid"><div className="footer-brand"><Logo/><p>Your everyday destination for useful tech accessories, thoughtful gifts and stationery essentials.</p><div className="socials"><a href="#" aria-label="Facebook"><Facebook/></a><a href="#" aria-label="Instagram"><Instagram/></a></div></div>
    <div><h4>Explore</h4><Link href="/products">All Products</Link><Link href="/products?category=Mobile%20Accessories">Mobile Accessories</Link><Link href="/products?category=Gifts">Gifts</Link><Link href="/products?category=Stationery">Stationery</Link></div>
    <div><h4>Customer Care</h4><Link href="/about">About Us</Link><Link href="/contact">Contact Us</Link><Link href="/shipping">Shipping Policy</Link><Link href="/returns">Returns & Refunds</Link></div>
    <div><h4>Get in touch</h4><p><Mail size={16}/> {process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@example.com"}</p><p><Phone size={16}/> Add your phone number</p><p><MapPin size={16}/> Pakistan</p></div>
  </div><div className="container footer-bottom"><span>© {new Date().getFullYear()} AL Mustafa Shop. All rights reserved.</span><span>Secure shopping · Friendly support · PKR pricing</span></div></footer>;
}