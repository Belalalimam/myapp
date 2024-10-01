// src/redux/actions/cartActions.js

export const addToCart = (plant) => ({
    type: 'ADD_TO_CART',
    payload: plant,
  });
  
  export const increaseQuantity = (plantId) => ({
    type: 'INCREASE_QUANTITY',
    payload: plantId,
  });
  
  // Similar actions for decreaseQuantity and removeFromCart
  