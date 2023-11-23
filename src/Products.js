import React from 'react'
import Productsdata from './Productsdata';
import { Link } from 'react-router-dom';

function Products () {
  return (
    <>
    <div>
      Products
    </div>
    {
    Productsdata.map((eachUser)=>{
        const{ImageURL,Name,Price,id}=eachUser
    return <Link to={`/Products/${id}`} key={id}>
   <div >
        <h1>{Name}</h1>
        <h1>{Price}</h1>
        <img src={ImageURL} style={{height:300,width:300}}/> 
    </div>
    </Link>
   })}
    </>
  )
}

export default Products
