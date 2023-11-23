import React from 'react'
import { useParams } from 'react-router-dom'
import Productsdata from './Productsdata';

const Productsview = () => {
    const params = useParams();

    const filterProducts = Productsdata.find((eachUser)=>params.id == eachUser.id)
    console.log(filterProducts)
  return (
    <>
    <div>
      Productsview
    </div>
    <div>
        <h1>{filterProducts.Name}</h1>
        <img src={filterProducts.ImageURL}/>
        <h3>{filterProducts.Price}</h3>
    </div>
    </>
  )
}

export default Productsview
