import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/format-price";
import { useCartStore } from "@/lib/store/use-cart-store";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { Minus } from "lucide-react";

export const Item = ({ item, className }) => {
  return (
    <div
      className={cn(
        "relative rounded-md border p-3 shadow-inner h-fit",
        className
      )}
    >
      <p className="absolute right-2 top-2 font-mono">
        {formatPrice(item.price)}
      </p>
      <img
        src={item.image}
        className="aspect-square w-full rounded-md object-contain"
      />
      <p>{item.name}</p>
      <div className="flex items-end justify-end">
        <CartButton item={item} />
      </div>
    </div>
  );
};

const CartButton = ({ item }) => {
  const quantity = useCartStore((s) => s.items[item.id]?.quantity ?? 0);
  const add = useCartStore((s) => s.addItem);
  const remove = useCartStore((s) => s.removeItem);

  if (quantity === 0) {
    return (
      <Button onClick={() => add(item)} size="sm">
        Add
      </Button>
    );
  }
  return (
    <div className="flex items-center gap-1">
      <Button onClick={() => remove(item)} variant="outline" size="sm">
        <Minus size={12} />
      </Button>
      <p>{quantity}</p>
      <Button onClick={() => add(item)} variant="outline" size="sm">
        <Plus size={12} />
      </Button>
    </div>
  );
};
