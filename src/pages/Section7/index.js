import React from "react";
import { Col, Row } from "antd";

import { data } from "../../Data/Section7";
import img from "../../images/third.svg";
import img_mbl from "../../images/third-mbl.svg";

import "./style.css";
import { CheckCircleOutlined } from "@ant-design/icons";

const Section3 = () => {

  return (
    <div>
      <Row className=" ">
        <Col xxl={12} xl={12} lg={24} md={24} sm={24} xs={24} className="">
          <div className="mobile-show">
            <p className="title4">{data?.title1}</p>
            <p className="descrypt4">{data?.description}</p>
          </div>
          <img src={img} className="img-size4" />
          <img src={img_mbl} className="img-size4-mbl" />

        </Col>
        <Col xxl={12} xl={12} lg={24} md={24} sm={24} xs={24}>
          <div className="text-shape4">
            <div className="mobile-hide">
              <p className="title4">{data?.title1}</p>
              <p className="descrypt4">{data?.description}</p>
            </div>
            <ul className="list-ul4">
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
