import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="cursor-pointer group " scroll={false}>
      <div className="flex items-center gap-3 md:gap-5">
        <Image
          src="/logo.svg"
          alt="Rentiful Logo"
          width={24}
          height={24}
          className="w-6 h-6"
        />
        <div className="text-xl font-bold group-hover:text-primary-300">
          RENT
          <span className="text-secondary-500 font-light group-hover:text-primary-300 ">
            IFUL
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
