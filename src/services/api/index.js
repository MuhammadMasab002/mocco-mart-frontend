import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// const baseUrl = import.meta.env.BACKEND_API_URL;

export const MoccoMartApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api", // baseUrl: http://localhost:8000/api / products
    credentials: "include", // if using cookies
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
    }),
    postProducts: builder.mutation({
      query: (productData) => ({
        url: "/products",
        method: "POST",
        body: productData,
      }),
    }),
    registerUser: builder.mutation({
      query: (data) => ({
        url: "/auth/user/register",
        method: "POST",
        body: data,
      }),
    }),
    loginUser: builder.mutation({
      query: (data) => ({
        url: "/auth/user/login",
        method: "POST",
        body: data,
      }),
    }),
  }),
  // endpoints: EndPointMethods,
});

export const {
  useGetProductsQuery,
  usePostProductsMutation,
  useRegisterUserMutation,
  useLoginUserMutation,
} = MoccoMartApi;
