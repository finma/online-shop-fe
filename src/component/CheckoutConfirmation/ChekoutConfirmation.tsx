/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable react/jsx-handler-names */
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { setTransaction } from "src/services/transaction";

export const ChekoutConfirmation = () => {
  const [token, setToken] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const tokenFromLocal = localStorage.getItem("token");

    if (tokenFromLocal) {
      const token = Buffer.from(tokenFromLocal, "base64").toString("binary");

      setToken(token);
    }
  }, []);

  const handleSubmit = async () => {
    const dataFromLocal = localStorage.getItem("transaction");
    const data = JSON.parse(dataFromLocal!);
    const { product_id, payment_id, total_item, total_price, category_id } = data.transaction;
    const transaction = {
      product_id,
      category_id,
      total_item,
      total_price,
      payment_id: payment_id.id,
    };

    await setTransaction(transaction, token);

    router.push("/");
    localStorage.removeItem("transaction");
  };

  return (
    <div className="mt-10 mb-16">
      <label className="flex items-center mb-10 text-lg">
        <input
          type="checkbox"
          checked={checkbox}
          onChange={() => {
            return setCheckbox(!checkbox);
          }}
        />
        <span className="block ml-3 font-medium cursor-pointer">Sudah melakukan pembayaran?</span>
      </label>
      <button
        onClick={handleSubmit}
        className=" flex justify-center items-center py-2 px-4 text-base font-semibold text-center text-white bg-blue-600 hover:bg-blue-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200 shadow-md transition duration-200 ease-in focus:outline-none"
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
        Konfirmasi Pembayaran
      </button>
    </div>
  );
};
