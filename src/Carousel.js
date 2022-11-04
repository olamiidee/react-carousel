import React from "react";
import { CarouselProvider, Slider, Slide, Dot } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

export default function Carousel() {
  return (
    <div>
      <CarouselProvider
        naturalSlideWidth={200}
        naturalSlideHeight={75}
        totalSlides={4}
        className="carousel"
      >
        <Slider>
          <Slide index={0}>I am the first Slide.</Slide>
          <Slide index={1}>I am the second Slide.</Slide>
          <Slide index={2}>I am the third Slide.</Slide>
          <Slide index={2}>I am the third Slide.</Slide>
        </Slider>
        <div className="dot-container">
          <Dot slide={0}></Dot>
          <Dot slide={1}></Dot>
          <Dot slide={2}></Dot>
        </div>
      </CarouselProvider>
    </div>
  );
}
