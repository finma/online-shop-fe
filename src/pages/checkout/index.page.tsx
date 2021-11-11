/* eslint-disable @typescript-eslint/no-non-null-assertion */
import type { CustomNextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ChekoutConfirmation } from "src/component/CheckoutConfirmation/ChekoutConfirmation";
import { CheckoutDetailProducts } from "src/component/CheckoutDetail/CheckoutDetailProducts";
import { ChekoutDetailPayment } from "src/component/CheckoutDetail/ChekoutDetailPayment";
import { FluidLayout } from "src/layout";

const Index: CustomNextPage = () => {
  const [image, setImage] = useState("");

  const API_IMG = process.env.NEXT_PUBLIC_IMG;
  const src = `${API_IMG}/${image}`;

  useEffect(() => {
    const dataFromLocal = localStorage.getItem("transaction");
    const data = JSON.parse(dataFromLocal!);

    setImage(data.product.image);
  }, []);

  return (
    <>
      <div className="m-auto mt-8 w-2/5">
        <h1 className="text-3xl font-bold text-center text-gray-700">Checkout</h1>
        <div className="flex justify-center mt-5">
          <Image
            loader={() => {
              return src;
            }}
            unoptimized
            src={src}
            alt="Product Image"
            width={400}
            height={260}
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <CheckoutDetailProducts />
        <ChekoutDetailPayment />
        <ChekoutConfirmation />
      </div>
    </>
  );
};

Index.getLayout = FluidLayout;

export default Index;
