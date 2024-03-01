import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import cardBox from '../../../public/card_box.png'

const Card = ({title, icon, text, dataAos}) => {
  return (
    <CardCont data-aos={dataAos}>
        <Image className='icon' src={icon} />
        <h3 className='waivy'>{title}</h3>
        <p>{text}</p>
        <Image className='card-image' src={cardBox} />
    </CardCont>
  )
}

export default Card

const CardCont = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding:0 2rem;
    max-width: 400px;
    min-height: 250px;
    position: relative;
    background-color:#11264b ;
    .icon {
      width: 3rem;
      height: auto;
    }
    h3 {
        font-size: 1.3rem;
    }
    p {
        font-size: 1rem;
        line-height: 1.6;
    }
    .card-image {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      
    }
`