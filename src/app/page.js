"use client";
import Image from "next/image";
import styled from "styled-components";
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
      <HeroSection />
      <FlexSection id='about' alternate={true} title="About Us" imgSrc={second} imgAlt="about us" >
        <h1>Accelerate & Boost <br/> Your Project on<br/><span className="waivy">Cardano</span></h1>
        <p>At AdaCubator, we&lsquo;re driven by a singular mission: <span className="white">to accelerate the growth of the Cardano blockchain and its surrounding ecosystems.</span> Our focus is on empowering innovators and entrepreneurs like you, who are at the forefront of building within the Cardano ecosystem.</p>
      </FlexSection>
      <FlexSection id='mission' title="About Us" imgSrc={third} imgAlt="about us" >
        <h1>Our <span className="waivy">Mission</span></h1>
        <Image className="line" imgAlt='line' src={line} />
        <p>We believe in the transformative power of Cardano and its ability to redefine the landscape of blockchain technology. That&lsquo;s why AdaCubator is dedicated to providing the necessary capital and resources to the most promising teams venturing into this space. Our goal is to not just fuel your project&lsquo;s journey, but to ensure its sustainable growth and success within the Cardano ecosystem.</p>
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
