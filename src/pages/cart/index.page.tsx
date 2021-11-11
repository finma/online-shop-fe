import type { CustomNextPage, GetServerSideProps } from "next";
import { Carts } from "src/component/Carts/Carts";
import { DetailCart } from "src/component/Carts/DetailCart";
import { FluidLayout } from "src/layout";

const Index: CustomNextPage = () => {
  return (
    <div className="flex justify-center m-auto space-x-10 max-w-[1052px]">
      <Carts />
      <DetailCart />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (req) => {
  // // const tokenFromLocal = localStorage.getItem("token");

  // const { token } = req;
  // if (token) {
  //   // const token = Buffer.from(tokenFromLocal, "base64").toString("binary");

  //   return {
  //     props: { token },
  //   };
  // }

  // console.log(req);

  // return {
  //   redirect: {
  //     destination: "/login",
  //     permanent: false,
  //   },
  // };

  if (req) {
    return {
      props: {},
    };
  } else {
    const tokenFromLocal = localStorage.getItem("token");
    if (tokenFromLocal) {
      const token = Buffer.from(tokenFromLocal, "base64").toString("binary");

      return {
        props: { token },
      };
    }

    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
};

Index.getLayout = FluidLayout;

export default Index;
