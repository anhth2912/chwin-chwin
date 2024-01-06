import { Meta } from "@components/layouts/Meta";
import { AppConfig } from "@utils/AppConfig";
import { Hero } from "./components/Hero";
import { VerticalFeatures } from "./components/VerticalFeatures";
import { Banner } from "./components/Banner";
import { Footer } from "@components/layouts/Footer";

const HomeScreen = () => {

  return (
    <div className="bg-[#0b122e] text-gray-600 antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Hero />
      <VerticalFeatures />
      <Banner />
      <Footer />
    </div>
  );
};

export { HomeScreen };
