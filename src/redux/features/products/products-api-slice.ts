import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import API from 'drinksandco/src/config/api';

export interface Product {
  type: string;
  id: string;
  attributes: {
    name: string;
    image_url: string;
    original_unit_price: string;
    current_unit_price: string;
    appellation: string;
    vintage: string;
  };
}

const baseUrl = API;

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: build => ({
    getProducts: build.query<Product[], void>({
      query: () => ({
        url: 'products',
      }),
      transformResponse: response => response.data,
    }),
    getProduct: build.query<{}, string | void>({
      query: id => ({
        url: `products/${id}`,
      }),
      transformResponse: response => response.data,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductQuery } = apiSlice;
