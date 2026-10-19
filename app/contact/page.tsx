import Link from "next/link";
import { ArrowRight, MapPin, MessageCircle, Phone } from "lucide-react";
export const metadata={title:"Contact Al-Mustafa"};
const contacts=[
 {icon:Phone,title:"Call the shop",detail:"0335-7476789",href:"tel:+923357476789",action:"Call now"},
 {icon:MessageCircle,title:"WhatsApp",detail:"Chat with Al-Mustafa",href:"https://wa.me/923357476789",action:"Start a chat"},
 {icon:MapPin,title:"Visit us",detail:"Shahareed Park, opposite Tanveer Sabzi Shop",href:"https://www.google.com/maps/search/?api=1&query=Shahareed+Park+opposite+Tanveer+Sabzi+Shop",action:"Open map"}
];
export default function ContactPage(){return <div className="contact-store-page"><div className="container"><div className="breadcrumbs"><Link href="/">Home</Link> / <b>Contact</b></div><section className="contact-store-intro"><span className="eyebrow">AL-MUSTAFA STATIONERY &amp; GIFT HUB</span><h1>We’re here to <em>help.</em></h1><p>Need to check a product, ask about a printing job or get directions? Call or message us, or visit the shop in Shahareed Park.</p></section><section className="contact-store-grid">{contacts.map(({icon:Icon,title,detail,href,action})=><a className="contact-store-card" key={title} href={href}><span className="contact-store-icon"><Icon size={23}/></span><h2>{title}</h2><p>{detail}</p><b>{action} <ArrowRight size={16}/></b></a>)}</section><section className="contact-store-note"><div><span className="eyebrow">PRINTING &amp; DOCUMENT SERVICES</span><h2>Photocopy, print, scan, laminate and bind.</h2><p>See our service information or message us about the job you need.</p></div><Link className="btn btn-primary" href="/printing-services">Printing services <ArrowRight size={17}/></Link></section></div></div>}
