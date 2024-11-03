import { nanoid } from "nanoid";

const getId = (name) => {
  const sanitized = name
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .slice(0, 10);

  return `${sanitized}-${nanoid(4)}`;
};

export default getId;
