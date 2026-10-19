import Link from "next/link";
import { BookOpen, Gift } from "lucide-react";
export default function Logo() {
  return <Link href="/" className="brand-logo" aria-label="Al-Mustafa Stationery and Gift Hub home">
    <span className="logo-mark"><BookOpen size={27} strokeWidth={2}/><Gift className="logo-gift" size={15}/></span>
    <span className="logo-type"><strong>Al-Mustafa</strong><small>STATIONERY &amp; GIFT HUB</small><small className="logo-service">PHOTOCOPY &amp; PRINT</small></span>
  </Link>;
}
