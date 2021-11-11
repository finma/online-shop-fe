/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useEffect, useState } from "react";
import NumberFormat from "react-number-format";

export const CheckoutDetailProducts = () => {
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    category: { name: "" },
  });
  const [transaction, setTransaction] = useState({
    total_item: 0,
    total_price: 0,
  });

  useEffect(() => {
    const dataFromLocal = localStorage.getItem("transaction");
    const data = JSON.parse(dataFromLocal!);

    setProduct(data.product);
    setTransaction(data.transaction);
  }, []);
  return (
    <div className="mt-6 w-full">
      <h2 className="text-xl font-bold text-gray-700">Detail Belanja</h2>
      <div className="mt-6 space-y-3">
        <p className="flex justify-between text-lg font-normal">
          <span>Nama Produk</span>
          <span>{product.name}</span>
        </p>
        <p className="flex justify-between text-lg font-normal">
          <span>Kategori</span>
          <span>{product.category.name}</span>
        </p>
        <p className="flex justify-between text-lg font-normal">
          <span>Total Barang</span>
          <span>{transaction.total_item}</span>
        </p>
        <p className="flex justify-between text-lg font-normal">
          <span>Harga Barang</span>
          <span>
            <NumberFormat
              value={product.price}
              prefix="Rp. "
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
            />
          </span>
        </p>
        <p className="flex justify-between text-lg font-normal">
          <span>Total</span>
          <span>
            <NumberFormat
              value={transaction.total_price}
              prefix="Rp. "
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
            />
          </span>
        </p>
      </div>
    </div>
  );
};
