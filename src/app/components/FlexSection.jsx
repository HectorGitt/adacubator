"use client"; // This is a client component
import React from 'react'
import styled from 'styled-components'
import Image from 'next/image';
import { device } from '../lib/breakpoint';

const FlexSection = ({text, imgSrc, imgAlt, alternate, children}) => {
  return (
    <Flex data-aos={alternate? 'fade-up-left':'fade-up-right'} className={alternate? 'alternate':''}>
        <div>
            {children}
            <p>
                {text}
            </p>
        </div>
        <div data-aos={alternate? 'fade-up-right':'fade-up-left'} className='image-cont'>
            <Image className='image' src={imgSrc} width={480} height={270} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt={imgAlt} />
        </div>
        <span className='circle'></span>
    </Flex>
  )
}

export default FlexSection

const Flex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem 0;
    gap: 3rem;
    position: relative;
    h1 {
        font-size: 3rem;
        font-weight: 700;
    }
    & > div {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        max-width: 650px;
        width: 100%;
        margin: 0 4rem;
    }
    &.alternate {
        flex-direction: row-reverse;
        .circle {
          left: 90%;
          top: -20%;
        }
    }

    p {
      color: #dadada;
      .white {
        color: white;
      }
    }

    .line {
      position: absolute;
      top: 0;
      right: 0;
    }
    

    @media screen and (${device.md}) {
      margin: 0 10px;
      flex-direction: column;
      align-items: center;
      text-align: center;
      & > div {
        align-items: center;
      }
      &.alternate {
        flex-direction: column;
        .image-cont {
          padding: 1rem;
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