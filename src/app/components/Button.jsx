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
    padding: 10px 20px;
    background: linear-gradient(107.64deg, #0098DA -4.02%, #91D8F7 82.79%);
    border: none;
    border-radius: 15px;
    color: white;
`