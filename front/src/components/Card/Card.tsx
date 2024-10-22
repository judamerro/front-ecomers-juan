import IProduct from '@/interfaces/IProduct'
import React from 'react'

const Card: React.FC<IProduct> = ({name, price, description, image, stock}) => {
  return (
    <div>
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <p>{description}</p>
        <p>Stock: {stock}</p>
        <p>Price: ${price}</p>
       
       
        
        
    </div>
  )
}

export default Card