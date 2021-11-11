import Link from "next/link";
import NumberFormat from "react-number-format";
import type { ProductTypes } from "src/type/types";

export const ProductDetail = (props: { product: ProductTypes }) => {
  const { product } = props;
  return (
    <>
      <h3 className="text-xl font-medium">{product.name}</h3>
      <p className="text-3xl font-bold text-gray-700">
        <NumberFormat
          value={product.price}
          prefix="Rp. "
          thousandSeparator="."
          decimalSeparator=","
          displayType="text"
        />
      </p>
      <p className="mt-2 text-base text-gray-600">
        Kategori :{" "}
        <Link href={`/category/${product?.category?.name}`}>
          <a className=" font-medium text-blue-500">{product?.category?.name}</a>
        </Link>
      </p>
      <p className="mt-4 text-base text-gray-600">{product.description}</p>
    </>
  );
};
