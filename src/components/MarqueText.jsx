import React from "react";

const MarqueText = () => {
  return (
    <section id="MarqueText">
      <marquee behavior="alternate" direction="left" className="marque">
        <span style={{ marginLeft: "50px" }}>
          Get 15% Off When You Spend $800 W. Code: GIFT64
        </span>
        <span>Free Shipping On Order Above $25 Shop Now</span>
        <span>An Awesome Gift Always! Get Gift Coupons Now!</span>
        <span>Get 15% Off When You Spend $800 W. Code: GIFT64 </span>
        <span>Free Shipping On Order Above $25 Shop Now</span>
        <span>An Awesome Gift Always! Get Gift Coupons Now!</span>
      </marquee>
    </section>
  );
};

export default MarqueText;
