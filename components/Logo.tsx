import Link from "next/link";
import { ShoppingBag } from "lucide-react";
export default function Logo() {
  return <Link href="/" className="brand-logo" aria-label="AL Mustafa Shop home">
    <span className="logo-mark"><ShoppingBag size={26} strokeWidth={2.2}/><b>AL</b></span>
    <span className="logo-type"><strong>AL MUSTAFA</strong><small>SHOP</small></span>
  </Link>;
}