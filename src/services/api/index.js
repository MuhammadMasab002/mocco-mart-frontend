import { createApi } from "@reduxjs/toolkit/query/react";
import { CustomBaseQuery } from "./CustomBaseQuery.js";
import { data } from "autoprefixer";
// const baseUrl = import.meta.env.BACKEND_API_URL;

export const MoccoMartApi = createApi({
  reducerPath: "api",
  baseQuery: CustomBaseQuery,
  tagTypes: ["Category", "SubCategory", "Product"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
      providesTags: ["Product"],
    }),

    createProduct: builder.mutation({
      query: (productData) => ({
        url: "/products",
        method: "POST",
        body: productData,
      }),
      invalidatesTags: ["Product"],
    }),

    updateProduct: builder.mutation({
      query: ([productId, product]) => ({
        url: `/products/${productId}`,
        method: "PUT",
        body: product,
      }),
      invalidatesTags: ["Product"],
    }),

    deleteProduct: builder.mutation({
      query: (productId) => ({
        url: `/products/${productId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),

    getSubCategories: builder.query({
      query: () => "/sub-categories",
      providesTags: ["SubCategory"],
    }),

    createSubCategory: builder.mutation({
      query: (data) => ({
        url: "/sub-categories",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["SubCategory"],
    }),

    deleteSubCategory: builder.mutation({
      query: (subCategoryId) => ({
        url: `/sub-categories/${subCategoryId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["SubCategory"],
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

    deleteCategory: builder.mutation({
      query: (categoryId) => ({
        url: `/categories/${categoryId}`,
        method: "DELETE",
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
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,

  useGetSubCategoriesQuery,
  useCreateSubCategoryMutation,
  useDeleteSubCategoryMutation,

  useGetCategoriesQuery,
  useLazyGetCategoriesQuery,
  useCreateCategoryMutation,
  useDeleteCategoryMutation,

  // auth api hooks
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
} = MoccoMartApi;
