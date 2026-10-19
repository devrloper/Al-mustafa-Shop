import Link from "next/link";
import { Facebook, Instagram, MapPin, Phone, MessageCircle } from "lucide-react";
import Logo from "./Logo";
export default function Footer() {
  return <footer className="footer"><div className="container footer-grid"><div className="footer-brand"><Logo/><p>Al-Mustafa Stationery &amp; Gift Hub. Stationery, gifts, toys, sports items and photocopy &amp; print services.</p><div className="socials"><a href="#" aria-label="Facebook"><Facebook/></a><a href="#" aria-label="Instagram"><Instagram/></a></div></div>
    <div><h4>Explore</h4><Link href="/products">All Products</Link><Link href="/products?category=Stationery">Stationery</Link><Link href="/products?category=Gifts">Gifts &amp; Toys</Link><Link href="/products?category=Sports%20Items">Sports Items</Link><Link href="/products?category=Mobile%20Accessories">Mobile Accessories</Link></div>
    <div><h4>Shop Services</h4><Link href="/products?category=Printing%20Services">Photocopy &amp; Print</Link><Link href="/printing-services">Scanning &amp; Lamination</Link><Link href="/printing-services">Spiral Binding</Link><Link href="/about">About Us</Link><Link href="/contact">Contact Us</Link></div>
    <div><h4>Visit &amp; Contact</h4><p><Phone size={16}/> 0335-7476789</p><p><MessageCircle size={16}/> WhatsApp available</p><p><MapPin size={16}/> Shahareed Park, opposite Tanveer Sabzi Shop</p></div>
  </div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Al-Mustafa Stationery &amp; Gift Hub</span><span>Quality service · Great value · Friendly support</span></div></footer>;
}
