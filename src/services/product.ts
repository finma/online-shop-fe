import axios from "axios";

const ROOT_API = `${process.env.NEXT_PUBLIC_API}/api`;

export const getProducts = async (page?: number) => {
  const url = `${ROOT_API}/products?page=${page}`;
  const res = await axios({ url, method: "GET" }).catch((err: { response: any }) => {
    return err.response;
  });

  return res.data;
};

export const getProductsByCategory = async (category: string | string[] | undefined, page?: number) => {
  const url = `${ROOT_API}/products?category=${category}&page=${page}`;
  const res = await axios({ url, method: "GET" }).catch((err: { response: any }) => {
    return err.response;
  });

  return res.data;
};

export const getProductsBySearch = async (query: string | string[] | undefined, page?: number) => {
  const url = `${ROOT_API}/products?search=${query}&page=${page}`;
  const res = await axios({ url, method: "GET" }).catch((err: { response: any }) => {
    return err.response;
  });

  return res.data;
};

export const getProductDetail = async (slug: any) => {
  const url = `${ROOT_API}/products/${slug}/detail`;
  const res = await axios({ url, method: "GET" }).catch((err: { response: any }) => {
    return err.response;
  });

  return res.data;
};
