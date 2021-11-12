import cx from "classnames";
import Image from "next/image";
import { PaymentDetail } from "src/component/TransactionDetail/PaymentDetail";
import { ProductDetail } from "src/component/TransactionDetail/ProductDetail";
import type { TransactionTypes, UserTypes } from "src/type/types";

interface TransactionDetailProps {
  data: {
    transaction: TransactionTypes;
    user: UserTypes;
  };
}

export const TransactionDetail = (props: TransactionDetailProps) => {
  const API_IMG = process.env.NEXT_PUBLIC_IMG;
  const src = `${API_IMG}/${props.data.transaction.product.image}`;

  const classStatus = cx({
    "py-3 px-6 rounded-r-full rounded-l-full": true,
    "text-green-800 bg-green-100": props.data.transaction.status === "success",
    "text-yellow-800 bg-yellow-100": props.data.transaction.status === "pending",
    "text-red-800 bg-red-100": props.data.transaction.status === "failed",
  });

  return (
    <main className="box-border py-16 px-12 w-1/2">
      <h1 className="text-4xl font-bold text-blue-900">Detail Transaksi</h1>
      <div className="flex justify-between items-center mt-7">
        <div className="flex items-center space-x-5">
          <Image
            loader={() => {
              return src;
            }}
            unoptimized
            src={src}
            alt="Product Image"
            width={180}
            height={130}
            className="object-cover w-full h-full rounded-lg"
          />
          <div className="flex flex-col">
            <span className=" text-2xl font-bold text-gray-700">{props.data.transaction.product.name}</span>
            <span className="text-lg font-normal text-gray-500">Kategori : {props.data.transaction.category.name}</span>
          </div>
        </div>
        <div className={classStatus}>{props.data.transaction.status}</div>
      </div>
      <ProductDetail transaction={props.data.transaction} />
      <PaymentDetail payment={props.data.transaction.payment} />
    </main>
  );
};
