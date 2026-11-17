import Image from "next/image";
import React from "react";
export interface DiscoverItemProps {
  iconSrc: string;
  title: string;
  description: string;
}

const DiscoverItem = ({ iconSrc, title, description }: DiscoverItemProps) => {
  return (
    <div className="text-center p-6 flex flex-col gap-3 items-center rounded-lg shadow-md bg-accent">
      <div className="flex items-center justify-center bg-black p-2 rounded-full">
        <Image
          src={iconSrc}
          alt={title}
          width={15}
          height={15}
          className="w-6 h-6"
        />
      </div>
      <h3 className="font-bold text-sm text-gray-900">{title}</h3>
      <p className="text-xs text-gray-700">{description}</p>
    </div>
  );
};

export default DiscoverItem;
