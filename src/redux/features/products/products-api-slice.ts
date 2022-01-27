import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import API from 'drinksandco/src/config/api';

export interface Product {
  type: string;
  id: string;
  attributes: {
    name: string;
    image_url: string;
    original_unit_price: number;
    current_unit_price: number;
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
  }),
});

export const { useGetProductsQuery } = apiSlice;
