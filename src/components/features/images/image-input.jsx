import { Input } from "@/components/ui/input";
import React from "react";
import { useState } from "react";

const ImageInput = ({ image, onChange }) => {
  const [previewImage, setPreviewImage] = useState(image);

  const onInputChange = (e) => {
    const image = e.target.files[0];
    setPreviewImage(URL.createObjectURL(image));

    onChange(image);
  };
  return (
    <div className="flex items-center gap-2">
      <Input type="file" onChange={onInputChange} />
      {previewImage ? (
        <img
          src={previewImage}
          className="aspect-square w-12 bg-accent rounded-md"
        />
      ) : null}
    </div>
  );
};

export default ImageInput;
