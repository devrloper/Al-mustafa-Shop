 "use client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { ArrowLeft, Check, Minus, Plus, ShoppingCart, Star } from "lucide-react";
import { products } from "@/data/products";
import { money } from "@/lib/money";
import { useStore } from "@/components/StoreProvider";
import ProductCard from "@/components/ProductCard";
export default function ProductDetailsPage() {
 const params=useParams<{slug:string}>();
 const product=products.find(p=>p.slug===params.slug);
 const [quantity,setQuantity]=useState(1);
 const [added,setAdded]=useState(false);
 const {addToCart}=useStore();
 if(!product) return <div className="container empty-state"><h2>Product not found</h2><p>This product may have been removed.</p><Link className="btn btn-primary" href="/products">Browse products</Link></div>;
 const related=products.filter(p=>p.category===product.category&&p.id!==product.id).slice(0,4);
 return <div className="container detail-page"><div className="breadcrumbs"><Link href="/">Home</Link> / <Link href="/products">Products</Link> / <b>{product.name}</b></div><Link href="/products" className="back-link"><ArrowLeft size={16}/> Back to products</Link>
 <div className="detail-grid"><div className="detail-image"><Image src={product.image} alt={product.name} fill sizes="(max-width: 760px) 100vw, 50vw" className="cover-image" unoptimized/></div><div className="detail-info"><span className="category-label">{product.category}</span><h1>{product.name}</h1><div className="rating detail-rating"><Star size={16} fill="#F5A623" stroke="#F5A623"/><b>{product.rating}</b><span>({product.reviews} reviews)</span></div><div className="detail-price">{money(product.price)} {product.originalPrice&&<del>{money(product.originalPrice)}</del>}</div><p className="detail-description">{product.description}</p><div className={`stock detail-stock ${!product.stock?"out-stock":""}`}><Check size={15}/>{product.stock?`${product.stock} available in stock`:"Currently out of stock"}</div><div className="quantity-row"><span>Quantity</span><div className="quantity-control"><button onClick={()=>setQuantity(q=>Math.max(1,q-1))} aria-label="Decrease quantity"><Minus size={15}/></button><b>{quantity}</b><button onClick={()=>setQuantity(q=>Math.min(product.stock,q+1))} disabled={quantity>=product.stock} aria-label="Increase quantity"><Plus size={15}/></button></div></div><button className="btn btn-primary detail-add" disabled={!product.stock} onClick={()=>{addToCart(product,quantity);setAdded(true)}}><ShoppingCart size={18}/>{added?"Added to cart":"Add to cart"}</button>{added&&<p className="success-note" role="status">Added to your cart. <Link href="/cart">View cart</Link></p>}<div className="delivery-note"><Truck size={19}/><div><b>Delivery information</b><p>Shipping options and charges can be confirmed at checkout.</p></div></div></div></div>
 {related.length>0&&<section className="section related-section"><div className="section-heading"><div><span className="eyebrow">MORE TO LOVE</span><h2>Related <em>finds.</em></h2></div></div><div className="product-grid">{related.map((p,i)=><ProductCard key={p.id} product={p} index={i}/>)}</div></section>}</div>;
}