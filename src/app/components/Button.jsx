import React from 'react'
import styled from 'styled-components'

const Button = ({text}) => {
  return (
    <ButtonCont>
      {text}
    </ButtonCont>
    )
}

export default Button

const ButtonCont = styled.button`
    padding: 14px 28px;
    font-size: 1.2rem;
    background: linear-gradient(107.64deg, #0098DA -4.02%, #91D8F7 82.79%);
    border: none;
    border-radius: 21px;
    color: white;
`