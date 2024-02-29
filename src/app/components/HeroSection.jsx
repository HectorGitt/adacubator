import React from 'react'
import styled from 'styled-components';

const HeroSection = () => {
  return (
    <Hero>
        <div>
            <h1>
            <span>Welcome to Adacubator</span>
            <span>Your Gateway to success on Cardano</span>
            </h1>
            <button>Contact Us</button>
        </div>
        <Image/>
    </Hero>
  )
}

export default HeroSection;

const Hero = styled.div`
    
`