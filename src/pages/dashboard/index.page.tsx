import type { GetServerSideProps } from "next";
import { Overview } from "src/component/Overview/Overview";
import { Sidebar } from "src/component/Sidebar/Sidebar";
import { getUser } from "src/services/auth";
import { getTransactions } from "src/services/transaction";
import type { TransactionTypes, UserTypes } from "src/type/types";

interface TransactionsProps {
  data: {
    transactions: Array<TransactionTypes>;
    totalSpent: number;
  };
  user: UserTypes;
}

const Index = (props: TransactionsProps) => {
  return (
    <div className="flex w-full min-h-screen bg-[#fbfbfb]">
      <Sidebar active="dashboard" user={props.user} />
      <Overview data={props.data} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { token } = req.cookies;
  const tokenFromBase64 = Buffer.from(token, "base64").toString("binary");
  const transactions = await getTransactions(tokenFromBase64);
  const user = await getUser(tokenFromBase64);

  const totalSpent = transactions.data.reduce((acc: number, trans: TransactionTypes) => {
    return acc + trans.total_price;
  }, 0);

  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      data: {
        transactions: transactions.data,
        totalSpent,
      },
      user: user.data,
    },
  };
};

export default Index;
