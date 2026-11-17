"use client";
import { discoverItems } from "@/lib/constants";
import DiscoverItem from "./DiscoverItem";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const DiscoverSection = () => {
  return (
    <section className="bg-primary-50">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="max-w-7xl px-4 sm:px-8 md:px-12 py-16 md:py-24 mx-auto"
      >
        {/* Top Title  */}
        <motion.div variants={itemVariants} className="text-center ">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-gray-900">
            Discover
          </h2>
          <p className="text-lg text-gray-600 font-medium mb-3">
            Find Your Dream Rental Property Today!
          </p>
          <p className="text-gray-500 text-sm max-w-3xl font-medium mx-auto text-balance">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus sunt officiis, numquam eius vitae ipsam temporibus
            saepe delectus laborum tempora neque eum, veniam excepturi
            dignissimos. Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Officia, reprehenderit.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-8">
          {discoverItems.map((item) => (
            <motion.div variants={itemVariants} key={item.title}>
              <DiscoverItem {...item} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default DiscoverSection;
