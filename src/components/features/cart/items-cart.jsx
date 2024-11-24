import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/format-price";
import { useCartPrice, useCartStore } from "@/lib/store/use-cart-store";
import { cn } from "@/lib/utils";
import { Minus } from "lucide-react";
import { Trash } from "lucide-react";

export const ItemsCart = ({ className }) => {
  const items = useCartStore((s) => s.items);
  const price = useCartPrice();
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <h2 className="text-lg font-bold">Cart</h2>
        <p className="ml-auto font-mono">{formatPrice(price)}</p>
      </div>
      <div
        className={cn("flex flex-col gap-2 py-2 overflow-y-auto", className)}
      >
        {Object.values(items).map((cartItem) => (
          <CartLineItem
            quantity={cartItem.quantity}
            item={cartItem.item}
            key={cartItem.item.id}
          />
        ))}
      </div>
    </div>
  );
};

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
