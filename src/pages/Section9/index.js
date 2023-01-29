import React from "react";

import { data } from "../../Data/Section9";

import "./style.css";

const Section3 = () => {
  return (
    <div className="Green-Height">
      <div className="Green">
        <p className="title">{data?.title1}</p>
        <p className="descrypt">{data?.description}</p>
      </div>
    </div>
  );
};

export default Section3;
