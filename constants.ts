import {
  ImageMinus,
  ImageIcon,
  TextSelect,
  FileCode,
  FileIcon,
} from "lucide-react";

export const tools = [
  {
    label: "Text Extraction",
    icon: TextSelect,
    href: "/extraction",
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: "Image Resize",
    icon: ImageIcon,
    href: "/img-resize",
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
  },
  {
    label: "Image Conversion",
    icon: ImageMinus,
    href: "/img-conversion",
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
  },
  {
    label: "File Resize",
    icon: FileIcon,
    href: "/file-resize",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    label: "File Conversion",
    icon: FileCode,
    href: "/file-conversion",
    color: "text-green-700",
    bgColor: "bg-green-700/10",
  },
];
