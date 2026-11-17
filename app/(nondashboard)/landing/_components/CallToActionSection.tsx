"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const CallToActionSection = () => {
  return (
    <section className="relative ">
      <Image
        src="/landing-call-to-action.jpg"
        alt="Call to Action"
        fill
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/60" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="relative max-w-7xl px-4 sm:px-6 md:px-8 py-12 md:py-24 mx-auto"
      >
        <div className="text-center ">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 leading-relaxed text-white">
            Start Searching Verified Rentals Today
          </h2>
          <p className="text-primary-50 max-w-md mx-auto text-lg">
            Browse thousands of verified apartments, compare neighborhoods, and
            connect directly with trusted property managers.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-white text-black hover:bg-primary-500 hover:text-white transition-colors px-8 h-12  text-base cursor-pointer font-semibold"
          >
            Search
          </Button>
          <Button
            variant="secondary"
            nativeButton={false}
            render={<Link href="/signup" />}
            className="bg-secondary-600 hover:bg-secondary-700 transition-colors text-white px-8 h-12 text-base cursor-pointer font-semibold"
          >
            Sign Up
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default CallToActionSection;
