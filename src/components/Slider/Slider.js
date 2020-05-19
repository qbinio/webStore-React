import React from "react";
import SliderPhoto1 from "../../assets/images/slider-image1.jpg";
import SliderPhoto2 from "../../assets/images/slider-image2.jpg";
import SliderPhoto3 from "../../assets/images/slider-image3.jpg";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "./Slider.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = () => (
  <AutoplaySlider
    play={true}
    cancelOnInteraction={false}
    interval={5000}
    style={{ height: "90%", width: "80%", margin: "auto" }}
  >
    <div className="slider_imageWrapper">
      <img className="slider_image" src={SliderPhoto1} alt="slider photo" />
    </div>
    <div className="slider_imageWrapper">
      <img className="slider_image" src={SliderPhoto2} alt="slider photo" />
    </div>
    <div className="slider_imageWrapper">
      <img className="slider_image" src={SliderPhoto3} alt="slider photo" />
    </div>
  </AutoplaySlider>
);

export default Slider;
