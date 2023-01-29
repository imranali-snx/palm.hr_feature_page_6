import * as React from "react";

import TopHeader from "./TopHeader";
import Header from "./Header";
import Section1 from "../pages/Section1";
import Section2 from "../pages/Section2";
import Section3 from "../pages/Section3";
import Section4 from "../pages/Section4";
import Section5 from "../pages/Section5";
import Section6 from "../pages/Section6";
import Section7 from "../pages/Section7";
import Section8 from "../pages/Section8";
import Section9 from "../pages/Section9";
import Section10 from "./Section10";
import Section11 from "./Section11";
import Footer from "./Footer";

import "../styles/global.css";

const IndexPage = () => {
  return (
    <div>
     <TopHeader />
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9/>
      <Section10 />
      <Section11 />
      <Footer />
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Palm HR</title>;