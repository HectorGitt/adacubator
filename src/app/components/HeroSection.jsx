import Image from 'next/image';
import React from 'react'
import styled from 'styled-components';
import hero from '../../../public/hero.png';
import { device } from '../lib/breakpoint';
import Button from './Button';
import Nav from './Nav';

const HeroSection = () => {
  return (
    <Hero>
        <Nav />
        <div className='hero'>
            <div data-aos='fade-left' data-aos-delay={200}>
                <h1>
                <span className='welcome'>Welcome to Adacubator</span><br/>
                Your Gateway to success on<br /><span className='waivy'>Cardano</span>
                </h1>
                <Button text={'Contact Us'} />
            </div>
            <div data-aos='fade-right' data-aos-delay={400} className='image-cont'>
                <Image src={hero} layout='responsive' />
            </div>
            <span className='circle'></span>
        </div>
        
    </Hero>
  )
}

export default HeroSection;

const Hero = styled.div`
    background: #1325539b;
    .hero{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 3rem 0;
        gap: 3rem;
    }
    h1 {
        font-size: 4rem;
        font-weight: 700;
        .welcome {
            font-size: 1.5rem;
            background: linear-gradient(107.64deg, #0098DA -4.02%, #91D8F7 82.79%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
    button {
        margin-top: 1rem;
        align-self: self-start;
    }
    .hero > div {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        max-width: 650px;
        width: 100%;
        margin: 0 4rem;
        z-index: 2;
    }
    @media screen and (${device.md}) {
    button {
        align-self: center;
    }
    .hero {
        margin: 0 10px;
        flex-direction: column;
        align-items: center;
        text-align: center;
        & > div {
        align-items: center;
        }
    }

      .image-cont {
        justify-content: center;
        align-self: center;
        padding: 1rem;
        img {
              max-width: 100%;
              height: auto;
          }
      }
    }


`