import { doc, setDoc } from "firebase/firestore";
import { db, storage } from "../firebase";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const setItem = async (id, item) => {
  if (item.image instanceof File) {
    const path = `images/${item.image.name}`;
    const storageRef = ref(storage, path);
    try {
      await uploadBytes(storageRef, item.image);
      const downloadUrl = await getDownloadURL(storageRef);
      item.image = downloadUrl;
      item.imagePath = path;
    } catch {
      console.error(e);
    }
  }

  const docRef = doc(db, "items", id);
  await setDoc(docRef, item);
};

export default setItem;
