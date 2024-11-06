"use client";
import { useUserStore } from "@/lib/store/use-User-Store";
import LoginPage from "./login/page";
import ItemIdPage from "./items/[itemId]/page";
import ItemsList from "@/components/features/items/ItemsList";

export default function Home() {
  const userName = useUserStore((s) => s.userName);
  if (!userName) return <LoginPage />;
  return (
    <div className="flex flex-col m-auto ">
      {userName !== "admin" ? <ItemsList /> : <ItemIdPage></ItemIdPage>}
    </div>
  );
}
