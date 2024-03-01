import Image from 'next/image';
import React from 'react'
import styled from 'styled-components';
import hero from '../../../public/hero.png';
import { device } from '../lib/breakpoint';
import Button from './Button';

const HeroSection = () => {
  return (
    <Hero>
        <div>
            <h1>
            <span className='welcome'>Welcome to Adacubator</span><br/>
            Your Gateway to success on <span className='cardano'>Cardano</span>
            </h1>
            <Button text={'Contact Us'} />
        </div>
        <div className='image-cont'>
            <Image src={hero} layout='responsive' />
        </div>
        
    </Hero>
  )
}

export default HeroSection;

const Hero = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem 0;
    gap: 3rem;
    h1 {
        font-size: 3rem;
        font-weight: 700;
    }
    button {
        align-self: flex-start;
    }
    & > div {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        max-width: 650px;
        width: 100%;
        margin: 0 4rem;
    }
    .welcome, .cardano {
        background: linear-gradient(107.64deg, #0098DA -4.02%, #91D8F7 82.79%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .welcome {
        font-size: 1.5rem;
    }
    @media screen and (${device.md}) {
      margin: 0 10px;
      flex-direction: column;
      align-items: center;
      text-align: center;
      & > div {
        align-items: center;
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