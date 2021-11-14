import type { GetServerSideProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { Products } from "src/component/Products/Products";
import { FluidLayout } from "src/layout";
import { getProductsByCategory } from "src/services/product";
import type { CategoryTypes, ProductTypes } from "src/type/types";

interface IndexProps {
  products: Array<ProductTypes>;
  categories: Array<CategoryTypes>;
}

const Index = (props: IndexProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<Array<ProductTypes>>([]);

  const router = useRouter();

  useEffect(() => {
    if (props.products) {
      setProducts(props.products);
      setIsLoading(false);
    }
  }, [props.categories, props.products]);

  return isLoading ? (
    <div className="flex justify-center items-center">
      <ReactLoading type="spinningBubbles" color="#555" />
    </div>
  ) : (
    <>
      <Products products={products} search category={router.query.category} />
      <div className="flex justify-center mb-12">
        <Link href="/">
          <a className="flex py-2 px-4 w-28 text-left text-white dark:text-gray-100 dark:hover:text-white bg-pastel-blue dark:hover:bg-gray-600 rounded-r-full rounded-l-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            </svg>
            <span>Kembali</span>
          </a>
        </Link>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const products = await getProductsByCategory(query.category);

  return {
    props: {
      products: products.data.data,
      query,
    },
  };
};

Index.getLayout = FluidLayout;

export default Index;
