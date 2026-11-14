import { NAVBAR_HEIGHT } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav
      className="fixed top-0 left-0 z-50 w-full shadow-xl"
      style={{ height: `${NAVBAR_HEIGHT}px` }}
    >
      <div className="flex justify-between items-center w-full py-3 px-4 md:px-8 bg-primary-700 text-white h-full">
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

        <p className="font-light hidden md:block text-primary-200">
          Discover your perfect rental apartment with our advanced search
        </p>
        <div className="flex items-center gap-3 md:gap-5">
          <Button
            variant="outline"
            nativeButton={false}
            render={<Link href="/signin" />}
            className="text-white bg-transparent border-white hover:bg-white hover:text-primary-700 rounded-lg"
          >
            Sign In
          </Button>

          <Button
            variant="secondary"
            nativeButton={false}
            render={<Link href="/signup" />}
            className="text-white bg-secondary-600 hover:bg-white hover:text-primary-700 rounded-lg"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
