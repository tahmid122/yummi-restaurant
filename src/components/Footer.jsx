import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import SocialIcons from "./SocialIcons";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div>
      <section id="Footer">
        <div
          className="foot-left"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h2>Our Address</h2>
          <div className="foot-contact-box">
            <ul>
              <li>
                <FaPhoneVolume className="fcb-icon" />
                <span>
                  <a href="tel:+00 123 456 789">+00 123 456 789</a>
                </span>
              </li>
              <li>
                <FaLocationDot className="fcb-icon" />
                <span>837, South Margarete, MD 35137</span>
              </li>
              <li>
                <FaEnvelope className="fcb-icon" />
                <span>
                  <a href="mailto:support@example.com">support@example.com</a>
                </span>
              </li>
            </ul>
          </div>
          <SocialIcons />
        </div>
        <div
          className="foot-middle"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <img src="/images/light-logo.svg" alt="Light Logo" />
          <p>
            Praesent quis cursus sem. Aenean sem lectus, varius et elit a,
            tempor commodo est. In sollicitudin nec ipsum at iaculis. Sed
            iaculis neque sit amet ex tincidunt iaculis ut sit amet felis.
          </p>
          <hr className="hr-style" />
          <div className="foot-menu">
            <ul>
              <li>
                <Link
                  to="Banner"
                  spy={true}
                  smooth={true}
                  offset={-0}
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
                  offset={-0}
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
                  offset={-0}
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
                  offset={-0}
                  duration={1000}
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="foot-right"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <h2>Newsletter</h2>
          <p>
            Proin a interdum elit. Etiam eu sapien sem uspendisse a massa justo
            ras pus
          </p>
          <div className="input-box-foot">
            <input type="email" placeholder="Enter Your Mail ID Here" />
            <button>
              <FaArrowRight className="arrow" />
            </button>
          </div>
          <div className="payment-foot">
            <img src="/images/Skrill-Icon.svg" alt="Skrill-Icon.svg" />
            <img src="/images/Visa-Icon.svg" alt="Skrill-Icon.svg" />
            <img src="/images/Paypal-Icon.svg" alt="Skrill-Icon.svg" />
            <img src="/images/Gpay-Icon.svg" alt="Skrill-Icon.svg" />
            <img src="/images/Mastercard-Icon.svg" alt="Skrill-Icon.svg" />
          </div>
        </div>
      </section>
      <div className="last-footer">
        <p>
          ©{" "}
          <a href="http://www.tahmidalam.vercel.app" target="_blank">
            Tahmid_Alam
          </a>{" "}
          all rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
