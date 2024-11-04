"use client";
import { useUserStore } from "@/lib/store/use-User-Store";
import Image from "next/image";
import LoginPage from "./login/page";
import { Button } from "@/components/ui/button";
import ItemIdPage from "./items/[itemId]/page";

export default function Home() {
  const userName = useUserStore((s) => s.userName);
  if (!userName) return <LoginPage />;
  return (
    <div classname="flex flex-col m-auto items-end">
      {userName !== "admin" ? (
        <p>Hello health donalds</p>
      ) : (
        <ItemIdPage></ItemIdPage>
      )}
    </div>
  );
}
