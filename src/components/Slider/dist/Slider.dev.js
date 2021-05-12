"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _sliderImage = _interopRequireDefault(require("../../assets/images/slider-image1.jpg"));

var _sliderImage2 = _interopRequireDefault(require("../../assets/images/slider-image2.jpg"));

var _sliderImage3 = _interopRequireDefault(require("../../assets/images/slider-image3.jpg"));

var _reactAwesomeSlider = _interopRequireDefault(require("react-awesome-slider"));

var _autoplay = _interopRequireDefault(require("react-awesome-slider/dist/autoplay"));

require("react-awesome-slider/dist/styles.css");

require("./Slider.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
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
*/
var _default = Slider;
exports["default"] = _default;