import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  tagTypes: ["Orders", "Products"],
  endpoints: (builder) => ({
    /* getOrders */
    getOrders: builder.query({
      query: () => "/orders",
      //transformResponse: (res) => console.log(res),
      providesTags: ["Orders"],
    }),
    /* deleteOrders */
    deleteOrders: builder.mutation({
      query: ({ order }) => ({
        url: `/orders/${order.id}`,
        method: "DELETE",
        body: order,
      }),
      invalidatesTags: ["Orders"],
    }),

    /* getProducts */
    getProducts: builder.query({
      query: () => "/products",
      //transformResponse: (res) => console.log(res),
      providesTags: ["Products"],
    }),
    /* deleteProducts */
    deleteProducts: builder.mutation({
      query: ({ product }) => ({
        url: `/products/${product.id}`,
        method: "DELETE",
        body: product,
      }),
      invalidatesTags: ["Products"],
    }),
  }),
});

export const {
  useGetOrdersQuery,
  useDeleteOrdersMutation,
  useGetProductsQuery,
  useDeleteProductsMutation,
} = api;
