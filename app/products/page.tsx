 "use client";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { SlidersHorizontal, Search, X } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import type { Category } from "@/types";
const categories = ["All categories","Stationery","Gifts","Mobile Accessories","Sports Items","Printing Services"];
export default function ProductsPage() {
 const params=useSearchParams();
 const [query,setQuery]=useState(params.get("q")||"");
 const [category,setCategory]=useState(params.get("category")||"All categories");
 const [sort,setSort]=useState("featured");
 const [inStock,setInStock]=useState(false);
 const [discount,setDiscount]=useState(false);
 const [limit,setLimit]=useState(12);
 const filtered=useMemo(()=>products.filter(p=>(p.name.toLowerCase().includes(query.toLowerCase())||p.category.toLowerCase().includes(query.toLowerCase()))&&(category==="All categories"||p.category===category)&&(!inStock||p.stock>0)&&(!discount||!!p.originalPrice)).sort((a,b)=>sort==="rating"?b.rating-a.rating:sort==="newest"?Number(!!b.isNew)-Number(!!a.isNew):Number(!!b.bestseller)-Number(!!a.bestseller)),[query,category,sort,inStock,discount]);
 function clear(){setQuery("");setCategory("All categories");setInStock(false);setDiscount(false);setSort("featured");}
 return <div className="container listing-page"><div className="breadcrumbs">Home / <b>Products</b></div><div className="listing-heading"><div><span className="eyebrow">THE WHOLE COLLECTION</span><h1>Shop all <em>products.</em></h1><p>Find something useful, thoughtful, or just right for you.</p></div><span className="result-count">{filtered.length} products</span></div>
 <div className="listing-tools"><label className="listing-search"><Search size={18}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search products..."/></label><label className="sort-select">Sort by <select value={sort} onChange={e=>setSort(e.target.value)}><option value="featured">Featured</option><option value="newest">Newest</option><option value="rating">Top rated</option></select></label></div>
 <div className="listing-layout"><aside className="filters"><div className="filter-title"><SlidersHorizontal size={18}/> Filters <button onClick={clear}>Clear all</button></div><h3>Categories</h3>{categories.map(c=><label className="filter-radio" key={c}><input type="radio" name="category" checked={category===c} onChange={()=>setCategory(c)}/>{c}</label>)}<div className="filter-divider"/><h3>Special filters</h3><label className="filter-check"><input type="checkbox" checked={inStock} onChange={e=>setInStock(e.target.checked)}/> In stock only</label><label className="filter-check"><input type="checkbox" checked={discount} onChange={e=>setDiscount(e.target.checked)}/> On sale</label></aside>
 <div className="listing-results">{(query||category!=="All categories"||inStock||discount)&&<div className="active-filters"><span>Active filters</span>{query&&<button onClick={()=>setQuery("")}>{query} <X size={13}/></button>}{category!=="All categories"&&<button onClick={()=>setCategory("All categories")}>{category} <X size={13}/></button>}{(inStock||discount)&&<button onClick={()=>{setInStock(false);setDiscount(false)}}>Special filters <X size={13}/></button>}</div>}
 {filtered.length ? <><div className="product-grid listing-grid">{filtered.slice(0,limit).map((p,i)=><ProductCard key={p.id} product={p} index={i}/>)}</div>{limit<filtered.length&&<button className="load-more" onClick={()=>setLimit(x=>x+12)}>Load more products</button>}</> : <div className="empty-state"><Search size={35}/><h2>No products found</h2><p>Try another search or clear some filters.</p><button className="btn btn-primary" onClick={clear}>Clear filters</button></div>}</div></div></div>;
}
