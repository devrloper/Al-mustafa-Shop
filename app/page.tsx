"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Gift, Headphones, Printer, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
const categories = [
 {name:"Stationery",desc:"Registers, pens, art supplies & more",href:"/products?category=Stationery",image:"https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=85",icon:BookOpen},
 {name:"Gifts & Toys",desc:"Thoughtful gifts and little surprises",href:"/products?category=Gifts",image:"https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=900&q=85",icon:Gift},
 {name:"Sports Items",desc:"Gear for cricket, football & more",href:"/products?category=Sports%20Items",image:"https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=900&q=85",icon:Trophy},
 {name:"Mobile Accessories",desc:"Chargers, earphones, cases & cables",href:"/products?category=Mobile%20Accessories",image:"https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=85",icon:Headphones},
 {name:"Photocopy & Print",desc:"Printing, scanning, lamination & binding",href:"/printing-services",image:"https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=900&q=85",icon:Printer}
];
export default function HomePage() {
 return <div className="home-page almustafa-home">
  <section className="hero-section"><div className="container hero-grid"><motion.div className="hero-copy" initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} transition={{duration:.6}}>
    <span className="eyebrow"><span/> AL-MUSTAFA STATIONERY &amp; GIFT HUB</span><h1>All your needs,<br/><em>one stop shop.</em></h1><p>Discover stationery, thoughtful gifts, sports gear, mobile accessories and friendly photocopy &amp; print services at your neighborhood store.</p>
    <div className="hero-buttons"><Link href="/products" className="btn btn-primary">Browse products <ArrowRight size={18}/></Link><a href="https://wa.me/923357476789" className="btn btn-light">WhatsApp the shop</a></div>
    <div className="hero-proof"><span className="hero-proof-icon"><MapPinIcon/></span><div><strong>Shahareed Park</strong><small>Opposite Tanveer Sabzi Shop</small></div></div>
  </motion.div><motion.div className="hero-visual" initial={{opacity:0,scale:.97}} animate={{opacity:1,scale:1}} transition={{duration:.7,delay:.1}}>
    <div className="hero-image-main"><Image src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=90" alt="A bright, tidy stationery workspace" fill priority sizes="(max-width: 900px) 90vw, 50vw" className="cover-image" unoptimized/></div>
    <div className="floating-note note-top"><span className="note-icon red"><Gift size={19}/></span><span><b>Gifts for every occasion</b><small>Small joys, thoughtfully picked</small></span></div>
    <Link href="/printing-services" className="floating-note note-bottom"><span className="note-icon green"><Printer size={19}/></span><span><b>Photocopy &amp; print</b><small>Explore our shop services</small></span></Link><div className="hero-orbit"></div>
  </motion.div></div></section>
  <section className="benefits-strip"><div className="container benefits-grid">{[{icon:BookOpen,title:"Stationery",desc:"School & office essentials"},{icon:Gift,title:"Gifts & toys",desc:"For kids and celebrations"},{icon:Trophy,title:"Sports items",desc:"Gear for every game"},{icon:Printer,title:"Printing services",desc:"Print, scan & bind"}].map(x=><div className="benefit" key={x.title}><span><x.icon size={22}/></span><div><b>{x.title}</b><small>{x.desc}</small></div></div>)}</div></section>
  <section id="categories" className="section container"><div className="section-heading"><div><span className="eyebrow">MADE FOR SCHOOL, HOME &amp; EVERYDAY</span><h2>Find what you <em>came for.</em></h2><p>Explore the collections and services at Al-Mustafa.</p></div><Link className="text-link" href="/products">View all products <ArrowRight size={17}/></Link></div>
   <div className="category-grid">{categories.map((c,i)=><motion.div className={`category-card category-${i+1}`} key={c.name} initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.06}}><Image src={c.image} alt={c.name} fill sizes="(max-width: 700px) 100vw, 33vw" className="cover-image" unoptimized/><div className="category-shade"/><div className="category-bottom"><span className="category-icon"><c.icon size={19}/></span><h3>{c.name}</h3><p>{c.desc}</p><Link href={c.href}>Explore collection <ArrowRight size={17}/></Link></div></motion.div>)}</div>
  </section>
  <section className="section featured-section"><div className="container"><div className="section-heading"><div><span className="eyebrow">SHOP THE STORE</span><h2>Popular <em>products.</em></h2><p>Useful picks from Al-Mustafa.</p></div><Link className="text-link" href="/products">Shop all products <ArrowRight size={17}/></Link></div><div className="product-grid">{products.filter((p) => ["p1","p6","p14","p10","p17","p20","p22","p25","p18","p21","p24","p29"].includes(p.id)).map((p,i)=><ProductCard key={p.id} product={p} index={i}/>)}</div></div></section>
  <section className="promo-section container"><div className="promo-panel"><div className="promo-copy"><span className="eyebrow">PHOTOCOPY &amp; PRINT</span><h2>Make your next<br/><em>project look sharp.</em></h2><p>From photocopies and color prints to scanning, lamination and spiral binding, we’re ready to help.</p><Link className="btn btn-white" href="/printing-services">View printing services <ArrowRight size={18}/></Link></div><div className="promo-art"><Image src="https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=1000&q=85" alt="Printer and printing supplies" fill sizes="40vw" className="cover-image" unoptimized/></div></div></section>
 </div>;
}
function MapPinIcon(){return <span aria-hidden="true">⌖</span>}
