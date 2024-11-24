"use client";
import { useUserStore } from "@/lib/store/use-User-Store";
import LoginPage from "./login/page";
import ItemIdPage from "./items/[itemId]/page";
<<<<<<< HEAD
import ItemsList from "@/components/features/items/Items-List";
=======
import ItemsList from "@/components/features/items/ItemsList";
>>>>>>> 11791a97a4d1c3fe7908193a9cb27e1a8c3786d0
import { FooterCart } from "@/components/features/footer-cart/footer-cart";
import { CategoryList } from "@/components/features/categories/category-list";

export default function Home() {
  const userName = useUserStore((s) => s.userName);

  if (!userName) return <LoginPage />;

  return (
<<<<<<< HEAD
    <div className="flex flex-col max-h-full">
      <div className="flex flex-1 gap-4 overflow-hidden">
        <CategoryList />
        {userName !== "admin" ? <ItemsList /> : <ItemIdPage></ItemIdPage>}
=======
    <div className="flex flex-col  max-h-full">
      <div className="flex flex-1 gap-4 overflow-hidden">
        <CategoryList />
        <ItemsList />
>>>>>>> 11791a97a4d1c3fe7908193a9cb27e1a8c3786d0
      </div>
      <FooterCart />
    </div>
  );
}
