 "use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BadgeCheck, Gift, Headphones, HeartHandshake, PackageCheck, ShieldCheck, Sparkles, Truck } from "lucide-react";
import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
const categories = [
 {name:"Mobile Accessories",desc:"Everyday tech, made easier.",href:"/products?category=Mobile%20Accessories",image:"https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=85",icon:Headphones,number:"01"},
 {name:"Gifts",desc:"Little surprises. Big smiles.",href:"/products?category=Gifts",image:"https://images.unsplash.com/photo-1513883049090-d0b7439799bf?auto=format&fit=crop&w=900&q=85",icon:Gift,number:"02"},
 {name:"Stationery",desc:"Make room for new ideas.",href:"/products?category=Stationery",image:"https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=85",icon:Sparkles,number:"03"}
];
export default function HomePage() {
 return <div>
  <section className="hero-section"><div className="container hero-grid"><motion.div className="hero-copy" initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} transition={{duration:.6}}>
    <span className="eyebrow"><span/> YOUR EVERYDAY HAPPY PLACE</span><h1>Everything you love,<br/><em>all in one place.</em></h1><p>Discover mobile accessories, thoughtful gifts, and everyday stationery at AL Mustafa Shop. Good finds for every kind of day.</p>
    <div className="hero-buttons"><Link href="/products" className="btn btn-primary">Shop now <ArrowRight size={18}/></Link><Link href="#categories" className="btn btn-light">Explore categories <ArrowUpRight size={17}/></Link></div>
    <div className="hero-proof"><div className="proof-avatars"><span>A</span><span>M</span><span>S</span></div><div><strong>Small finds, big delight</strong><small>Thoughtful picks for everyday life</small></div></div>
  </motion.div><motion.div className="hero-visual" initial={{opacity:0,scale:.96}} animate={{opacity:1,scale:1}} transition={{duration:.7,delay:.1}}>
    <div className="hero-image-main"><Image src="https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&w=1200&q=90" alt="Curated mobile accessories and everyday essentials" fill priority sizes="(max-width: 900px) 90vw, 50vw" className="cover-image" unoptimized/></div>
    <div className="floating-note note-top"><span className="note-icon red"><Gift size={19}/></span><span><b>Gifts that feel special</b><small>Made for your moments</small></span></div>
    <div className="floating-note note-bottom"><span className="note-icon green"><PackageCheck size={19}/></span><span><b>Everyday essentials</b><small>All in one happy place</small></span></div><div className="hero-orbit"></div>
  </motion.div></div></section>
  <section className="benefits-strip"><div className="container benefits-grid">{[{icon:ShieldCheck,title:"Quality picks",desc:"Chosen with care"},{icon:BadgeCheck,title:"Great value",desc:"Everyday-friendly prices"},{icon:Truck,title:"Easy ordering",desc:"Simple shopping experience"},{icon:HeartHandshake,title:"Friendly support",desc:"Here when you need us"}].map(x=><div className="benefit" key={x.title}><span><x.icon size={22}/></span><div><b>{x.title}</b><small>{x.desc}</small></div></div>)}</div></section>
  <section id="categories" className="section container"><div className="section-heading"><div><span className="eyebrow">A LITTLE SOMETHING FOR EVERYONE</span><h2>Find your kind of <em>happy.</em></h2><p>Browse the things that make everyday life a little brighter.</p></div><Link className="text-link" href="/products">View all products <ArrowRight size={17}/></Link></div>
   <div className="category-grid">{categories.map((c,i)=><motion.div className={`category-card category-${i+1}`} key={c.name} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.1}}><Image src={c.image} alt={c.name} fill sizes="(max-width: 700px) 100vw, 33vw" className="cover-image" unoptimized/><div className="category-shade"/><span className="category-number">{c.number} / COLLECTION</span><div className="category-bottom"><span className="category-icon"><c.icon size={19}/></span><h3>{c.name}</h3><p>{c.desc}</p><Link href={c.href}>Explore category <ArrowUpRight size={17}/></Link></div></motion.div>)}</div>
  </section>
  <section className="section featured-section"><div className="container"><div className="section-heading"><div><span className="eyebrow">GOOD THINGS, PICKED FOR YOU</span><h2>Customer <em>favourites.</em></h2><p>Useful, thoughtful and easy to love.</p></div><Link className="text-link" href="/products">Shop all products <ArrowRight size={17}/></Link></div><div className="product-grid">{products.slice(0,8).map((p,i)=><ProductCard key={p.id} product={p} index={i}/>)}</div></div></section>
  <section className="promo-section container"><div className="promo-panel"><div className="promo-copy"><span className="eyebrow">THE JOY IS IN THE DETAILS</span><h2>Little gifts.<br/><em>Lasting smiles.</em></h2><p>Find something thoughtful for someone special — or a little treat just for you.</p><Link className="btn btn-white" href="/products?category=Gifts">Discover gifts <ArrowRight size={18}/></Link></div><div className="promo-art"><Image src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=900&q=85" alt="Beautifully wrapped gifts" fill sizes="40vw" className="cover-image" unoptimized/><span className="promo-sticker">MADE<br/>TO MAKE<br/>YOU SMILE ✳</span></div></div></section>
  <section className="section container why-section"><div className="why-intro"><span className="eyebrow">WHY SHOP WITH US</span><h2>Shopping should feel <em>simple.</em></h2><p>From everyday essentials to small moments worth celebrating, we make it easy to find something you'll love.</p><Link href="/about" className="text-link">More about us <ArrowRight size={17}/></Link></div><div className="why-list"><div><span>01</span><div><h3>Useful things, thoughtfully chosen</h3><p>Explore practical accessories, stationery and gifts for daily life.</p></div></div><div><span>02</span><div><h3>Clear prices, easy browsing</h3><p>Find product details and prices in Pakistani Rupees before you decide.</p></div></div><div><span>03</span><div><h3>A human touch</h3><p>Have a question? Our contact options make it easy to get in touch.</p></div></div></div></section>
  <section className="newsletter-section"><div className="container newsletter-inner"><div><span className="eyebrow">A NOTE FROM US</span><h2>Good finds, in your inbox.</h2><p>Subscribe for new arrivals and shop updates.</p></div><Newsletter/></div></section>
 </div>;
}
function Newsletter() {
 const [email,setEmail] = useState("");
 const [message,setMessage] = useState("");
 function submit(e: React.FormEvent) { e.preventDefault(); if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){setMessage("Please enter a valid email address.");return;} setMessage("Thanks! Newsletter sign-up is demo-only until a backend is connected."); }
 return <form className="newsletter-form" onSubmit={submit}><label className="sr-only" htmlFor="newsletter-email">Email address</label><input id="newsletter-email" type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Your email address" required/><button type="submit">Subscribe <ArrowRight size={17}/></button>{message && <small role="status">{message}</small>}</form>;
}