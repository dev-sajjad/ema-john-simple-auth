import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { addToDb, deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  // const [products, setProducts] = useState([]);
  const {products, initialCart} = useLoaderData();

  const [cart, setCart] = useState(initialCart);

  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  }

  // useEffect(() => {
  //   fetch("products.json")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, []);

  // useEffect(() => {
  //   const storedCart = getSavedCart();
  //   const savedCart = [];
    
  //   for (const id in storedCart) {
  //     const addedProduct = products.find((product) => product.id === id);
  //     if (addedProduct) {
  //       const quantity = storedCart[id];
  //       addedProduct.quantity = quantity;
  //       savedCart.push(addedProduct);
  //     }
  //   }
  //   setCart(savedCart);
  // }, [products]);

  const handlerAddToCart = (selectedProduct) => {
    const exsits = cart.find((product) => product.id === selectedProduct.id);
    let newCart = [];
    if (!exsits) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      exsits.quantity = exsits.quantity + 1;
      newCart = [...rest, exsits];
    }

    setCart(newCart);
    addToDb(selectedProduct.id);
  };

  return (
    <div className="shop">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handlerAddToCart={handlerAddToCart}
          ></Product>
        ))}
      </div>
      <div className="order-container">
        <Cart handleClearCart={handleClearCart} cart={cart}>
          <button className="btn-clear" onClick={handleClearCart}>
            Clear Cart
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
