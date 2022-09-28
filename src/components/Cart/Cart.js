import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    // const { cart } = props;

  let total = 0;
  let shippingCost = 0;
  let quantity = 0;
  for (const product of cart) { 
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shippingCost = shippingCost + product.shipping;
    }
    const taxString = (total * 0.1).toFixed(2);
    const tax = parseFloat(taxString);
    const grandTotal = total + shippingCost + tax;
    return (
      <div className='cart'>
        <h2>Order Summary</h2>
        <p>Product selects: {quantity}</p>
            <p>Total price: ${total}</p>  
            <p>Shipping Cost: ${shippingCost}</p>
            <p>Tax:  ${tax}</p>
            <h4>Grand Total: ${grandTotal}</h4>
      </div>
    );
};

export default Cart;