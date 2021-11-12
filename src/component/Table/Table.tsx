import type { TransactionTypes } from "src/type/types";

import { TableRow } from "./TableRow";

interface TableProps {
  transactions: Array<TransactionTypes>;
  isAction?: boolean;
}

export const Table = (props: Partial<TableProps>) => {
  const { transactions, isAction } = props;

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto -my-2 sm:-mx-6 lg:-mx-8">
        <div className="inline-block py-2 sm:px-6 lg:px-8 min-w-full align-middle">
          <div className="overflow-hidden sm:rounded-lg border-b border-gray-200 shadow">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className=" py-3 px-4 text-sm font-medium tracking-wider text-left text-gray-500">
                    No
                  </th>
                  <th scope="col" className=" py-3 px-6 text-sm font-medium tracking-wider text-left text-gray-500">
                    Nama Barang
                  </th>
                  <th scope="col" className=" py-3 px-6 text-sm font-medium tracking-wider text-left text-gray-500">
                    Kategori
                  </th>
                  <th scope="col" className=" py-3 px-6 text-sm font-medium tracking-wider text-left text-gray-500">
                    Harga Barang
                  </th>
                  <th scope="col" className=" py-3 px-6 text-sm font-medium tracking-wider text-left text-gray-500">
                    Total Barang
                  </th>
                  <th scope="col" className=" py-3 px-6 text-sm font-medium tracking-wider text-left text-gray-500">
                    Total Harga
                  </th>
                  <th scope="col" className=" py-3 px-6 text-sm font-medium tracking-wider text-center text-gray-500">
                    Status
                  </th>
                  {isAction && (
                    <th scope="col" className=" py-3 px-6 text-sm font-medium tracking-wider text-center text-gray-500">
                      Action
                    </th>
                  )}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {transactions?.map((transaction, i) => {
                  return (
                    <TableRow
                      key={transaction.id}
                      id={transaction.id}
                      product={transaction.product}
                      category={transaction.category}
                      total_item={transaction.total_item}
                      total_price={transaction.total_price}
                      status={transaction.status}
                      no={i + 1}
                      isAction={isAction}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
