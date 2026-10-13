 "use client";
import Link from "next/link";
import { Heart } from "lucide-react";
import { products } from "@/data/products";
import { useStore } from "@/components/StoreProvider";
import ProductCard from "@/components/ProductCard";
export default function WishlistPage(){const {wishlist}=useStore();const saved=products.filter(p=>wishlist.includes(p.id));return <div className="container listing-page"><div className="breadcrumbs">Home / <b>Wishlist</b></div><div className="listing-heading"><div><span className="eyebrow">SAVED FOR LATER</span><h1>Your <em>wishlist.</em></h1><p>All the things you've had your eye on.</p></div></div>{saved.length?<div className="product-grid">{saved.map((p,i)=><ProductCard key={p.id} product={p} index={i}/>)}</div>:<div className="empty-state"><Heart size={42}/><h2>Your wishlist is waiting.</h2><p>Tap the heart on any product to save it here.</p><Link className="btn btn-primary" href="/products">Explore products</Link></div>}</div>}