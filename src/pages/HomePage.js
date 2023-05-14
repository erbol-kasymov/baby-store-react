import React from "react";
import { FeaturedProducts, Hero, Services, Contact } from "../components";
import TitlePage from "./TitlePage";

const HomePage = () => {
  return (
    <main>
      {/* <TitlePage/> */}
      <Hero />
      <FeaturedProducts />
      <Services />
      <Contact />
    </main>
  );
};

export default HomePage;
