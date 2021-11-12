/* eslint-disable @typescript-eslint/naming-convention */
import cx from "classnames";
import Image from "next/image";
import NumberFormat from "react-number-format";
import type { CategoryTypes, ProductTypes } from "src/type/types";

interface TableRowProps {
  no: number;
  id: number;
  total_item: number;
  total_price: number;
  status: string;
  isAction?: boolean;
  product: ProductTypes;
  category: CategoryTypes;
}

export const TableRow = (props: TableRowProps) => {
  const { id, no, product, total_item, total_price, status, category, isAction } = props;
  const API_IMG = process.env.NEXT_PUBLIC_IMG;
  const src = `${API_IMG}/${product.image}`;
  const classStatus = cx({
    "inline-flex px-2 text-xs font-semibold leading-5  rounded-full": true,
    "text-green-800 bg-green-100": status === "success",
    "text-yellow-800 bg-yellow-100": status === "pending",
    "text-red-800 bg-red-100": status === "failed",
  });

  return (
    <tr>
      <td className="py-4 px-4 whitespace-nowrap">
        <div className="text-base text-gray-900">{no}</div>
      </td>
      <td className="py-4 px-6 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 w-20 h-20">
            <Image
              unoptimized
              loader={() => {
                return src;
              }}
              src={src}
              width={80}
              height={80}
              alt="thumbnail"
              className="object-cover w-full h-full rounded-md"
            />
          </div>
          <div className="ml-4">
            <div className="text-base text-gray-900">{product.name}</div>
          </div>
        </div>
      </td>
      <td className="py-4 px-6 whitespace-nowrap">
        <div className="text-base text-gray-900">{category.name}</div>
      </td>
      <td className="py-4 px-6 whitespace-nowrap">
        <div className="text-base text-gray-900">
          <NumberFormat
            value={product.price}
            prefix="Rp. "
            thousandSeparator="."
            decimalSeparator=","
            displayType="text"
          />
        </div>
      </td>
      <td className="py-4 px-6 whitespace-nowrap">
        <div className="text-base text-gray-900">{total_item}</div>
      </td>
      <td className="py-4 px-6 whitespace-nowrap">
        <div className="text-base text-gray-900">
          <NumberFormat
            value={total_price}
            prefix="Rp. "
            thousandSeparator="."
            decimalSeparator=","
            displayType="text"
          />
        </div>
      </td>
      <td className="py-4 px-6 text-center whitespace-nowrap">
        <span className={classStatus}>{status}</span>
      </td>
      {isAction && (
        <td className="py-4 px-6 text-base font-medium text-right whitespace-nowrap">
          <a
            href={`/dashboard/transactions/${id}`}
            className="py-2 px-5 h-10 text-blue-700 hover:text-blue-100 hover:bg-blue-500 rounded-xl border border-blue-500 transition-colors duration-150"
          >
            Detail
          </a>
        </td>
      )}
    </tr>
  );
};
