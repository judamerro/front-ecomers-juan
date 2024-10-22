import React from 'react'
import productsToPreLoad from "@/Helpers/products";
import Card from '../Card/Card';

const CardList = () => {
    const products = productsToPreLoad;
  return (
    <div>
        {
                products &&
                products.map((product)=>{
                    return(
                        <Card
                            key={product.id} {...product}
                        /> 
                    )
                })
            }
    </div>
  )
}

export default CardList