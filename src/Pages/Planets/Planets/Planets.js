import React from "react";
import Header from "../../../Components/Header/Header";
import style from "./style.module.scss";
import Footer from "../../../Components/Footer/Footer";
import PlanetMainSection from "../../../Components/Section/PlanetMainSection/PlanetMainSection";
import PlanetContent from "../../../Components/Content/PlanetsContent/PlanetContent";
import PlanetCardContainer from "../../../Components/PlanetCard/PlanetCardContainer";

const Planets = () => {
  return (
    <div className={style.container}>
      <Header />
      <PlanetMainSection />
      <PlanetContent />
      <PlanetCardContainer />
      <Footer />
    </div>
  );
};

export default Planets;
