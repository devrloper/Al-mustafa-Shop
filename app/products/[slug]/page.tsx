import { products } from "@/data/products";
import ProductDetailsClient from "@/components/ProductDetailsClient";

export function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ProductDetailsClient slug={slug} />;
}
