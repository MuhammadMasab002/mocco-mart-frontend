import { createApi } from "@reduxjs/toolkit/query/react";
import { CustomBaseQuery } from "./CustomBaseQuery.js";
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
      invalidatesTags: ["Product", "Category"],
    }),

    updateProduct: builder.mutation({
      query: ([productId, product]) => ({
        url: `/products/${productId}`,
        method: "PUT",
        body: product,
      }),
      invalidatesTags: ["Product", "Category"],
    }),

    deleteProduct: builder.mutation({
      query: (productId) => ({
        url: `/products/${productId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product", "Category"],
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

    updateSubCategory: builder.mutation({
      query: ([subCategoryId, subCategory]) => ({
        url: `/sub-categories/${subCategoryId}`,
        method: "PUT",
        body: subCategory,
      }),
      invalidatesTags: ["SubCategory", "Product"],
    }),

    deleteSubCategory: builder.mutation({
      query: (subCategoryId) => ({
        url: `/sub-categories/${subCategoryId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["SubCategory", "Category", "Product"],
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

    updateCategory: builder.mutation({
      query: ([categoryId, category]) => ({
        url: `/categories/${categoryId}`,
        method: "PUT",
        body: category,
      }),
      invalidatesTags: ["Category", "SubCategory", "Product"],
    }),

    deleteCategory: builder.mutation({
      query: (categoryId) => ({
        url: `/categories/${categoryId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Category", "SubCategory", "Product"],
    }),

    // upload image
    uploadImage: builder.mutation({
      query: (imageFile) => {
        return {
          url: "/upload-image",
          method: "POST",
          body: imageFile,
        };
      },
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
  useUpdateSubCategoryMutation,
  useDeleteSubCategoryMutation,

  useGetCategoriesQuery,
  useLazyGetCategoriesQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,

  useUploadImageMutation,

  // auth api hooks
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
} = MoccoMartApi;
