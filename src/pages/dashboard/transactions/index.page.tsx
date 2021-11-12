import type { GetServerSideProps } from "next";
import { Sidebar } from "src/component/Sidebar/Sidebar";
import { Transactions } from "src/component/Transactions/Transactions";
import { getUser } from "src/services/auth";
import { getTransactions } from "src/services/transaction";
import type { TransactionTypes, UserTypes } from "src/type/types";

interface TransactionsProps {
  transactions: Array<TransactionTypes>;
  user: UserTypes;
}

const Index = (props: TransactionsProps) => {
  return (
    <div className="flex w-full min-h-screen bg-[#fbfbfb]">
      <Sidebar active="transactions" user={props.user} />
      <Transactions data={props.transactions} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { token } = req.cookies;
  const tokenFromBase64 = Buffer.from(token, "base64").toString("binary");
  const transactions = await getTransactions(tokenFromBase64);
  const user = await getUser(tokenFromBase64);

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
      transactions: transactions.data,
      user: user.data,
    },
  };
};

export default Index;
