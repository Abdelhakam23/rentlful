"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative h-screen ">
      <Image
        src={"/landing-splash.jpg"}
        alt="Landing Splash"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-1/2 transform -translate-y-1/2 w-full text-center"
      >
        <div className="text-white max-w-4xl mx-auto px-16 sm:px-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 ">
            Start Your Journey to Finding the Perfect Rental Apartment
          </h1>
          <p className="text-xl mb-8">
            Explore our wide range of rental properties tailored to fit your
            lifestyle and needs!
          </p>

          <div className="flex justify-center items-center ">
            <Input
              type="text"
              onChange={() => {}}
              value={""}
              placeholder="Search by city, neighborhood, or address"
              className="w-full max-w-md    bg-white h-12 placeholder:text-sm placeholder:font-semibold text-black font-semibold text-sm outline-none focus:outline-none  border-none rounded-none rounded-l-xl "
            />

            <Button
              onClick={() => {}}
              className="bg-secondary-500 h-12 rounded-none border-none hover:bg-secondary-600 cursor-pointer  rounded-r-xl"
            >
              Search
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
