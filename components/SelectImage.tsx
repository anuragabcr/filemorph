"use client";
import React, { useState, useRef, ChangeEvent, DragEvent } from "react";
import Image from "next/image";

interface SelectImageProps {
  onImageSelect: (imageData: string | null) => void;
}

const SelectImage = ({ onImageSelect }: SelectImageProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        onImageSelect(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        onImageSelect(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div>
      <div
        style={{
          border: "2px dashed #ccc",
          padding: "20px",
          textAlign: "center",
          cursor: "pointer",
        }}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={() => fileInputRef?.current?.click()}
      >
        {selectedImage ? (
          <Image
            src={selectedImage}
            alt="Preview"
            style={{ maxWidth: "300px", maxHeight: "300px" }}
            width={250}
            height={250}
          />
        ) : (
          <p>Drag &amp; drop an image here or click to select an image.</p>
        )}
      </div>
      <input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleImageChange}
        ref={fileInputRef}
      />
    </div>
  );
};

export default SelectImage;
