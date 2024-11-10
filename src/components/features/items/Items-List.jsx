import { getItems } from "@/lib/items/get-Items";
import { Loader } from "lucide-react";
import useSWR from "swr";
import { Item } from "./Item";
import { useCategoryStore } from "@/lib/store/use-category-store";

const ItemsList = () => {
  const category = useCategoryStore((c) => c.category);
  console.log("category=", category);
  const { data, isLoading } = useSWR(`/items/${category}`, async () => {
    return getItems(category);
  });

  if (isLoading) {
    return <Loader className="animate-spin" />;
  }

  return (
    <div className="grid max-h-full gap-4 overflow-x-auto pb-16 grid-cols-2">
      {data?.map((d) => (
        <Item item={d} key={d.id} />
      ))}
    </div>
  );
};

export default ItemsList;
