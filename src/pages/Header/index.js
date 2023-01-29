import React, { useRef } from "react";
import { Button } from "antd";

import "./style.css";
import Logo from "../../images/logo-dek.svg";
import MblLogo from "../../images/logo-mbl.svg";
import CallIcon from "../../images/call.svg";
import g2 from "../../images/downArrow.svg";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
export default function Header() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header>
      <div className="header-desktop">
        <img src={Logo} height={32} width={175} />

        <div className="h9-css">
          <a href="/#" className="h-text2">
            <span className="h-text">
              Our Products
              <img src={g2} className="imh-t" />
            </span>
          </a>
          <a href="/#" className="h-text2">
            <span className="h-text">
              Who we serve
              <img src={g2} className="imh-t" />
            </span>
          </a>
          <a href="/#" className="h-text2">
            <span className="h-text">
              Resources
              <img src={g2} className="imh-t" />
            </span>
          </a>
          <a href="/#" className="h-text2">
            <span className="h-text">Pricing</span>
          </a>
        </div>
        <div className="h10-css">
          <img className="img-tell" src={CallIcon} />
          <a href="tel:+966 11 520 2868" className="h-tell">
            <span className="span-h">+966 11 520 2868</span>
          </a>
          <Button className="h-button">Get Started</Button>
        </div>
      </div>

      <div className="header-mbl">
        <img src={MblLogo} height={32} width={175} />

        <nav ref={navRef}>
          <div className="mbl-navbar">
            <a href="/#">Our Products</a>
            <a href="/#">Who we serve</a>
            <a href="/#">Resources</a>
            <a href="/#">Pricing</a>
          </div>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <CloseOutlined style={{ color: "black", fontSize: 30 }} />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <MenuOutlined style={{ color: "black", fontSize: 25 }} />
        </button>
      </div>
    </header>
  );
}
