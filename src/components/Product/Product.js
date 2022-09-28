import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React from 'react';
import './Product.css'


function Product({ product, handlerAddToCart }) {
  // const { product, handlerAddToCart } = props;
  const { img, name, price, ratings, seller } = product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <h4 style={{ marginTop: "-10px" }}>Price: ${price}</h4>
        <p>
          <small>Seller: {seller}</small>
        </p>
        <p>Ratings: {ratings}</p>
      </div>
      <button onClick={() => handlerAddToCart(product)} className="cart-btn">
        <p>Add to Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
}

export default Product;