import { createApi } from "@reduxjs/toolkit/query/react";
import { CustomBaseQuery } from "./CustomBaseQuery.js";
import { data } from "autoprefixer";
// const baseUrl = import.meta.env.BACKEND_API_URL;

export const MoccoMartApi = createApi({
  reducerPath: "api",
  baseQuery: CustomBaseQuery,
  tagTypes: ["Category"],
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

    getSubCategories: builder.query({
      query: () => "/sub-categories",
    }),

    getCategories: builder.query({
      query: () => "/categories",
      providesTags: ["Category"],
    }),

    createCategory: builder.mutation({
      query: (data) => ({
        url: "/categories",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Category"],
    }),

    // auth api endpoints
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
    logoutUser: builder.mutation({
      query: () => ({
        url: "/auth/user/logout",
        method: "POST",
      }),
    }),
  }),
  // endpoints: EndPointMethods,
});

export const {
  useGetProductsQuery,
  usePostProductsMutation,

  useGetCategoriesQuery,
  useLazyGetCategoriesQuery,
  useCreateCategoryMutation,

  useGetSubCategoriesQuery,

  // auth api hooks
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
} = MoccoMartApi;
