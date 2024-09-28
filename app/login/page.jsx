"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useUserStore } from "@/lib/store/use-User-Store";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const userStore = useUserStore();
  const router = useRouter();
  return (
    <div className="relative flex h-full flex-col items-center justify-center gap-4 py-4">
      <div className="absolute left-4 top-4 rotate-12">
        <Image
          src="/categories/burger.png"
          alt="Burger"
          width={50}
          height={50}
        />
      </div>
      <div className="absolute right-4 top-4 -rotate-12">
        <Image
          src="/categories/dessert.png"
          alt="Burger"
          width={50}
          height={50}
        />
      </div>
      <div className="absolute left-4 bottom-4 rotate-2">
        <Image
          src="/categories/fries.png"
          alt="Burger"
          width={50}
          height={50}
        />
      </div>
      <div className="absolute right-4 bottom-4 -rotate-12">
        <Image
          src="/categories/nuggets.png"
          alt="Burger"
          width={50}
          height={50}
        />
      </div>
      <h1 className="text-2xl font-bold">Welcome to healthdonals</h1>
      <p>Login first to acces to application</p>
      <form
        className="flex items-center gap-2"
        action={(formData) => {
          const userName = formData.get("userName");
          userStore.login(userName);
          router.push("/");
        }}
      >
        <Input type="text" name="userName" placeHolder="Username" />
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
}
