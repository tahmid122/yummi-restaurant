import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSnapchatGhost } from "react-icons/fa";
const SocialIcons = () => {
  return (
    <div id="SocialIcons">
      <ul>
        <li>
          <a href="#">
            <FaFacebookF className="socialIconsIcon" />
          </a>
        </li>
        <li>
          <a href="#">
            <FaYoutube className="socialIconsIcon" />
          </a>
        </li>
        <li>
          <a href="#">
            <FaXTwitter className="socialIconsIcon" />
          </a>
        </li>
        <li>
          <a href="#">
            <FaSnapchatGhost className="socialIconsIcon" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialIcons;
