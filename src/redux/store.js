// // src/redux/store.js

// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from './reducers'; // Combine your reducers here

// const store = createStore(rootReducer, applyMiddleware(thunk));

// export default store;


import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/cartReducer'; // Make sure this path is correct

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production', // Enables Redux DevTools in development
});

export { store };

