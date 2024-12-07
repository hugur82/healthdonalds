"use client";
<<<<<<< HEAD
import { Button } from "@/components/ui/button";
=======
import { Button, buttonVariants } from "@/components/ui/button";
>>>>>>> 11791a97a4d1c3fe7908193a9cb27e1a8c3786d0
import { formatPrice } from "@/lib/format-price";
import { useCartPrice, useCartStore } from "@/lib/store/use-cart-store";
import { ChevronUp } from "lucide-react";
import { Minus } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { Trash } from "lucide-react";
import { useState } from "react";
<<<<<<< HEAD
=======
import { ItemsCart } from "../cart/items-cart";
import Link from "next/link";
>>>>>>> 11791a97a4d1c3fe7908193a9cb27e1a8c3786d0

export const FooterCart = () => {
  const [open, setOpen] = useState(false);

<<<<<<< HEAD
  const cart = useCartStore();
=======
>>>>>>> 11791a97a4d1c3fe7908193a9cb27e1a8c3786d0
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
<<<<<<< HEAD
      {open ? (
        <>
          <div className="flex items-center gap-4">
            <h2 className="text-lg font-bold">Cart</h2>
            <p className="ml-auto font-mono">{formatPrice(price)}</p>
          </div>
          <div className="flex flex-col gap-2 max-h-32 py-2 overflow-y-auto">
            {Object.values(cart.items).map((cartItem) => (
              <CartLineItem
                quantity={cartItem.quantity}
                item={cartItem.item}
                key={cartItem.item.id}
              />
            ))}
          </div>
        </>
      ) : null}
      <div className="flex items-center gap-2">
        <Button className="w-full" size="sm">
          Checkout
        </Button>
=======
      {open ? <ItemsCart className="max-h-32" /> : null}
      <div className="flex items-center gap-2">
        <Link href="/checkout" className={buttonVariants({ size: "sm" })}>
          Checkout
        </Link>
>>>>>>> 11791a97a4d1c3fe7908193a9cb27e1a8c3786d0
        {!open ? (
          <p className="ml-auto font-mono">{formatPrice(price)}</p>
        ) : null}
      </div>
    </div>
  );
};
<<<<<<< HEAD

const CartLineItem = ({ item, quantity }) => {
  const remove = useCartStore((s) => s.removeItem);
  return (
    <div className="flex items-center gap-4">
      <div className="size-14 rounded-md border bg-accent/50 p-1 relative">
        <img src={item.image} alt={`${item.name}'s image`} />
        <span className="absolute -right-2 -top-2 text-sm size-5 bg-accent border flex items-center justify-center rounded-md">
          {quantity}
        </span>
      </div>
      <p className="font-bold">{item.name}</p>
      <p className="ml-auto text-sm font-mono">
        {formatPrice(item.price * quantity)}
      </p>
      <Button size="sm" variant="outline" onClick={() => remove(item)}>
        {quantity === 1 ? <Trash size={12} /> : <Minus size={12} />}
      </Button>
    </div>
  );
};
=======
>>>>>>> 11791a97a4d1c3fe7908193a9cb27e1a8c3786d0
