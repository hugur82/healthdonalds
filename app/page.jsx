"use client";
import { useUserStore } from "@/lib/store/use-User-Store";
import Image from "next/image";
import LoginPage from "./login/page";
import { Button } from "@/components/ui/button";

export default function Home() {
  const userName = useUserStore((s) => s.userName);
  if (!userName) return <LoginPage />;
  return (
    <div className="flex flex-col">
      <p className="self-center">hello health donalds</p>
      <Button size="md" className="gap-2 p-2 self-end">
        Add
      </Button>
    </div>
  );
}
