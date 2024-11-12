import { getItems } from "@/lib/items/get-Items";
import { Loader } from "lucide-react";
import useSWR from "swr";
import { Item } from "./Item";
import { useCategoryStore } from "@/lib/store/use-category-store";

const ItemsList = () => {
  const category = useCategoryStore((c) => c.category);
  const { data, isLoading } = useSWR(`/items/${category}`, async () => {
    return getItems(category);
  });

  if (isLoading) {
    return <Loader className="animate-spin" />;
  }

  return (
    <div className="grid grid-cols-2 gap-3">
      {data?.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ItemsList;
