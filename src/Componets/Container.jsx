import React from 'react'
import Card from './Card'

import product2 from "../assets/product2.png"
import product3 from "../assets/product3.jpg"
import product4 from "../assets/product4.png"
import product5 from "../assets/product5.png"
import product6 from "../assets/product6.webp"
import product7 from "../assets/product7.png"




const productDetails = [
    {img: product2, title: "Air Max", price: "$450"},
    {img: product3, title: "High Top", price: "$800"},
    {img: product4, title: "Sneaker", price: "$1150"},
    {img: product5, title: "Foot Ball", price: "$1000"},
    {img: product6, title: "Crocs", price: "$950"},
    {img: product7, title: "Classic", price: "$1500"}
]

const Container = ({setProductCount}) => {


  return (

    <div className="row product-container g-0 d-flex justify-content-center">
        {
            productDetails.map((product , index) =>{
                return <Card key ={index} setProductCount ={setProductCount} img={product.img} 
                title={product.title} price={product.price} />
}) 
        }
        
        </div>
  )
}

export default Container