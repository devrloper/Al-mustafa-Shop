 "use client";
import Link from "next/link";
import { useState } from "react";
import { Search, ShoppingCart, Heart, Menu, X, UserRound, MessageCircle } from "lucide-react";
import { useStore } from "./StoreProvider";
import Logo from "./Logo";
export default function Header() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const { cartCount } = useStore();
  const nav = [["Home","/"],["Products","/products"],["Mobile Accessories","/products?category=Mobile%20Accessories"],["Gifts","/products?category=Gifts"],["Stationery","/products?category=Stationery"],["About Us","/about"],["Contact Us","/contact"]];
  function submit(e: React.FormEvent) { e.preventDefault(); window.location.href = `/products?q=${encodeURIComponent(search)}`; }
  return <header className="site-header">
    <div className="topline"><div className="container top-inner"><span>Little things. Lovely finds. Everyday value.</span><span>Customer support made easy <span className="top-green">●</span></span></div></div>
    <div className="container header-main">
      <button className="icon-button mobile-menu" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X/> : <Menu/>}</button>
      <Logo/>
      <form className="searchbar" onSubmit={submit}><Search size={19}/><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search accessories, gifts, stationery..." aria-label="Search products"/><button type="submit">Search</button></form>
      <div className="header-actions">
        <Link className="header-action" href="/wishlist"><Heart/><span>Wishlist</span></Link>
        <Link className="header-action cart-action" href="/cart"><span className="cart-icon"><ShoppingCart/><i>{cartCount}</i></span><span>Cart</span></Link>
      </div>
    </div>
    <nav className={`nav-bar ${open ? "nav-open" : ""}`}><div className="container nav-inner">{nav.map(([label,href])=><Link key={label} href={href} onClick={()=>setOpen(false)}>{label}</Link>)}<a className="whatsapp-link" href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || ""}`} target="_blank" rel="noreferrer"><MessageCircle size={16}/> WhatsApp</a></div></nav>
  </header>;
}