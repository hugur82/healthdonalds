import { CATEGORIES } from "@/lib/category-data";
import { useCategoryStore } from "@/lib/store/use-category-store";
import { cn } from "@/lib/utils";
<<<<<<< HEAD
=======
import { X } from "lucide-react";
>>>>>>> 11791a97a4d1c3fe7908193a9cb27e1a8c3786d0
import Image from "next/image";

export const CategoryList = () => {
  const { category, setCategory } = useCategoryStore();
<<<<<<< HEAD
  console.log(category);
=======
>>>>>>> 11791a97a4d1c3fe7908193a9cb27e1a8c3786d0

  return (
    <div className="flex flex-col gap-2">
      {CATEGORIES.map((c) => (
        <button
          onClick={() => {
            setCategory(c.id);
          }}
          className={cn(
            "relative rounded-md border p-2 flex flex-col items-center",
            {
              "bg-accent/50": category === c.id,
            }
          )}
          id={c.id}
<<<<<<< HEAD
          key={c.key}
=======
          key={c.id}
>>>>>>> 11791a97a4d1c3fe7908193a9cb27e1a8c3786d0
        >
          <Image src={c.logo} width={32} height={32} />
          <p className="text-xs">{c.title}</p>
        </button>
      ))}
<<<<<<< HEAD
=======
      {category !== null && (
        <button
          onClick={() => {
            setCategory(null);
          }}
          className={cn(
            "relative rounded-md border p-2 flex flex-col items-center"
          )}
        >
          <X color="#c71f1f" width={32} height={52} />
        </button>
      )}
>>>>>>> 11791a97a4d1c3fe7908193a9cb27e1a8c3786d0
    </div>
  );
};
