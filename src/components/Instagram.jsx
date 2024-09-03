import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaInstagram } from "react-icons/fa";
import carouselImages from "./CarouselImages";
import SectionHeader from "./SectionHeader";
const Instagram = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: windowWidth < 600 ? 3 : 6,
    slidesToScroll: 2,
  };
  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  return (
    <section id="Instagram">
      <SectionHeader
        miniText={"Follow Our Page"}
        lergeText={"Follow @ourinstagram"}
      />
      <div
        className="carousel slider-container"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <Slider {...settings}>
          {carouselImages.map((image) => {
            const { id, imageLink } = image;
            return (
              <div className="caro-image" key={id}>
                <img src={imageLink} alt="instagram2.jpg" />
                <div className="ins-overlay">
                  <div className="insta-icon-div">
                    <FaInstagram className="insta-icon" />
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Instagram;
