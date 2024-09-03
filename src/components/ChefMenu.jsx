import React from "react";
import SectionHeader from "./SectionHeader";
import ChefMenuData from "./ChefMenuData";

const ChefMenu = () => {
  return (
    <section id="ChefMenu">
      <SectionHeader
        miniText={"MOUTH WATERING"}
        lergeText={"Chef's Special Menus"}
      />
      <div className="chef-menu-container">
        <div
          className="cmc-left"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          {ChefMenuData.map((data, index) => {
            const { images, title, desc, price } = data;

            return (
              <div className="cmcl-item" key={index}>
                <div className="item-1st">
                  <div className="img-1st">
                    <img src={images} alt="" />
                  </div>
                  <div className="desc-1st">
                    <h1>{title}</h1>
                    <p>{desc}</p>
                  </div>
                </div>
                <div className="item-last">
                  <h1>{price}</h1>
                </div>
              </div>
            );
          })}
        </div>
        <div className="cmc-middle">
          <img
            src="/images/Demo-2-Pricing-Burger-png.png"
            alt="Demo-2-Pricing-Burger-png.png"
          />
        </div>
        <div className="cmc-left" data-aos="fade-left" data-aos-duration="1000">
          {ChefMenuData.map((data, index) => {
            const { images, title, desc, price } = data;

            return (
              <div className="cmcl-item" key={index}>
                <div className="item-1st">
                  <div className="img-1st">
                    <img src={images} alt="" />
                  </div>
                  <div className="desc-1st">
                    <h1>{title}</h1>
                    <p>{desc}</p>
                  </div>
                </div>
                <div className="item-last">
                  <h1>{price}</h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ChefMenu;
