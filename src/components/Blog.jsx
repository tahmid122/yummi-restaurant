import React from "react";
import SectionHeader from "./SectionHeader";
import BlogData from "./BlogData";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
const Blog = () => {
  return (
    <section id="Blog">
      <SectionHeader miniText={"BLOG"} lergeText={"Read Our Blogs"} />
      <div className="blog-container">
        {BlogData.map((blog, index) => {
          const { blogImage, date, tooltop, heading, description } = blog;
          return (
            <div
              className="blog flex1"
              key={index}
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div className="blog-image">
                <img src={blogImage} alt={blogImage} />
                <div className="date">
                  <span>{date}</span>
                </div>
              </div>
              <span className="tooltip">
                <BsFillBookmarkHeartFill />
                {tooltop}
              </span>
              <h3>{heading}</h3>
              <p>{description}</p>
              <a className="blog-ancor">
                READ MORE
                <span>
                  <FaArrowRightLong className="arrow-icon" />
                </span>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Blog;
