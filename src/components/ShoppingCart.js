// src/components/ShoppingCart.js

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../redux/actions/cartActions';

const ShoppingCart = ({ cartItems, increaseQuantity, decreaseQuantity, removeFromCart }) => {
  return (
    <div className="shopping-cart">
      <h2>Your Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.thumbnail} alt={item.name} />
          <div className="item-details">
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <div className="quantity-controls">
              <button onClick={() => decreaseQuantity(item.id)}>−</button>
              <span>{item.quantity}</span>
              <button onClick={() => increaseQuantity(item.id)}>+</button>
            </div>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <p>Total Cost: ${/* Calculate total cost here */}</p>
      <button className="checkout-button">Coming Soon</button>
      <Link to="/products">
        <button className="continue-shopping-button">Continue Shopping</button>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

const mapDispatchToProps = (dispatch) => ({
  increaseQuantity: (plantId) => dispatch(increaseQuantity(plantId)),
  decreaseQuantity: (plantId) => dispatch(decreaseQuantity(plantId)),
  removeFromCart: (plantId) => dispatch(removeFromCart(plantId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);

