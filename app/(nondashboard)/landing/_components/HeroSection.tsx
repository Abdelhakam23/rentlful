"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { NAVBAR_HEIGHT } from "@/lib/constants";

const HeroSection = () => {
  return (
    <section
      aria-label="Hero Section"
      className="relative "
      style={{ minHeight: `calc(100dvh - ${NAVBAR_HEIGHT}px)` }}
    >
      <Image
        src={"/landing-splash.jpg"}
        alt="Landing Splash Image"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-black/60 "></div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-1/2  -translate-y-1/2 w-full text-center"
      >
        <div className="text-white max-w-4xl mx-auto px-4 sm:px-8 md:px-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 ">
            Start Your Journey to Finding the Perfect Rental Apartment
          </h1>
          <p className="text-xl mb-8">
            Explore our wide range of rental properties tailored to fit your
            lifestyle and needs!
          </p>

          <form
            className="flex justify-center"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Input
              type="text"
              aria-label="Search by city, neighborhood, or address"
              placeholder="Search by city, neighborhood, or address"
              className="w-full max-w-md bg-white h-12 placeholder:text-sm placeholder:font-semibold text-black font-semibold text-sm focus-visible:ring-0 border-none rounded-r-none rounded-l-xl "
            />

            <Button
              type="submit"
              className="bg-secondary-500 h-12  border-none hover:bg-secondary-600 cursor-pointer  rounded-r-xl rounded-l-none"
            >
              Search
            </Button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
