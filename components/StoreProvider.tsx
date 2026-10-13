 "use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { Product } from "@/types";

type CartLine = { product: Product; quantity: number };
type StoreContextValue = {
  cart: CartLine[]; wishlist: string[]; addToCart: (p: Product, quantity?: number) => void;
  updateQuantity: (id: string, quantity: number) => void; removeFromCart: (id: string) => void;
  toggleWishlist: (id: string) => void; cartCount: number;
};
const StoreContext = createContext<StoreContextValue | null>(null);
export function StoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    try {
      const c = localStorage.getItem("al-mustafa-cart");
      const w = localStorage.getItem("al-mustafa-wishlist");
      if (c) setCart(JSON.parse(c));
      if (w) setWishlist(JSON.parse(w));
    } catch { /* Ignore invalid local browser data. */ }
    setReady(true);
  }, []);
  useEffect(() => { if (ready) localStorage.setItem("al-mustafa-cart", JSON.stringify(cart)); }, [cart, ready]);
  useEffect(() => { if (ready) localStorage.setItem("al-mustafa-wishlist", JSON.stringify(wishlist)); }, [wishlist, ready]);
  const value = useMemo<StoreContextValue>(() => ({
    cart, wishlist,
    addToCart: (product, quantity = 1) => setCart(old => {
      const existing = old.find(x => x.product.id === product.id);
      if (existing) return old.map(x => x.product.id === product.id ? { ...x, quantity: Math.min(product.stock, x.quantity + quantity) } : x);
      return [...old, { product, quantity: Math.min(product.stock, quantity) }];
    }),
    updateQuantity: (id, quantity) => setCart(old => old.map(x => x.product.id === id ? { ...x, quantity: Math.max(1, Math.min(x.product.stock, quantity)) } : x)),
    removeFromCart: id => setCart(old => old.filter(x => x.product.id !== id)),
    toggleWishlist: id => setWishlist(old => old.includes(id) ? old.filter(x => x !== id) : [...old, id]),
    cartCount: cart.reduce((sum, line) => sum + line.quantity, 0)
  }), [cart, wishlist]);
  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}
export function useStore() {
  const context = useContext(StoreContext);
  if (!context) throw new Error("useStore must be used inside StoreProvider");
  return context;
}