import { ShoppingBasket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="flex items-center gap-2 px-4 py-4 border-t">
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
      <p className="text-xs">&copy; 2024 HealthDonals. All rights reserved</p>
    </footer>
  );
};

export default Footer;
