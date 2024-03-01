import React from 'react'
import Card from './Card'
import styled from 'styled-components'

const Features = () => {
  return (
    <FeaturesCont>
        <h2>Why <span className='waivy'>Adacubator</span></h2>
        <div>
            <Card title='Feature 1' text='We provide the financial backing needed to take your project from concept to reality, helping you overcome any financial barriers to entry'/>
            <Card title='Feature 2' text='We provide the financial backing needed to take your project from concept to reality, helping you overcome any financial barriers to entry'/>
            <Card title='Feature 3' text='We provide the financial backing needed to take your project from concept to reality, helping you overcome any financial barriers to entry'/>
        </div>
    </FeaturesCont>
  )
}

export default Features

const FeaturesCont = styled.div`
    text-align: center;
    & > div {
        display: flex;
        justify-content: space-around;
    }
`