import React, { useState } from "react";
import login from "../../images/feature6-LoginIcon.svg";
import "./style.css";
import ReactFlagsSelect from "react-flags-select";
import "./flags.css";

const Section1 = () => {
  const [select, setSelect] = useState("US");
  const onSelect = (code) => {
    setSelect(code);
  };
  return (
    <div className="top-header">
      <div className="header">
        <ul className="heading-ul">
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>Careers</a>
          </li>
          <li>
            <a>Help Desk</a>
          </li>
          <li className="login">
            <img src={login} className="login-img" />
            <a>Login</a>
          </li>
          <li>
            
          </li>
          
        </ul>
        <ReactFlagsSelect
              selected={select}
              onSelect={onSelect}
              countries={["US", "SA"]}
              customLabels={{
            US: { primary: "United States (English)" },
            SA: { primary: "Saudi Arabia (Arabic)" }
           
          }}
            />
      </div>
      
    </div>
  );
};

export default Section1;
