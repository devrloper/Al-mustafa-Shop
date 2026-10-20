import OrderConfirmationClient from "@/components/OrderConfirmationClient";

export function generateStaticParams() {
  return [{ id: "latest" }];
}

export default function OrderConfirmationPage() {
  return <OrderConfirmationClient />;
}
