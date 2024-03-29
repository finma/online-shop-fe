/* eslint-disable @typescript-eslint/naming-convention */
import axios from "axios";

const ROOT_API = `${process.env.NEXT_PUBLIC_API}/api`;

export const getPayments = async () => {
  const url = `${ROOT_API}/payments`;
  const res = await axios({ url, method: "GET" }).catch((err: { response: any }) => {
    return err.response;
  });

  return res.data;
};
