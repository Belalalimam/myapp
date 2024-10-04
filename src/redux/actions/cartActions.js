// src/redux/actions/cartActions.js

export const addToCart = (plant) => ({
    type: 'ADD_TO_CART',
    payload: plant,
  });
  
  export const increaseQuantity = (plantId) => ({
    type: 'INCREASE_QUANTITY',
    payload: plantId,
  });

  // Define decreaseQuantity:
  export const decreaseQuantity = (plantId) => ({
    type: 'DECREASE_QUANTITY',
    payload: plantId,
  });

  // Define removeFromCart:
  export const removeFromCart = (plantId) => ({
    type: 'REMOVE_FROM_CART',
    payload: plantId,
  });
  
  
  // Similar actions for decreaseQuantity and removeFromCart
  