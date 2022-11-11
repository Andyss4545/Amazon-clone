import React, { useEffect, useState } from "react";
import "../Slider/Slider.css";
import ArrowLeft from "@mui/icons-material/ChevronLeftRounded";
import ArrowRight from "@mui/icons-material/ChevronRightRounded";
import { sliderData } from "./slider-data";

const Slider = () => {
  //  cuuretSlide will be set to the value of 0 which is the first index
  const [currentSlide, setCurrentSlide] = useState(0);
  // slidelength is going to hold our slderdata length
  const slideLength = sliderData.length;
  // slideLength = 1 2 3
  // tell the browser to set current slide to 0 when page loads - it will occur once when the page load

  // tell the browser to auto scroll slides
  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000; // 5000 is in milleseconds
  // currentSlide = 0 1 2
  const nextSlide = () => {
    // if the current slides is equal to slideLength - 1
    //I want to set the current slides back to 0 else currentSlides + 1
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    //  if the currentSlide is equal to 0 set slideLength - 1 otherwise currentSlide -1
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  // tell the browser to set IntervalTime and nextslide
  let auto = () => {
    slideInterval = setInterval(nextSlide, intervalTime);
  };

  useEffect(() => {
    if (autoScroll) {
      auto();
    }

    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  return (
    <div className="slider">
      <div className="arrowIcon">
        <ArrowLeft onClick={prevSlide} className="arrow prev" />
        <ArrowRight onClick={nextSlide} className="arrow next" />
      </div>

      {/** we are going to map throug our slider sliderData and it will also take the index parameter */}
      {sliderData?.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={index}
          >
            {index === currentSlide && (
              <div>
                <img src={slide.image} alt={slide.Heading} />
                {/* <div className="content">
                  <h2>{slide.Heading}</h2>
                  <p>{slide.desc}</p>
                </div> */}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
