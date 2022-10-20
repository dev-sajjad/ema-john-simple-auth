import { faCross, faTrash, faTrashAlt, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { handleProductAndCartData } from '../../loaders/loaders';
import { removeFromDb } from '../../utilities/fakedb';
import './ReviewItem.css'

const ReviewItem = ({ product, handleItemDelete }) => {
  console.log(product)
    const {img, name, price, quantity, shipping, id } = product;
    return (
      <div className="review-container">
        <img src={img} alt={name} />
        <div className="review-details-container">
          <div className="review-details">
            <p>
              <b>{name}</b>
            </p>
            <p>
              Price: <b>${price}</b>
            </p>
            <p>
              Quantity: <b>{quantity}</b>
            </p>
            <p>
              Shipping: <b>${shipping}</b>
            </p>
          </div>
          <div className='delete-container'>
            <button className="btn-delete">
              <FontAwesomeIcon className='delete-icon' onClick={() => handleItemDelete(id)} icon={faXmark}></FontAwesomeIcon>
            </button>
          </div>
        </div>
      </div>
    );
};

export default ReviewItem;