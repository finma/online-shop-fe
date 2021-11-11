import "tailwindcss/tailwind.css";
import "src/style/style.css";

import { ThemeProvider } from "@mui/material/styles";
import type { CustomAppProps } from "next/app";
import Head from "next/head";
import { CartProvider } from "react-use-cart";

import theme from "../../theme/theme";

const App = (props: CustomAppProps) => {
  const getLayout =
    props.Component.getLayout ||
    ((page) => {
      return page;
    });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CartProvider>
          <Head>
            <title>nexst</title>
          </Head>
          {getLayout(<props.Component {...props.pageProps} />)}
        </CartProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
