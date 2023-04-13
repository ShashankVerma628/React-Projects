import React from "react";
import "./shop.css";
import Product from "./Product";
import { PRODUCTS } from "../../products";

const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Shopping Cart Page</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
