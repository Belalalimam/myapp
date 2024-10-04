// // src/components/ProductListing.js

// import React from 'react';
// import { connect } from 'react-redux';
// import { addToCart } from '../redux/actions/cartActions';

// const ProductListing = ({ plants, addToCart }) => {
//   return (
//     <div className="product-listing">
//       {plants.map((plant) => (
//         <div key={plant.id} className="plant-card">
//           <img src={plant.thumbnail} alt={plant.name} />
//           <h3>{plant.name}</h3>
//           <p>${plant.price}</p>
//           <button onClick={() => addToCart(plant)}>Add to Cart</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// const mapDispatchToProps = (dispatch) => ({
//   addToCart: (plant) => dispatch(addToCart(plant)),
// });

// export default connect(null, mapDispatchToProps)(ProductListing);


import React from 'react';
import { connect } from 'react-redux';

const ProductListing = ({ products }) => {
  if (!products) {
    return <p>Loading products...</p>; // Handle loading state
  }

  return (
    <div>
      {products.length > 0 ? (
        products.map(product => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </div>
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products || [], // Ensure default to an empty array if undefined
});

export default connect(mapStateToProps)(ProductListing);
