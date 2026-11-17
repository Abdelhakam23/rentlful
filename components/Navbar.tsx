import { NAVBAR_HEIGHT } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav
      className="fixed top-0 left-0 z-50 w-full shadow-xl bg-primary-700"
      style={{ height: `${NAVBAR_HEIGHT}px` }}
    >
      <div>
        <div className="max-w-7xl mx-auto flex justify-between items-center w-full py-3 px-4 sm:px-6 md:px-8   text-white h-full">
          <Logo />

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
      </div>
    </nav>
  );
};

export default Navbar;
