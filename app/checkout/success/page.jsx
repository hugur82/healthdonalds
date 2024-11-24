import { useCartStore } from "@/lib/store/use-cart-store";
import { Check } from "lucide-react";
import React from "react";

const Home = () => {
  useCartStore.setState({ items: {} });
  return (
    <div className="flex flex-col gap-4 items-center justify-center px-4">
      <Check size={32} className="text-primary" />
      <p className="text-2xl font-bold">Yeah! your order is confirmed</p>
    </div>
  );
};

export default Home;
