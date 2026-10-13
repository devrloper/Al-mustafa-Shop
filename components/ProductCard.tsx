 "use client";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart, Star, Check } from "lucide-react";
import { motion } from "framer-motion";
import type { Product } from "@/types";
import { money } from "@/lib/money";
import { useStore } from "./StoreProvider";
export default function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const { addToCart, wishlist, toggleWishlist } = useStore();
  const wished = wishlist.includes(product.id);
  return <motion.article className="product-card" initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.12}} transition={{duration:.35,delay:(index%4)*.05}} whileHover={{y:-4}}>
    <div className="product-image-wrap">
      <Link href={`/products/${product.slug}`} className="product-image-link"><Image src={product.image} alt={product.name} fill sizes="(max-width: 640px) 48vw, (max-width: 1024px) 30vw, 22vw" className="product-image" unoptimized/></Link>
      {product.originalPrice && <span className="sale-badge">SALE</span>}{product.isNew && <span className="new-badge">NEW</span>}
      <button className={`wishlist-btn ${wished ? "wished" : ""}`} onClick={()=>toggleWishlist(product.id)} aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}><Heart size={18} fill={wished ? "currentColor" : "none"}/></button>
    </div>
    <div className="product-info"><span className="category-label">{product.category}</span><Link href={`/products/${product.slug}`} className="product-name">{product.name}</Link>
      <div className="rating"><Star size={14} fill="#F5A623" stroke="#F5A623"/><b>{product.rating}</b><span>({product.reviews})</span></div>
      <div className="price-row"><strong>{money(product.price)}</strong>{product.originalPrice && <del>{money(product.originalPrice)}</del>}</div>
      <div className={`stock ${product.stock ? "" : "out-stock"}`}><Check size={13}/>{product.stock ? "In stock" : "Out of stock"}</div>
      <button className="add-cart-btn" disabled={!product.stock} onClick={()=>addToCart(product)}><ShoppingCart size={16}/>{product.stock ? "Add to cart" : "Unavailable"}</button>
    </div>
  </motion.article>;
}