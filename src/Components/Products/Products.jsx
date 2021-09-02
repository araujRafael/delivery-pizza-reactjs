import React from 'react'
// Styled Components
import {
  ProductContainer,
  ProductHeading,
  ProductWrapper,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductTitle,
  ProductDesc,
  ProductPrice,
  ProductButton
} from './ProductsElements'

function Products({heading,data,id}) {
  return (
    <ProductContainer >
      <ProductHeading id={id}>{heading}</ProductHeading>
      <ProductWrapper>
        {
          data.map( (product , index) => {
            return (
              <ProductCard key={index}>
                <ProductImg src={product.img} alt={product.alt}/>
                <ProductInfo>
                  <ProductTitle>{product.name}</ProductTitle>
                  <ProductDesc>{product.desc}</ProductDesc>
                  <ProductPrice>{product.price}</ProductPrice>
                  <ProductButton>{product.button}</ProductButton>
                </ProductInfo>
              </ProductCard>
            )
          })
        }
      </ProductWrapper>
    </ProductContainer>
  )
}

export default Products
