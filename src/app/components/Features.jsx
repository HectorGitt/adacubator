import React from 'react'
import Card from './Card'
import styled from 'styled-components'
import support from '../../../public/support_icon.png'
import growth from '../../../public/growth_icon.png'
import connection from '../../../public/connection_icon.png'
import { device } from '../lib/breakpoint'
import line from '../../../public/lines.svg'
import Image from 'next/image'

const Features = () => {
  return (
    <FeaturesCont >
        <h1 data-aos='zoom-in'>Why <span className='waivy'>Adacubator</span> ?</h1>
        <div>
            <Card dataAos='fade-right' title='Capital Support' icon={support} text='We provide the financial backing needed to take your project from concept to reality, helping you overcome any financial barriers to entry'/>
            <Card dataAos='fade-up' title='Ecosystem Growth' icon={growth} text='By focusing exclusively on the Cardano blockchain, we aim to cultivate a thriving ecosystem of innovative solutions and applications.'/>
            <Card dataAos='fade-left' title='Community Connection' icon={connection} text='Join a network of like-minded developers, entrepreneurs, and enthusiasts all working towards the common goal of advancing the Cardano ecosystem.'/>
        </div>
        <Image className="line" src={line} />

    </FeaturesCont>
  )
}

export default Features

const FeaturesCont = styled.div`
    position: relative;
    text-align: center;
    padding: 2rem 0;
    margin: 8rem 0;
    min-height: 80vh;
    padding: 0 5%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    .line {
      position: absolute;
      top: 0;
      width: 100%;
      right: 0;
    }
    h2 {
      font-size: 2rem;
    }
    & > div {
        display: flex;
        justify-content: space-around;
        gap: 2rem;
    }

    @media screen and (${device.sm}) {
      & > div {
        gap: 1rem;
      }
    }

    @media screen and (${device.sm}) {
      
      & > div {
        flex-direction: column;
        align-items: center;
      }
    }
`