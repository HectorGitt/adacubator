import React from 'react'
import styled from 'styled-components'

const Card = ({title, text}) => {
  return (
    <CardCont>
        <h3>{title}</h3>
        <p>{text}</p>
    </CardCont>
  )
}

export default Card

const CardCont = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid;
    padding: 2rem;
    max-width: 300px;
    
    border-image: linear-gradient(107.64deg, #0098DA -4.02%, #91D8F7 82.79%);
    background: transparent;
    h3 {
        font-size: 1.5rem;
    }
    p {
        color: #c0c0c0cd;
    }
`