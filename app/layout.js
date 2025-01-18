'use client'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { CookiesProvider, useCookies } from "react-cookie";
import { SWRConfig } from 'swr';
import { unstable_serialize } from 'swr' 
import { unstable_serialize as infinite_unstable_serialize } from 'swr/infinite'
import { parseCookies } from 'nookies'
import { useEffect } from "react";
import { isTokenExpired } from "@/helper/auth";


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001/',
  headers: {
    'Content-Type': 'application/json',
    // 'Authorization': `Bearer ${parseCookies().access_token}` || ''
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = parseCookies().access_token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


const fetcher = async (url) => {
  return await axiosInstance.get(url).then((response) => response.data);
};

// console.log(parseCook)

export default function RootLayout({ children }) {
  const [_, __, removeCookie] = useCookies(['access_token', 'role'])
  // const axiosInstance = axios.create({
  //   baseURL: 'http://localhost:3001/',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${parseCookies().access_token}` || ''
  //   },
  // });

  useEffect(() => {
    if(isTokenExpired(parseCookies().access_token)) {
      document.cookie = "access_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;"
      document.cookie = "role=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;"
    }
  }, [])

  return (
    <html className={``}>
    <body className="">
      <CookiesProvider>
        <Header /> {/* Move Header inside the body */}
        <main className="max-w-screen-md mx-auto">
          <SWRConfig
            value={{
              fetcher,
              refreshInterval: 5000, // Automatically refresh the data every 5 seconds
              revalidateOnFocus: true, // Revalidate when the window gains focus
            }}
          >
              {children}
          </SWRConfig>  
        </main> {/* Wrap children in a main tag for semantic structure */}
      </CookiesProvider>
      <ToastContainer />
    </body>
  </html>
  );
}
