import React, { useState, useEffect } from "react";
import { getProducts } from "../../services/products";
import './style.css';

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((response) => setProducts(response.data));
  }, []);

  return (
    <div>
      <div className="Produtos">
        <div className="ProdutosContent">
          {products &&
            products.map((product) => {
              const { productName, listPrice, stars, imageUrl, price } =
                product;
              return (
                <div className="ProdutosContentItem">
                  <img src={imageUrl} />
                  <h6> {productName} </h6>
                  <h6> {stars} </h6>
                  <h6> {listPrice} </h6>
                  <h6> {price} </h6>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Product;