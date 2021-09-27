import React, { useState, useEffect } from "react";
import { getProducts } from "../services/products";




const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts ()
    .then(response => setProducts(response.data))
  }, []);

  return (
    <div>    
      <div className="Produtos">    
      <h1> Mais Vendidos </h1> 
      
      {products && products.map((product) => {
        const { productName, listPrice, stars, imageUrl, price } = product;
        return (
          <>
          <img src= { imageUrl } />
          <h6> {productName} </h6>
          <h6> { stars } </h6>
          <h6> { listPrice } </h6>
          <h6> { price } </h6>
        
          </>
          );
        })}
       
      </div>    
    </div>  
    
  );
};

export default HomePage;