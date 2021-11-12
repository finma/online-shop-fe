import NumberFormat from "react-number-format";
import type { TransactionTypes } from "src/type/types";

export const ProductDetail = (props: { transaction: TransactionTypes }) => {
  const { transaction } = props;

  return (
    <div className="mt-6 w-full">
      <h2 className="text-2xl font-bold text-gray-700">Detail Belanja</h2>
      <div className="mt-6 space-y-3">
        <p className="flex justify-between text-lg font-normal">
          <span>Nama Produk</span>
          <span className="font-medium">{transaction.product.name}</span>
        </p>
        <p className="flex justify-between text-lg font-normal">
          <span>Kategori</span>
          <span className="font-medium">{transaction.category.name}</span>
        </p>
        <p className="flex justify-between text-lg font-normal">
          <span>Total Barang</span>
          <span className="font-medium">{transaction.total_item}</span>
        </p>
        <p className="flex justify-between text-lg font-normal">
          <span>Harga Barang</span>
          <span className="font-medium">
            <NumberFormat
              value={transaction.product.price}
              prefix="Rp. "
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
            />
          </span>
        </p>
        <p className="flex justify-between text-lg font-normal">
          <span>Total</span>
          <span className="font-medium">
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
