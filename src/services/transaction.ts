/* eslint-disable @typescript-eslint/naming-convention */
import axios from "axios";
import type { CheckoutTypes } from "src/type/types";

const ROOT_API = `${process.env.NEXT_PUBLIC_API}/api`;

export const setTransaction = async (data: CheckoutTypes, token: any) => {
  const url = `${ROOT_API}/checkout/transactions`;
  const headers = { Authorization: token };

  const res = await axios({ url, method: "POST", data, headers }).catch((err: { response: any }) => {
    return err.response;
  });

  return res.data;
};
