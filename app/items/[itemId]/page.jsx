"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CATEGORIES } from "@/lib/category-data";
import Image from "next/image";
import ImageInput from "@/components/features/images/image-input";
import getId from "@/lib/get-id";
import setItem from "@/lib/items/set-item";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/lib/store/use-User-Store";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { X } from "lucide-react";
import useSWR, { mutate } from "swr";
import { getItem } from "@/lib/items/get-item";
import { Loader } from "lucide-react";

const formSchema = z.object({
  id: z.string().min(2).max(50),
  name: z.string().min(2).max(50),
  category: z.string().min(2).max(50),
  price: z.coerce.number().min(0).max(1000),
  image: z.any(),
});

export default function ItemIdPage({ params }) {
  const isAdmin = useUserStore((s) => s.isAdmin);

  const { data, isLoading } = useSWR(`/item/${params.itemId}`, async () => {
    if (params.itemId === "new") return null;

    return getItem(params.itemId);
  });

  console.log({ data, isLoading, params });
  if (!isAdmin) {
    return (
      <Alert>
        <X size={12}></X>
        <AlertTitle>You can't creat item</AlertTitle>
      </Alert>
    );
  }

  if (isLoading) {
    return <Loader className="animate-spin" />;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Create item</h1>
      <ItemForm defaultItem={data} />
    </div>
  );
}

const ItemForm = ({ defaultItem }) => {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: defaultItem
      ? {
          ...defaultItem,
          price: defaultItem.price / 100,
        }
      : null,
  });

  async function onSubmit(values) {
    const id = defaultItem ? defaultItem.id : getId(values.name);

    await setItem(id, {
      name: values.name,
      price: values.price * 100,
      category: values.category,
      image: values.image,
    });
    mutate((key) => typeof key === "string" && key.startsWith("/item"));
    router.push("/");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {CATEGORIES.map((c) => (
                    <SelectItem key={c.id} value={c.title}>
                      <div className="flex items-center gap-2">
                        <Image src={c.logo} width={32} height={32} />
                        <p>{c.title} </p>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>price</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} type="number" />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image</FormLabel>
              <FormControl>
                <ImageInput image={field.value} onChange={field.onChange} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          disabled={form.formState.isSubmitting}
          type="submit"
          className="w-full"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};
