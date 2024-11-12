"use client";
import { useUserStore } from "@/lib/store/use-User-Store";

import { ItemsCart } from "@/components/features/cart/items-cart";
import LoginPage from "../login/page";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  const userName = useUserStore((s) => s.userName);

  if (!userName) return <LoginPage />;

  return (
    <div className="flex flex-col gap-8 max-h-full">
      <ItemsCart />
      <Link href="/checkout/succes" className={buttonVariants({ size: "sm" })}>
        Complete Checkout
      </Link>
    </div>
  );
}
