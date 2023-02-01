import React from "react";
import { Col, Row } from "antd";

import { data } from "../../Data/Section4";
import img from "../../images/feature6-zero.svg";
import img_mbl from "../../images/feature6-zero-mbl.svg";

import "./style.css";
import { CheckCircleOutlined } from "@ant-design/icons";

const Section4 = () => {
  return (
    <div>
      {/* <div className="mobile11">
        <p className="main-heading">
        Time & Attendance
        </p>
        <p className="main-heading-mbl-first">
        Time
        </p>
      </div>
      <div className="mobile112">
        <p className="main-heading-mbl-second">& Attendance</p>
      </div> */}
      <Row className="section4-margin-top">
        <Col xxl={12} xl={12} lg={24} md={24} sm={24} xs={24}>
          <div className="text-shape">
            <div className="mbl">
              <p className="title1">{data?.title1}</p>
              <p className="descrypt1">{data?.description}</p>
            </div>
            <ul className="list-ul1">
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
          <img src={img} className="img-size1" />
          <img src={img_mbl} className="img-size1-mbl" />

          <ul className="list-ul1-mbl">
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

export default Section4;
