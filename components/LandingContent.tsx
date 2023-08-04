"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Image Resize",
    avatar: "J",
    title: "Resize",
    description: "Change the image dimension or Increase/Decrease image size",
  },
  {
    name: "Image conversion",
    avatar: "A",
    title: "Designer",
    description: "Change the image format from one to anther",
  },
  {
    name: "File Resize",
    avatar: "J",
    title: "Resize",
    description: "Increase or Decrease file size",
  },
  {
    name: "File conversion",
    avatar: "M",
    title: "CEO",
    description: "Change the file format from one to anther",
  },
  {
    name: "Text extraction",
    avatar: "M",
    title: "CFO",
    description: "Extract text from image",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  {/* <p className="text-lg">{item.name}</p> */}
                  <p className="text-zinc-400 text-lg">{item.name}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
