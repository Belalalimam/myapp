// src/components/ProductListing.js

import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';

const ProductListing = ({ plants, addToCart }) => {
  return (
    <div className="product-listing">
      {plants.map((plant) => (
        <div key={plant.id} className="plant-card">
          <img src={plant.thumbnail} alt={plant.name} />
          <h3>{plant.name}</h3>
          <p>${plant.price}</p>
          <button onClick={() => addToCart(plant)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addToCart: (plant) => dispatch(addToCart(plant)),
});

export default connect(null, mapDispatchToProps)(ProductListing);
