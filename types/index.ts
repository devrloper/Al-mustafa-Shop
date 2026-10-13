export type Category = "Mobile Accessories" | "Gifts" | "Stationery";
export type Product = {
  id: string; slug: string; name: string; category: Category; price: number;
  originalPrice?: number; rating: number; reviews: number; stock: number;
  isNew?: boolean; bestseller?: boolean; description: string; image: string;
  colors?: string[];
};