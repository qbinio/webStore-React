import React from "react";
import Slider from "../../components/Slider/Slider";
import "./Home.css";
import BestProductList from "../../components/BestProductList/BestProductList";

const Home = () => (
  <>
    <div className="homeWrapper">
      <Slider />
    </div>
    <BestProductList />
  </>
);

export default Home;
