import * as React from "react";
import Footer from "../components/footer";
import Hero from "../components/hero";
import NavBar from "../components/navBar";

const About = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <div className="flex-1"></div>
      <Footer />{" "}
    </>
  );
};

export default About;
