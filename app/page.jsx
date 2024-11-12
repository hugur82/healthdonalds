"use client";
import { useUserStore } from "@/lib/store/use-User-Store";
import LoginPage from "./login/page";
import ItemIdPage from "./items/[itemId]/page";
import ItemsList from "@/components/features/items/ItemsList";
import { FooterCart } from "@/components/features/footer-cart/footer-cart";
import { CategoryList } from "@/components/features/categories/category-list";

export default function Home() {
  const userName = useUserStore((s) => s.userName);

  if (!userName) return <LoginPage />;

  return (
    <div className="flex flex-col  max-h-full">
      <div className="flex flex-1 gap-4 overflow-hidden">
        <CategoryList />
        {userName !== "admin" ? <ItemsList /> : <ItemIdPage></ItemIdPage>}
      </div>
      <FooterCart />
    </div>
  );
}
