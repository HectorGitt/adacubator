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
    
`