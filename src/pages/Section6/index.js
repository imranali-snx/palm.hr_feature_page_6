import React from "react";
import { Col, Row } from "antd";

import { data } from "../../Data/Section6";
import img from "../../images/feature6-two.svg";
import img_mbl from "../../images/feature6-two-mbl.svg";

import "./style.css";
import { CheckCircleOutlined } from "@ant-design/icons";

const Section6 = () => {

  return (
    <div>
      <Row className="section6-margin-top ">
        <Col xxl={12} xl={12} lg={24} md={24} sm={24} xs={24}>
          <div className="text-shape">
            <div className="mbl2">
              <p className="title2">{data?.title1}</p>
              <p className="title22">{data?.title2}</p>
              <p className="descrypt2">{data?.description}</p>
            </div>
            <ul className="list-ul2">
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
        <Col xxl={12} xl={12} lg={24} md={24} sm={24} xs={24} className="">
          <img src={img} className="img-size2" />
          <img src={img_mbl} className="img-size2-mbl" />

          <ul className="list-ul2-mbl">
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
        </Col>
      </Row>
    </div>
  );
};

export default Section6;
