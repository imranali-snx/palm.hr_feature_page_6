import React from "react";
import useWindowDimensions from "../utiles";
import { Col, Row } from "antd";

import { data } from "../../Data/Section2";
import posterDesktop from "../../images/feature6-Video-sec.svg";
import postermbl from "../../images/feature6-Video-sec-mbl.svg";
import video from "../../images/feature6-video.mp4";

import "./style.css";

const Section2 = () => {
  const { width } = useWindowDimensions();

  return (
    <div className="za-1">
      <Row className="back-videosec">
        <Col
          xxl={12}
          xl={12}
          lg={12}
          md={24}
          sm={24}
          xs={24}
          className="video-sec-padding"
        >
          <h2 className="videosec-h">{data?.title1}</h2>
          <h2 className="videosec-h2">{data?.title2}</h2>

          <p className="videosec-p">{data?.description}</p>
          <p className="videosec-p2">{data?.description2}</p>

        </Col>
        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24} className="pad-left">
          <video
            className="video"
            poster={width < 993 ? postermbl : posterDesktop}
            
          >
            <source src={video} type="video/mp4" />
          </video>
        </Col>
      </Row>
    </div>
  );
};

export default Section2;
