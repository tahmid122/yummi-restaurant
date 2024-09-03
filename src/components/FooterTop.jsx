import React from "react";
import { Link } from "react-router-dom";

const FooterTop = () => {
  return (
    <div data-aos="fade-left" data-aos-duration="1000">
      <section id="FooterTop">
        <div className="FT-top">
          <div className="flex-1">
            <div className="ftt-left ">
              <h2>Reservation</h2>
              <hr />
              <div className="fl-center">
                <ul>
                  <li>Weekdays - 09:00 To 22:00</li>
                  <li>Saturdays - 10:00 To 22:00</li>
                  <li>Sundays - 11:00 To 22:00</li>
                </ul>
                <Link className="fl-center-btn">Book A Table</Link>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="ftt-middle ">
              <h5>Tasty Menu</h5>
              <h1>Connect with Excellence</h1>
              <p>
                Lacus laoreet non curabitur gravida. Orci varius natoqatibus et
                magnis dis parturient montes, nascetur ridiculus in efficitur.
              </p>
              <div className="google-apple">
                <img
                  src="/images/google-play-button.jpg"
                  alt="google-play-button.jpg"
                />
                <img
                  src="/images/app-store-button.jpg"
                  alt="app-store-button.jpg"
                />
              </div>
            </div>
          </div>
          <div className="ftt-right flex-1 displayNone">
            <img src="/images/delivery-man2.png" alt="delivery-man2.png" />
          </div>
        </div>
      </section>
      <div className="FT-bottom">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d189286.38831571065!2d-74.09309025661825!3d40.70591878809812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e1!3m2!1sen!2sbd!4v1723366439241!5m2!1sen!2sbd"
          frameBorder="0"
          width={"100%"}
          height={"400px"}
        ></iframe>
      </div>
    </div>
  );
};

export default FooterTop;
