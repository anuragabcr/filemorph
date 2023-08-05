"use client";
import { useState } from "react";

import SelectImage from "@/components/SelectImage";
import { Button } from "@/components/ui/button";

const ImgResizePage = () => {
  const [selectedImageData, setSelectedImageData] = useState<string | null>(
    null
  );

  const handleImageSelect = (imageData: string | null) => {
    setSelectedImageData(imageData);
  };

  const handleSubmit = async () => {
    console.log(selectedImageData);
  };

  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Resize Your Image
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Change the Dimension or Size of the Image
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4 text-center">
        <SelectImage onImageSelect={handleImageSelect} />
        <Button variant="premium" onClick={handleSubmit}>
          Resize Image
        </Button>
      </div>
    </div>
  );
};

export default ImgResizePage;
