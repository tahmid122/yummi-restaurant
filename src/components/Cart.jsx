import React, { useState, useEffect } from "react";
import MainNavBar from "./MainNavBar";
import FooterTop from "./FooterTop";
import Footer from "./Footer";
import MarqueText from "./MarqueText";
import { FaPlus } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import CartItemData from "./CartItemData";
import { Link, useNavigate } from "react-router-dom";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
const Cart = () => {
  const navigate = useNavigate();
  const [isTrue, setIsTrue] = useState(false);
  const [isTrue2, setIsTrue2] = useState(false);
  const [allData, setAllData] = useState([]);
  const [quantities, setQuantities] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [display, setDisplay] = useState("none");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const total = allData.reduce((acc, item, index) => {
      return acc + item.price * quantities[index];
    }, 0);
    setTotalPrice(total);
  }, [quantities, allData]);

  const updateQuantity = (index, value) => {
    setQuantities((prevQuantities) =>
      prevQuantities.map((qty, i) => (i === index ? value : qty))
    );
  };

  const getData = async () => {
    const res = await fetch("http://localhost:3000/cart", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setAllData(Array.isArray(data) ? data : []);
    setQuantities(data.map(() => 1));
  };

  const handleDelete = async (name) => {
    const res = await fetch("http://localhost:3000/cart", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
      }),
    });
    const data = await res.json();
    await getData();
  };

  useEffect(() => {
    getData();
  }, []);

  const handleOrderSubmit = async (e) => {
    e.preventDefault();
    const orderData = {
      name,
      email,
      address,
      message,
      cartItems: allData.map((item, index) => ({
        ...item,
        quantity: quantities[index],
      })),
      totalPrice,
    };

    const res = await fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderData),
    });
    const data = await res.json();
    if (res.ok) {
      // Handle success (e.g., show a success message, redirect to another page, etc.)
      console.log("Order placed successfully!");
      setDisplay("none");
      setIsTrue2(true);
      setTimeout(() => {
        setIsTrue2(false);
      }, 3500);
    } else {
      // Handle error
      console.error("Failed to place the order");
    }
  };

  return (
    <section id="Cart">
      <MarqueText />
      <section id="MainNavBar">
        <div className="mn-left">
          <ul className={`${isTrue ? "show-menu" : "hide-menu"}`}>
            <div className="x-mark-div">
              <FaXmark
                className="xMark"
                onClick={() => {
                  setIsTrue(false);
                }}
              />
            </div>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Menu</Link>
            </li>
            <li>
              <Link to="/">About Us</Link>
            </li>
            <li>
              <Link to={"/"}>Shop</Link>
            </li>
            <li>
              <Link to="/">Blog</Link>
            </li>

            <li>
              <Link to="/">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="mn-middle">
          <a onClick={() => navigate("/")}>
            <img src="/images/light-logo.svg" alt="logo" />
          </a>
        </div>
        <div className="mn-right">
          <div className="cartDiv" onClick={() => navigate("/cart")}>
            <FaCartPlus className="cartMain" />
          </div>
          <div className="search-div">
            <input type="text" placeholder="Enter Keyword" />
            <FaMagnifyingGlass className="search-icon" />
          </div>
          <a onClick={() => navigate("/cart")} className="fl-center-btn">
            order now
          </a>
        </div>
        <div className="bar-div">
          <FaBars
            className="bar-icon"
            onClick={() => {
              setIsTrue(true);
            }}
          />
        </div>
      </section>

      <div
        className="cart-banner"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <h1>CART</h1>
        <span>Manage Your Cart Products</span>
      </div>
      <div
        className="cart-container"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <div
          className={`tooltipUni ${isTrue2 ? "showTooltip" : "hideTooltip"}`}
        >
          Successfully Placed
        </div>
        <div className="cart-items">
          {allData.length > 0 ? (
            <table cellSpacing={0}>
              <thead>
                <tr>
                  <th
                    className="proTab mmHide"
                    style={{ textAlign: "left", paddingLeft: "10px" }}
                  >
                    Product
                  </th>
                  <th
                    className="priceTab"
                    style={{ textAlign: "left", paddingLeft: "10px" }}
                  >
                    Price
                  </th>
                  <th
                    className="quanTab"
                    style={{ textAlign: "left", paddingLeft: "10px" }}
                  >
                    Quantity
                  </th>
                  <th
                    className="subTab"
                    style={{ textAlign: "left", paddingLeft: "10px" }}
                  >
                    Subtotal
                  </th>
                  <th>
                    <br />
                  </th>
                </tr>
              </thead>
              <tbody>
                {allData.map((item, index) => {
                  const { name, price, image } = item;
                  const quantity = quantities[index];
                  const subTotal = price * quantity;
                  return (
                    <tr key={index}>
                      <td>
                        <span>
                          <img className="mmHide" src={image[0]} alt={name} />
                          {name}
                        </span>
                      </td>
                      <td>${price}</td>
                      <td>
                        <div className="quan-div">
                          <div className="minus">
                            <FaMinus
                              onClick={() => {
                                if (quantity > 1) {
                                  updateQuantity(index, quantity - 1);
                                }
                              }}
                            />
                          </div>
                          <input
                            type="number"
                            value={quantity}
                            min={0}
                            readOnly
                          />
                          <div className="plus">
                            <FaPlus
                              onClick={() => {
                                updateQuantity(index, quantity + 1);
                              }}
                            />
                          </div>
                        </div>
                      </td>
                      <td>${subTotal}</td>
                      <td>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <FaXmark
                            className="x-mark"
                            onClick={() => {
                              handleDelete(name);
                            }}
                          />
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <h3 style={{ textAlign: "center", marginTop: "30px" }}>
              Nothing to show. Please continue shopping
            </h3>
          )}
        </div>
        {allData.length > 0 ? (
          <div className="proceed">
            <span>Total ${totalPrice}</span>
            <a
              onClick={() => setDisplay("block")}
              className="fl-center-btn"
              style={{ width: "220px", fontSize: "16px" }}
            >
              Proceed To Checkout
            </a>
          </div>
        ) : (
          ""
        )}
        <div className="order-container" style={{ display: display }}>
          <div className="order">
            <div className="or-x">
              <span onClick={() => setDisplay("none")}>
                <FaXmark className="x-mark2" />
              </span>
            </div>
            <form onSubmit={handleOrderSubmit}>
              <div className="st-p">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Your Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <textarea
                    style={{ height: "200px" }}
                    type="text"
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className="check-total" style={{ textAlign: "center" }}>
                <h1>Total ${totalPrice}</h1>
              </div>
              <button
                type="submit"
                className="fl-center-btn"
                style={{
                  width: "100%",
                  fontSize: "16px",
                  marginTop: "20px",
                  border: "none",
                }}
              >
                Place The Order
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Cart;
