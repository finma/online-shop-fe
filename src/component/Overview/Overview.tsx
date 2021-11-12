import Cookies from "js-cookie";
import { useCallback, useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import { Table } from "src/component/Table/Table";
import { getTransactions } from "src/services/transaction";
import type { TransactionTypes } from "src/type/types";

export const Overview = () => {
  const [transactions, setTransactions] = useState([]);
  const [totalSpent, setTotalSpent] = useState(0);

  const getTransactionList = useCallback(async (token) => {
    const res = await getTransactions(token);

    setTransactions(res.data);

    const spent = res.data.reduce((acc: number, trans: TransactionTypes) => {
      return acc + trans.total_price;
    }, 0);

    setTotalSpent(spent);
  }, []);

  useEffect(() => {
    const tokenFromLocal = Cookies.get("token");

    if (tokenFromLocal) {
      const token = Buffer.from(tokenFromLocal, "base64").toString("binary");

      getTransactionList(token);
    }
  }, [getTransactionList]);

  return (
    <main className="py-16 px-12">
      <h1 className="text-4xl font-bold text-blue-900">Overview</h1>
      <div className="flex flex-col mt-6 space-y-3">
        <span className="text-xl font-normal text-gray-400">Total Pengeluaran</span>
        <span className="text-5xl font-medium text-blue-900">
          <NumberFormat
            value={totalSpent}
            prefix="Rp. "
            thousandSeparator="."
            decimalSeparator=","
            displayType="text"
          />
        </span>
      </div>
      <div className="mt-8 w-full">
        <Table transactions={transactions} />
      </div>
    </main>
  );
};
