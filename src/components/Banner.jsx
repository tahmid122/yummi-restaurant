import React from "react";
import SectionHeader from "./SectionHeader";
import SocialIcons from "./SocialIcons";
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <section id="Banner">
      <section
        id="bannerHead"
        style={{ alignItems: "start" }}
        data-aos="fade-right"
        data-aos-duration="400"
      >
        <h5>Home Delivery</h5>
        <h1>Great Tasting Pizza</h1>
      </section>
      <p data-aos="fade-right" data-aos-duration="600">
        Etiam quis lobortis odio, at efficitur quam mattis sodales mauris. Morbi
        fermentum pretium ligula, id efficitur quam mattis in. Fusce nec pretium
        ante. Vivamus vitae bibendum lacus, ac varius ligula. Duis at faucibus
        ligula, quis dignissim libero.
      </p>
      <div
        className="banner-down"
        data-aos="fade-right"
        data-aos-duration="800"
      >
        <Link
          to="Footer"
          spy={true}
          smooth={true}
          offset={-50}
          duration={1000}
          className="fl-center-btn"
        >
          Book A Table
        </Link>
        <a href="#" className="num">
          +00 123 456 789
        </a>
      </div>
      <div
        className="banner-social"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <span>In Social Media :</span>
        <SocialIcons />
      </div>
      <div className="overlay"></div>
    </section>
  );
};

export default Banner;
