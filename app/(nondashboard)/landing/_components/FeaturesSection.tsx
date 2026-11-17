"use client";

import FeatureItem from "@/app/(nondashboard)/landing/_components/FeatureItem";
import { featureItems } from "@/lib/constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const FeaturesSection = () => {
  return (
    <section className="bg-white ">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 py-16 md:py-24 "
      >
        <motion.h2
          variants={itemVariants}
          className="text-balance text-3xl max-w-2xl text-center font-bold  mx-auto mb-8"
        >
          Quickly find the home you want using our effective search filters!
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12  ">
          {featureItems.map((item) => {
            return (
              <motion.div variants={itemVariants} key={item.title}>
                <FeatureItem {...item} />
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturesSection;
