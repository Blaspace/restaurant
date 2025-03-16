
import React from "react";
import Nav from "../../components/Nav";
import HomeHeader from "./HomeHeader";
import "./home.css"
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "../../components/ThirdSection";
import FourthSection from "./FourthSection";
import FifthSection from "./FifthSection";
import SixthSection from "./SixthSection";
import SeventhSection from "./SeventhSection";
import Footer from "../../components/Footer";
import TopSection from "../../components/TopSection";

function Home() {
  return (
    <div>
      <TopSection/>
      <Nav />
      <HomeHeader/>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      <FifthSection/>
      <SixthSection/>
      <SeventhSection/>
      <Footer/>
    </div>
  );
}

export default Home;
