import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'


const FlexSection = ({title, ParagraphText, imageSrc }) => {
  return (
    <Flex>
        <Image/>
        <div>
            <h2>{title}</h2>
            <p>{ParagraphText}</p>
        </div>
    </Flex>
  )
}

export default FlexSection

const Flex = styled.div`
    
`