import React from "react";
import { Col, Row } from "antd";

import { data } from "../../Data/Section8";
import img from "../../images/four.svg";
import img_mbl from "../../images/four-mbl.svg";

import "./style.css";
import { CheckCircleOutlined } from "@ant-design/icons";

const Section8 = () => {

  return (
    <div >
      <Row className="Section8-margin-top ">
        <Col xxl={12} xl={11} lg={24} md={24} sm={24} xs={24} className="section8-margin">
          <div className="text-shape">
            <div className="mbl5">
              <p className="title5">{data?.title1}</p>
              <p className="descrypt5">{data?.description}</p>
            </div>
            <ul className="list-ul5">
              {data?.lists.map((items) => {
                return (
                  <div className="bullets">
                    <div className="icon">
                      <CheckCircleOutlined
                       className="tick"
                      />
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
        <Col xxl={12} xl={13} lg={24} md={24} sm={24} xs={24} className="">
          <img src={img} className="img-size5"/>
          <img src={img_mbl} className="img-size5-mbl"/>

          <ul className="list-ul5-mbl">
              {data?.lists.map((items) => {
                return (
                  <div className="bullets">
                    <div className="icon">
                      <CheckCircleOutlined
                       className="tick"
                      />
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

export default Section8;
