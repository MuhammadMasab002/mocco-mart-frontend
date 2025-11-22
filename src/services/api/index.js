import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = import.meta.env.VITE_API_URL

export const MoccoMartApi = createApi({
  reducerPath: "api",
  // baseQuery: CustomBaseQuery({
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl, // your backend base URL
    credentials: "include", // if using cookies
    // prepareHeaders: async (headers) => {
    //   const token = await getToken();
    //   if (token) {
    //     headers.set("Authorization", `Bearer ${token}`);
    //   }
    //   return headers;
    // },
  }),
  endpoints: () => ({}),
  // endpoints: EndPointMethods,
});
