"use client";
import Image from "next/image";
import styled from "styled-components";
import Nav from "./components/Nav";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";

export default function Home() {
  return (
    <Main>
      <Nav/>
      <HeroSection />
      <Features/>
    </Main>
  );
}
const Main = styled.main`

`
