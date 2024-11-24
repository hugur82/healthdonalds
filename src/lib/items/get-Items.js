import { collection, getDocs, query, where, query, where } from "firebase/firestore";
import { db } from "../firebase";

export const getItems = async (category) => {
  let request = collection(db, "items");

  if (category) {
    request = query(request, where("category", "==", category));
  }

  const itemsResult = await getDocs(request);
export const getItems = async (category) => {
  let request = collection(db, "items");

  if (category) {
    request = query(request, where("category", "==", category));
  }

  const itemsResult = await getDocs(request);

  const items = [];

  itemsResult.forEach((i) => {
    const item = {
    const item = {
      id: i.id,
      ...i.data(),
    };

    items.push(item);
    console.log("items = ", items);
  });

  return items;
};
