import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa6";
const MainNavBar = () => {
  const navigate = useNavigate();
  const [isTrue, setIsTrue] = useState(false);
  return (
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
            <Link
              activeClass="active"
              to="Banner"
              spy={true}
              smooth={true}
              offset={-80}
              duration={1000}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="ChefMenu"
              spy={true}
              smooth={true}
              offset={-50}
              duration={1000}
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              to="Shop"
              spy={true}
              smooth={true}
              offset={-50}
              duration={1000}
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              to="Blog"
              spy={true}
              smooth={true}
              offset={-50}
              duration={1000}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="Instagram"
              spy={true}
              smooth={true}
              offset={-50}
              duration={1000}
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="Footer"
              spy={true}
              smooth={true}
              offset={-50}
              duration={1000}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="mn-middle">
        <img src="/images/light-logo.svg" alt="logo" />
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
  );
};

export default MainNavBar;
