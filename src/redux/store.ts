import { configureStore } from '@reduxjs/toolkit';
import productReducer from 'drinksandco/src/redux/features/products/products-slice';
import { apiSlice } from 'drinksandco/src/redux/features/products/products-api-slice';

export const store = configureStore({
  reducer: {
    products: productReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
