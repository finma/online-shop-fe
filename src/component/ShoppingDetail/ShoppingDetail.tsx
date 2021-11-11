/* eslint-disable react/jsx-handler-names */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable tailwindcss/classnames-order */
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import { useCart } from "react-use-cart";
import { getPayments } from "src/services/payment";
import type { PaymentTypes } from "src/type/types";

import { PaymentItem } from "./PaymentItem";

export const ShoppingDetail = (props: { product: any }) => {
  const { product } = props;
  const { addItem } = useCart();
  const router = useRouter();

  const [counter, setCounter] = useState(1);
  const [price, setPrice] = useState(product.price);
  const [payments, setPayments] = useState([]);
  const [paymentId, setPaymentId] = useState({});

  const getPaymentList = useCallback(async () => {
    const res = await getPayments();

    // console.log(res);

    setPayments(res.data);
  }, []);

  useEffect(() => {
    getPaymentList();
  }, [getPaymentList]);

  const handlePaymentChange = (payment: any) => {
    setPaymentId(payment);
  };

  const handlePlus = () => {
    if (counter > 0 && counter < product.stock) {
      setCounter(counter + 1);
      setPrice(price + product.price);
    }
  };

  const handleMin = () => {
    if (counter > 1 && counter <= product.stock) {
      setCounter(counter - 1);
      setPrice(price - product.price);
    }
  };

  const handleCart = () => {
    addItem(product, counter);
    router.push("/cart");
  };

  const handleSubmit = () => {
    const data = {
      transaction: {
        product_id: product.id,
        payment_id: paymentId,
        total_item: counter,
        total_price: price,
      },
      product,
    };

    localStorage.setItem("transaction", JSON.stringify(data));
    // console.log("data", data);
  };

  return (
    <>
      <fieldset id="paymentMethod" className=" payment p-4 w-3/4 rounded-lg shadow-md">
        <h3 className="mb-3 text-lg font-medium">Metode Pembayaran</h3>
        {payments.map((item: PaymentTypes) => {
          return (
            <PaymentItem
              key={item.id}
              payment={item}
              onChange={() => {
                return handlePaymentChange(item);
              }}
            />
          );
        })}
      </fieldset>
      <div className="p-4 w-3/4 rounded-lg shadow-md mt-4">
        <h3 className="mb-3 text-lg font-medium">Detail Belanja</h3>
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <button onClick={handleMin} className="text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
            <span className="text-lg text-gray-500">{counter}</span>
            <button onClick={handlePlus} className="text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
          <p className="text-sm text-gray-400">
            Stok <span className="text-base font-medium text-gray-600">{product.stock}</span>
          </p>
        </div>
        <div className="mt-6 mb-4">
          <div className="flex justify-between">
            <span className="text-sm text-gray-400">Total harga</span>
            <span className="text-base font-medium text-gray-600">
              <NumberFormat value={price} prefix="Rp. " thousandSeparator="." decimalSeparator="," displayType="text" />
            </span>
          </div>
        </div>
        <button
          onClick={handleCart}
          type="button"
          className="flex justify-center items-center py-2 px-6 mb-3 w-full text-blue-600 hover:text-white hover:bg-blue-600 rounded-lg border-2 border-blue-600 transition duration-200 ease-in focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>{" "}
          Keranjang
        </button>
        <button
          onClick={handleSubmit}
          className=" flex justify-center items-center py-2 px-4 w-full text-base font-semibold text-center text-white bg-blue-600 hover:bg-blue-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200 shadow-md transition duration-200 ease-in focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>{" "}
          Beli
        </button>
      </div>
    </>
  );
};
