import cx from "classnames";
import Image from "next/image";
import NumberFormat from "react-number-format";
import type { TransactionTypes } from "src/type/types";

export const TableRow = (props: TransactionTypes) => {
  const { id, product, total_item, total_price, status } = props;
  const API_IMG = process.env.NEXT_PUBLIC_IMG;
  const src = `${API_IMG}/${product.image}`;
  const classStatus = cx({
    "inline-flex px-2 text-xs font-semibold leading-5  rounded-full": true,
    "text-green-800 bg-green-100": status === "success",
    "text-yellow-800 bg-yellow-100": status === "pending",
    "text-red-800 bg-red-100": status === "failed",
  });

  return (
    <tr key={id}>
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
            {/* <img className="object-cover w-full h-full rounded-md" src="img/1.png" alt="" /> */}
          </div>
          <div className="ml-4">
            <div className="text-base text-gray-900">{product.name}</div>
          </div>
        </div>
      </td>
      <td className="py-4 px-6 whitespace-nowrap">
        <div className="text-base text-gray-900">{product.category_id}</div>
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
      <td className="py-4 px-6 whitespace-nowrap">
        <span className={classStatus}>{status}</span>
      </td>
      {/* <td className="py-4 px-6 text-base font-medium text-right whitespace-nowrap">
        <a href="/dashboard" className="text-indigo-600 hover:text-indigo-900">
          Edit
        </a>
      </td> */}
    </tr>
  );
};
