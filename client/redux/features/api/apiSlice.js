"use client";
import verifyJwtToken from "@/utils/tokenVerify";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = process.env.NEXT_PUBLIC_HOST;
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    // baseUrl:
<<<<<<< HEAD
    // process.env.NODE_ENV === "production" ? baseUrl : "http://localhost:5000",
=======
    //   process.env.NODE_ENV === "production" ? baseUrl : "http://localhost:5000",
>>>>>>> 64025c27ecdae3117a98fcf2f0878e4931d0dcbf
    baseUrl: "https://c-6sjz.vercel.app",

    prepareHeaders: async (headers, { getState, endpoint }) => {
      let token = getState();
      token = token?.auth?.accessToken;
      if (token) {
        // verify Token
        // const data = await verifyJwtToken(token);
        // if (!data) {
        //   localStorage.removeItem("auth");
        //   window.location.href = "/login";
        //   return headers;
        // }
        headers.set("authorization", `${token}`);
      }
      return headers;
    },
  }),
  tagTypes: [
    "Product",
    "Categories",
    "Brand",
    "Subcategory",
    "Auth",
    "Image",
    "Country",
    "ProductGroup",
    "Testimonial",
    "Page",
    "Store",
    "Click",
    "Wholesaler",
    "Order",
<<<<<<< HEAD
    "Settings",
=======
>>>>>>> 64025c27ecdae3117a98fcf2f0878e4931d0dcbf
  ],
  endpoints: (builder) => ({}),
});
