import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import ProductsSlice from './Slice/ProductsSlice';
import thunk from 'redux-thunk';
import rootReducer from './Slice';

const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }),
});

export default store;