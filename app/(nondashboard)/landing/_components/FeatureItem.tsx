import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export interface FeatureItemProps {
  imageSrc: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

const FeatureItem = ({
  imageSrc,
  title,
  description,
  linkText,
  linkHref,
}: FeatureItemProps) => {
  return (
    <div className="text-center flex flex-col h-full">
      <div className="p-4 flex items-center justify-center rounded-lg shadow-md h-48">
        <Image
          src={imageSrc}
          alt={title}
          width={240}
          height={240}
          className="h-full w-full object-contain"
        />
      </div>
      <h3 className=" text-lg lg:text-xl font-semibold text-gray-900 mt-4 mb-2 line-clamp-1   ">
        {title}
      </h3>
      <p className=" grow text-sm text-gray-600 leading-relaxed mb-6 ">
        {description}
      </p>
      <Link
        className=" inline-block md:w-fit  text-sm font-medium border border-gray-300 rounded-lg text-gray-800 px-5 py-2 hover:bg-gray-100 transition-colors duration-200"
        href={linkHref}
      >
        {linkText}
      </Link>
    </div>
  );
};

export default FeatureItem;
