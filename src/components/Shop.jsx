import React, { useEffect, useState } from "react";
import SectionHeader from "./SectionHeader";
import { FaCartPlus } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import ShopData from "./ShopData";
import ToolTip from "./ToolTip";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [isTrue, setIsTrue] = useState(false);
  const [changeImage, setChangeImage] = useState(null);
  const [indexText, setIndexText] = useState(null);
  const getData = async () => {
    const res = await fetch("http://localhost:3000/product", {
      headers: { "Content-Type": "application/json" },
      method: "GET",
    });
    const data = await res.json();
    setProducts(data);
  };
  const handleCart = async (name, price, image1, image2) => {
    const res = await fetch("http://localhost:3000/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        price,
        image: [image1, image2],
      }),
    });
    const data = await res.json();
    console.log(data);
    // Show the tooltip
    setIsTrue(true);

    // Hide the tooltip after 6 seconds
    setTimeout(() => {
      setIsTrue(false);
    }, 3500);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section id="Shop">
      <div className={`tooltipUni ${isTrue ? "showTooltip" : "hideTooltip"}`}>
        Successfully Added
      </div>
      <SectionHeader miniText={"SHOP"} lergeText={"Order Your Choice"} />
      <div className="shop-container">
        {products.map((product, index) => {
          const { name, price, images } = product;
          const image1 = images[0];
          const image2 = images[1];
          return (
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              className="shop-item"
              key={index}
              onMouseEnter={() => {
                setChangeImage(true);
                setIndexText(index);
              }}
              onMouseLeave={() => {
                setChangeImage(false);
                setIndexText(null);
              }}
            >
              <div className="si-image">
                <img src={image2} alt={image2} />
                <img
                  src={image1}
                  alt={image1}
                  style={{
                    opacity: `${indexText == index ? "0" : "1"}`,
                    transition: "all 1s",
                  }}
                />
              </div>
              <div className="si-desc">
                <h3>{name}</h3>
                <span>${price}</span>
              </div>
              <div className="cart-wish">
                <span
                  className="cart"
                  onClick={() => {
                    handleCart(name, price, image1, image2);
                    setIsTrue(true);
                  }}
                >
                  <FaCartPlus className="cw-icon1" />
                  <div className="cw-tooltip1">
                    {isTrue ? "Added" : "Add To Cart"}{" "}
                    <div className="triangle-right"></div>
                  </div>
                </span>
                <span className="wish">
                  <FaRegHeart className="cw-icon2" />
                  <div className="cw-tooltip2">
                    Wishlist <div className="triangle-right"></div>
                  </div>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Shop;
