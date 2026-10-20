 "use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { useStore } from "@/components/StoreProvider";
import { money } from "@/lib/money";
export default function ConfirmationPage(){
 const [order,setOrder]=useState<any>(null);const {cart,removeFromCart}=useStore();
 useEffect(()=>{try{const value=sessionStorage.getItem("al-mustafa-last-order");if(value){const parsed=JSON.parse(value);setOrder(parsed);parsed.items.forEach((i:{id:string})=>removeFromCart(i.id));}}catch{}},[removeFromCart]);
 return <div className="container confirmation-page"><div className="confirmation-card"><span className="confirmation-icon"><CheckCircle2 size={42}/></span><span className="eyebrow">DEMO ORDER CREATED</span><h1>Thank you for <em>shopping with us.</em></h1><p>Your demo order has been prepared successfully. It has not been sent to a real store and no payment has been taken.</p>{order&&<div className="confirmation-details"><div><span>Demo reference</span><b>{order.id}</b></div><div><span>Customer</span><b>{order.customer.name}</b></div><div><span>Delivery city</span><b>{order.customer.city}</b></div><div><span>Demo total</span><b>{money(order.total)}</b></div></div>}<Link className="btn btn-primary" href="/products">Continue shopping</Link></div></div>;
}