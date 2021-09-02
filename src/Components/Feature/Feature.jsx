import React from 'react'
// Styled Components
import {
  FeatureContainer,
  FeatureButton
} from './FeatureElement'

function Feature({id}) {
  return (
    <FeatureContainer id={id}>
      <h1>Pizza of the Day</h1>      
      <p>Truffle alfredo sauce topped with 24 carat gold dust.</p>
      <FeatureButton>Order Now</FeatureButton>
    </FeatureContainer>
  )
}

export default Feature
