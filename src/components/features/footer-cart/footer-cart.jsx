"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { formatPrice } from "@/lib/format-price";
import { useCartPrice, useCartStore } from "@/lib/store/use-cart-store";
import { ChevronUp } from "lucide-react";
import { Minus } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { Trash } from "lucide-react";
import { useState } from "react";
import { ItemsCart } from "../cart/items-cart";
import Link from "next/link";

export const FooterCart = () => {
  const [open, setOpen] = useState(false);

  const price = useCartPrice();

  return (
    <div className="rounded-t-lg flex flex-col gap-4 p-4 pt-8 border-t border-x inset-x-0 max-w-md m-auto bg-card fixed bottom-0 left-0 right-0">
      <Button
        className="absolute top-0 inset-x-4 hover:bg-transparent"
        variant="ghost"
        size="sm"
        onClick={() => setOpen((s) => !s)}
      >
        {" "}
        {open ? <ChevronDown size={12} /> : <ChevronUp size={12} />}
      </Button>
      {open ? <ItemsCart className="max-h-32" /> : null}
      <div className="flex items-center gap-2">
        <Link href="/checkout" className={buttonVariants({ size: "sm" })}>
          Checkout
        </Link>
        {!open ? (
          <p className="ml-auto font-mono">{formatPrice(price)}</p>
        ) : null}
      </div>
    </div>
  );
};
