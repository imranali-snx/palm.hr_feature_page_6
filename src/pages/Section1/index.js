import React from "react";
import { Col, Row } from "antd";
import { Button } from "antd";
import { data } from "../../Data/Section1";
import herosecMbl from "../../images/Headerimage-mbl.svg";
import herosec from "../../images/Headerimage.svg";
import icons from "../../images/icon-hero.svg";

import "./style.css";

const Section1 = () => {

  return (
    <div className="heroSection">
      <Row className="background-hero">
        <Col xxl={10} xl={11} lg={24} md={24} sm={24} xs={24}>
          <div className="position-hero">
            <div className="leftmargin-hero">
              <div className="main-title">
                <img src={icons} />
                <p style={{margin:"0px"}}>{data?.title1}</p>
              </div>
              <p className="first-line">{data?.description}</p>
              <h2 className="title-hero">{data?.description2}</h2>

              <p className="second-line">{data?.description3}</p>
              <Button className="hero-firstbtn">Book a Free Demo</Button>
            </div>
          </div>
        </Col>
        <Col
          xxl={14}
          xl={12}
          lg={24}
          md={24}
          sm={24}
          xs={24}
          className="heroSection-img"
        >
          <img src={herosec} className="desktop-img"/>
          <img src={herosecMbl} className="mobile-img" />

          <Button className="hero-firstbtn1">Book a Free Demo</Button>

        </Col>
      </Row>
    </div>
  );
};
export default Section1;
