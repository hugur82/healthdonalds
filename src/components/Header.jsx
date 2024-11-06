"use client";

import { ShoppingBasket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { useUserStore } from "@/lib/store/use-User-Store";
import { User } from "lucide-react";
import { useCartQuantity, useCartStore } from "@/lib/store/use-cart-store";

const Header = () => {
  return (
    <header className="flex items-center gap-2 px-4 py-4 border-b shadow-md">
      <Link href="/" className="inline-flex items-center gap-2">
        <Image
          src="/healthdonals.png"
          alt="healthdonals"
          width={32}
          height={32}
        />
        <p className="text-sm font-bold">Healthdonals</p>
      </Link>
      <div className="ml-auto"></div>
      <UserNameHeader />
      <ShoppingCart />
    </header>
  );
};

export default Header;

const ShoppingCart = () => {
  const quantity = useCartQuantity();

  return (
    <Button
      size="sm"
      variant="outline"
      className="inline-flex gap-2 items-center"
    >
      {quantity}
      <ShoppingBasket size={12} />
    </Button>
  );
};

const UserNameHeader = () => {
  const userName = useUserStore((s) => s.userName);
  const logout = useUserStore((s) => s.logout);

  if (!userName) return null;

  return (
    <button onClick={logout} className="flex items-center gap-2">
      <User size={12} />
      <p className="text-sm">{userName}</p>
    </button>
  );
};
