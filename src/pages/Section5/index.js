import React from "react";
import { Col, Row } from "antd";

import { data } from "../../Data/Section5";
import img from "../../images/feature6-one.svg";
import img_mbl from "../../images/feature6-one-mbl.svg";
import "./style.css";
import { CheckCircleOutlined } from "@ant-design/icons";

const Section3 = () => {
  return (
    <div>
      <Row className="section5-margin-top">
        <Col xxl={12} xl={12} lg={24} md={24} sm={24} xs={24} className="">
          <div className="desk3">
            <p className="title3">{data?.title3}</p>
            <p className="descrypt3">{data?.description}</p>
          </div>
          <img src={img} className="img-size3" />
          <img src={img_mbl} className="img-size3-mbl" />
        </Col>
        <Col xxl={12} xl={12} lg={24} md={24} sm={24} xs={24}>
          <div className="text-shape3">
            <div className="mbl3">
              <p className="title3">{data?.title1}</p>
              <p className="title32">{data?.title2}</p>
              <p className="descrypt3">{data?.description}</p>
            </div>
            <ul className="list-ul3">
              {data?.lists.map((items) => {
                return (
                  <div className="bullets">
                    <div className="icon">
                      <CheckCircleOutlined className="tick" />
                    </div>
                    <div className="bullets-list">
                      <li className="lists">{items}</li>
                    </div>
                  </div>
                );
              })}
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Section3;
