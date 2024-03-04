"use client"; // This is a client component
import React from 'react'
import styled from 'styled-components'
import Image from 'next/image';
import { device } from '../lib/breakpoint';

const FlexSection = ({id, text, imgSrc, imgAlt, alternate, children}) => {
  return (
    <Flex id={id}  className={alternate? 'alternate':''}>
        <div data-aos={alternate? 'fade-left':'fade-right'}>
            {children}
            <p>
                {text}
            </p>
        </div>
        <div data-aos={alternate? 'fade-right':'fade-left'} className='image-cont'>
            <Image className='image' src={imgSrc} alt={imgAlt} />
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
        font-size: 2.5rem;
        font-weight: 700;
        width: 30rem;
    }
    & > div {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        max-width: 650px;
        width: 100%;
        margin: 0 4rem;
        flex: 1;
    }
    &.alternate {
        flex-direction: row-reverse;
        .circle {
          left: 90%;
          top: -20%;
        }
    }

    p {
      color: #D2EAF5;
      .white {
        color: white;
      }
    }

    .line {
      position: absolute;
      top: 0;
      right: 0;
    }
    .image {
      max-width: 100%;
      height: auto;
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