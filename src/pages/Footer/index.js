import React from "react";
import { Col, Row, Form, Button, Typography } from "antd";
import { Input, Divider } from "antd";

import "./style.css";
import a1 from "../../images/a1.svg";
import a2 from "../../images/a2.svg";
import a3 from "../../images/a3.svg";
import a4 from "../../images/a4.svg";
import a5 from "../../images/a5.svg";
import a6 from "../../images/a6.svg";
import a7 from "../../images/a7.svg";
import a8 from "../../images/a8.svg";
const { Search } = Input;

const { Paragraph, Text } = Typography;
const onSearch = (value) => console.log(value);
export default function Footer() {
  return (
    <>
      <div className="fc">
        <Row justify="space-around" align="top" className="fc2">
          <div className="main-img3">
            <img className="img-logo" src={a4} />
          </div>
          <Col lg={2} xl={3} xs={24} sm={24}>
            <p className="fc3"> Get Started</p>
            <div>
              <a href="/#" className="active">
                Request Live Demo
              </a>
            </div>
            <div>
              <a href="/#" className="active">
                Pricing Simulation
              </a>
            </div>

            <div>
              <a href="/#" className="active">
                Start Free Trial
              </a>
            </div>
            <div>
              <a href="/#" className="active">
                Download App
              </a>
            </div>
          </Col>
          <Col lg={4} xl={4} xs={24} sm={24}>
            <p className="fc3"> Features</p>

            <div>
              <a href="/#" className="active">
                People Management
              </a>
            </div>
            <div>
              <a href="/#" className="active">
                Time Management
              </a>
            </div>
            <div>
              <a href="/#" className="active">
                Compensation Management
              </a>
            </div>
            <div>
              <a href="/#" className="active">
                Talent Management
              </a>
            </div>
            <div>
              <a href="/#" className="active">
                Regulatory Compliance
              </a>
            </div>
          </Col>
          <Col lg={4} xl={4} xs={24} sm={24}>
            <p className="fc3"> Support</p>
            <div>
              <a href="/#" className="active">
                Tools & Calculators
              </a>
            </div>
            <div>
              <a href="/#" className="active">
                palm.hr Configuration
              </a>
            </div>
            <div>
              <a href="/#" className="active">
                palm.hr Documentation
              </a>
            </div>
            <div>
              <a href="/#" className="active">
                Help Desk
              </a>
            </div>
            <div>
              <a href="/#" className="active">
                Submit a Ticket (HubSpot)
              </a>
            </div>
          </Col>
          <Col lg={4} xl={4} xs={24} sm={24}>
            <p className="fc3">Corporate</p>

            <div>
              <a href="/#" className="active">
                About palm.hr
              </a>
            </div>
            <div>
              <a href="/#" className="active">
                PalmHR Offices
              </a>
            </div>
            <div>
              <a href="/#" className="active">
                PalmHR Careers
              </a>
            </div>
            <div>
              <a href="/#" className="active">
                Knowledge Base Concierge
              </a>
            </div>
            <div>
              <a href="/#" className="active">
                Submit a Ticket (HubSpot)
              </a>
            </div>
          </Col>
          <Col lg={4} xl={4} xs={24} sm={24}>
            <p className="fc3">Get in touch</p>

            <div>
              <a href="/#" className="active">
                Inquiries
              </a>
            </div>
            <div>
              <a href="/#" className="active">
                Inquiries Ask palm.hr / Give Feedback
              </a>
            </div>
            <div>
              <a href="/#" className="active">
                Follow us
              </a>
            </div>
            <div>
              <a href="/#" className="active">
                PalmHR Offices
              </a>
            </div>
          </Col>
          <Col align="middle" lg={4} xl={3} sm={24} md={24} xs={24}>
            <p className="fc3">Mobile App</p>
            <div className="main-img">
              <img className="imgs2" src={a1} />

              <img className="imgs2" src={a2} />

              <img className="imgs2 st-hover" src={a3} />
            </div>
            <p className="soon1">Coming Soon</p>
          </Col>
        </Row>
        <Row className="no-10">
          <Row>
            <Col span={12}>
              <img className="imgs2" src={a1} />
            </Col>
            <Col span={12}>
              <img className="imgs2" src={a2} />
            </Col>
          </Row>
          <Row className="foooter-mbl">
            <Col span={24} className="foooter-mbl-col">
              <img className="imgs2" src={a3} />
              <p className="soon">Coming Soon</p>
            </Col>
          </Row>
        </Row>

        <Row className="row-f">
          <Col xl={3} lg={3} md={24} xs={24} sm={24}>
            <div className="main-img2">
              <img className="img-logo" src={a4} />
            </div>
          </Col>
          <Col xl={4} lg={4} md={24} xs={24} sm={24}>
            <div className="col-g">
              <Text className="p4">Get in touch</Text>
              <div className="p0">
                <Paragraph className="p5">
                  All updates on HR right in your inbox.
                </Paragraph>
              </div>
            </div>
          </Col>
          <Col
            align="middle"
            xl={12}
            lg={12}
            xs={24}
            sm={24}
            className="col-g1"
          >
            {/* <Form name="basic" autoComplete="off" className="f-css"> */}
            <Row className="f-css">
              <Col span={24}>
                <Form.Item name=" Enter Email">
                  <Input className="search" placeholder="Email Address" />

                  <Button className="btn-css" size="10" htmlType="submit">
                    Subscribe
                  </Button>
                </Form.Item>
              </Col>
            </Row>

            {/* </Form> */}
            <Search
              className="se-2"
              placeholder="Email Address"
              allowClear
              enterButton="Subscribe"
              size="large"
              onSearch={onSearch}
            />
          </Col>
        </Row>
        <Divider className="d-css" />
        <Row justify="space-between" className="n-css">
          <Col xs={24} xl={5} sm={24} lg={5} md={24} className="col2-css pose">
            <a href="/#" className="swing2">
              <img src={a5} className="a6-css "></img>
            </a>
            <a href="/#" className="swing2">
              <img src={a6} className="a6-css"></img>
            </a>
            <a href="/#" className="swing2">
              <img src={a7} className="a6-css"></img>
            </a>
            <a href="/#" className="swing2">
              <img src={a8} className="a6-css"></img>
            </a>
          </Col>
          <Col xs={24} xl={17} lg={17} sm={24} md={24}>
            <Text className="np-css">
              ©palm.hr 2022 – All rights reserved
              <span className="span-css"> |</span> Terms & Conditions
              <span className="span-css"> |</span> Data Protection & Privacy
              Policy<span className="span-css"> |</span> Sitemap{" "}
              <span className="span-css"> |</span> Captcha
            </Text>
          </Col>
          <div className="op-h">
            <p>©palm.hr 2022 – All rights reserved</p>

            <p className="op-1">
              Terms & Conditions <br /> Data Protection & Privacy Policy
              <br /> Sitemap
              <br /> Captcha
            </p>
          </div>
          <Col xs={24} xl={5} sm={24} lg={5} md={24} className="col2-css pos">
            <a href="/#" className="swing2">
              <img src={a5} className="a6-css "></img>
            </a>
            <a href="/#" className="swing2">
              <img src={a6} className="a6-css"></img>
            </a>
            <a href="/#" className="swing2">
              <img src={a7} className="a6-css"></img>
            </a>
            <a href="/#" className="swing2">
              <img src={a8} className="a6-css"></img>
            </a>
          </Col>
        </Row>
      </div>
    </>
  );
}
