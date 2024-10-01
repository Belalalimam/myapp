// src/redux/reducers/cartReducer.js

const initialState = {
    cartItems: [], // Array of selected plants
    cartCount: 0, // Total number of items in the cart
    totalCost: 0, // Total cost of all items
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        // Handle adding a plant to the cart
        // Update cartCount and totalCost
        return /* Updated state */;
  
      case 'INCREASE_QUANTITY':
        // Handle increasing quantity of a plant
        // Update cartCount and totalCost
        return /* Updated state */;
  
      case 'DECREASE_QUANTITY':
        // Handle decreasing quantity of a plant
        // Update cartCount and totalCost
        return /* Updated state */;
  
      case 'REMOVE_FROM_CART':
        // Handle removing a plant from the cart
        // Update cartCount and totalCost
        return /* Updated state */;
  
      default:
        return state;
    }
  };
  
  export default cartReducer;
  