import FeatureItem from "@/components/FeatureItem";
import { featureItems } from "@/lib/constants";

const FeaturesSection = () => {
  return (
    <section className="bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 py-16 md:py-24 ">
        <h2 className="text-balance text-3xl max-w-2xl text-center font-bold  mx-auto mb-8">
          Quickly find the home you want using our effective search filters!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12  ">
          {featureItems.map((item) => {
            return <FeatureItem key={item.title} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
