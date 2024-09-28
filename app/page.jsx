"use client";
import { useUserStore } from "@/lib/store/use-User-Store";
import Image from "next/image";
import LoginPage from "./login/page";

export default function Home() {
  const userName = useUserStore((s) => s.userName);
  if (!userName) return <LoginPage />;
  return <div>hello health donalds</div>;
}
