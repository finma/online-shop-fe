import Image from "next/image";
import NumberFormat from "react-number-format";
import type { ProductTypes } from "src/type/types";

interface CardProps {
  product: ProductTypes;
}

export const Card = (props: CardProps) => {
  const { name, price, image, slug } = props.product;
  const API_IMG = process.env.NEXT_PUBLIC_IMG;
  const src = `${API_IMG}/${image}`;

  return (
    <a href={`/product/${slug}`}>
      <div className="p-2 m-auto w-48 bg-white rounded-2xl shadow-md">
        <div className="pt-2 m-auto w-full h-36">
          <Image
            loader={() => {
              return src;
            }}
            unoptimized
            src={src}
            alt={name}
            width={176}
            height={136}
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <div className=" rounded-lg">
          <p className=" mt-1 text-base font-bold text-gray-600">{name}</p>
          <div className=" flex justify-between items-center">
            <p className="text-gray-800">
              <NumberFormat value={price} prefix="Rp. " thousandSeparator="." decimalSeparator="," displayType="text" />
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};
