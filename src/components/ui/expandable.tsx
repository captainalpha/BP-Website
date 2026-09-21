import { HTMLAttributes, useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface ImageProps extends HTMLAttributes<HTMLDivElement> {
  item: { image: string; title: string };
  index: number;
  activeItem: number;
}

interface ExpandableProps {
  list?: { image: string; title: string }[];
  autoPlay?: boolean;
  className?: string;
}

const List = ({ item, className, index, activeItem, ...props }: ImageProps) => {
  return (
    <div
      className={cn(
        "relative flex h-full w-20 min-w-10 cursor-crosshair overflow-hidden rounded-md transition-all delay-0 duration-300 ease-in-out",
        {
          "flex-grow": index === activeItem,
        },
        className
      )}
      {...props}
    >
      <Image
        src={item.image}
        alt={item.title}
        height={100000}
        width={100000}
        className={cn("h-full w-full object-cover", {
          "blur-[2px]": index !== activeItem,
        })}
      />
      {index === activeItem && (
        <div className="absolute bottom-4 left-4 min-w-fit text-gray-500 bg-[#d4d4d432] rounded-xl p-2 backdrop-blur-md md:bottom-8 md:left-8">
          <h1 className="items-start justify-start text-xl sm:text-2xl md:text-3xl">
            {item.title}
          </h1>
        </div>
      )}
    </div>
  );
};

// const items = [
//   {
//     image: "/images/modalimage1.webp",
//     title: "Account Payable",
//   },
//   {
//     image: "/images/modalimage2.webp",
//     title: "Vendor Portal",
//   },
//   {
//     image: "/images/hindware.webp",
//     title: "Meta Ex",
//   },
// ];

export default function Expandable({
  list = [],
  autoPlay = true,
  className,
}: ExpandableProps) {
  const [activeItem, setActiveItem] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!autoPlay) {
      return;
    }

    const interval = setInterval(() => {
      if (!isHovering) {
        setActiveItem((prev) => (prev + 1) % list.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, list.length, isHovering]);

  return (
    <div className={cn("flex h-[57vh] w-[56vw] pr-10 gap-1", className)}>
      {list.map((item, index) => (
        <List
          key={item.title}
          item={item}
          index={index}
          activeItem={activeItem}
          onMouseEnter={() => {
            setActiveItem(index);
            setIsHovering(true);
          }}
          onMouseLeave={() => {
            setIsHovering(false);
          }}
        />
      ))}
    </div>
  );
}
