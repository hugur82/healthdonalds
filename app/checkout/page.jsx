"use client";
import { useUserStore } from "@/lib/store/use-User-Store";

import { ItemsCart } from "@/components/features/cart/items-cart";
import LoginPage from "../login/page";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { useCartStore } from "@/lib/store/use-cart-store";
import { getItems } from "@/lib/items/get-Items";
import { Item } from "@/components/features/items/Item";
import useSWR from "swr";
import { Loader } from "lucide-react";

export default function Home() {
  const userName = useUserStore((s) => s.userName);

  if (!userName) return <LoginPage />;

  return (
    <div className="flex flex-col gap-8 max-h-full">
      <ItemsCart />
      <UpSellDessert />
      <Link href="/checkout/success" className={buttonVariants({ size: "sm" })}>
        Complete Checkout
      </Link>
    </div>
  );
}

const UpSellDessert = () => {
  const isDessert = useCartStore(
    (s) =>
      Object.values(s.items).filter((i) => i.item.category === "dessert")
        .length > 0
  );
  if (isDessert) {
    return null;
  }

  return (
    <div className="flex flex-col gap-4">
      <p className="text-lg font-bold">Would u like to try our dessert?</p>
      <DessertList />
    </div>
  );
};

const DessertList = () => {
  const category = "dessert";
  const { data } = useSWR(`/items/${category}`, async () => {
    return getItems(category);
  });
  if (!data) {
    <Loader className="animate-spin" />;
  }

  return (
    <div className="flex flex-row w-full gap-4 overflow-x-auto">
      {data?.map((cartItem) => (
        <Item
          className="h-fit w-32 shrink-0 grow"
          key={cartItem.id}
          item={cartItem}
        />
      ))}
    </div>
  );
};
