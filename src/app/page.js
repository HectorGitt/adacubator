"use client";
import Image from "next/image";
import styled from "styled-components";
import Nav from "./components/Nav";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import Showcase from "./components/Showcase";
import Banner from "./components/Banner";
import FlexSection from "./components/FlexSection";
import second from "../../public/second.png";
import third from "../../public/third.png";
import Footer from "./components/Footer";
import line from '../../public/lines.svg'
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      offset: 200,
    });
    AOS.refresh();
  }, [])
  return (
    <Main>
      <Nav/> 
      <HeroSection />
      <FlexSection alternate={true} title="About Us" imgSrc={second} imgAlt="about us" >
        <h1>Accelerate & Boost Your Project on <span className="waivy">Cardano</span></h1>
        <p>At AdaCubator, we're driven by a singular mission: <span className="white">to accelerate the growth of the Cardano blockchain and its surrounding ecosystems.</span> Our focus is on empowering innovators and entrepreneurs like you, who are at the forefront of building within the Cardano ecosystem.</p>
      </FlexSection>
      <FlexSection title="About Us" imgSrc={third} imgAlt="about us" >
        <h1>Our <span className="waivy">Mission</span></h1>
        <Image className="line" src={line} />
        <p>We believe in the transformative power of Cardano and its ability to redefine the landscape of blockchain technology. That's why AdaCubator is dedicated to providing the necessary capital and resources to the most promising teams venturing into this space. Our goal is to not just fuel your project's journey, but to ensure its sustainable growth and success within the Cardano ecosystem.</p>
      </FlexSection>
      <Features/>
      <Banner />
      <Showcase />
      <Footer/>
    </Main>
  );
}
const Main = styled.main`

`
