import React from "react";

const SectionHeader = ({ miniText, lergeText }) => {
  return (
    <section id="SectionHeader" data-aos="fade-left" data-aos-duration="1000">
      <h5>{miniText}</h5>
      <h1>{lergeText}</h1>
    </section>
  );
};

export default SectionHeader;
