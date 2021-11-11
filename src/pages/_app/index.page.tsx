import "tailwindcss/tailwind.css";
import "src/style/style.css";

import type { CustomAppProps } from "next/app";
import Head from "next/head";
import { CartProvider } from "react-use-cart";

const App = (props: CustomAppProps) => {
  const getLayout =
    props.Component.getLayout ||
    ((page) => {
      return page;
    });

  return (
    <>
      <CartProvider>
        <Head>
          <title>nexst</title>
        </Head>
        {getLayout(<props.Component {...props.pageProps} />)}
      </CartProvider>
    </>
  );
};

export default App;
