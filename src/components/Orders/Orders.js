import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'

const Orders = () => {
    // get loader data from loaders
    const { initialCart } = useLoaderData();

    // previous stored cart display
    const [cart, setCart] = useState(initialCart);

    const handleClearCart = () => {
      setCart([]);
      deleteShoppingCart()
    };

    const handleItemDelete = (id) => {
        const remaining = cart.filter(product => product.id !== id)
        setCart(remaining);
        removeFromDb(id);
        
    }
    
    return (
      <div className="shop">
        <div className="orders-container">
          {cart.map((product) => (
            <ReviewItem
              key={product.id}
              product={product}
              handleItemDelete={handleItemDelete}
            ></ReviewItem>
          ))}
          {cart.length === 0 ? (
            <h2>
              No items found for review! <Link to="/shop">Go for shopping...</Link>
            </h2>
          ) : undefined}
        </div>
        <div className="order-container">
          <Cart handleClearCart={handleClearCart} cart={cart}></Cart>
        </div>
      </div>
    );
};

export default Orders;