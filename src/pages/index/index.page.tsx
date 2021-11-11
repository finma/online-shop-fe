import type { CustomNextPage } from "next";
import { Category } from "src/component/Category/Category";
import { Products } from "src/component/Products/Products";
import { FluidLayout } from "src/layout";

const Index: CustomNextPage = () => {
  return (
    <>
      <Category />
      <Products />
    </>
  );
};

Index.getLayout = FluidLayout;

export default Index;
