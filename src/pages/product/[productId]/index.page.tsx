import type { GetServerSideProps } from "next";
import Image from "next/image";
import { ProductDetail } from "src/component/ShoppingDetail/ProductDetail";
import { ShoppingDetail } from "src/component/ShoppingDetail/ShoppingDetail";
import { FluidLayout } from "src/layout";
import { getProductDetail } from "src/services/product";
import type { ProductTypes } from "src/type/types";

const Index = (props: { product: ProductTypes }) => {
  const { product } = props;
  const API_IMG = process.env.NEXT_PUBLIC_IMG;
  const src = `${API_IMG}/${product.image}`;
  return (
    <div className="grid md:grid-cols-3 gap-2 mt-10">
      <div className="w-full">
        <Image
          loader={() => {
            return src;
          }}
          src={src}
          alt="kucing"
          className="object-cover w-full rounded-xl"
          width={400}
          height={260}
        />
      </div>
      <div className="p-4 w-full">
        <ProductDetail product={props.product} />
      </div>
      <div className="w-full">
        <ShoppingDetail product={props.product} />
      </div>
    </div>
  );
};

Index.getLayout = FluidLayout;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  // console.log(req);
  const res = await getProductDetail(params?.productId);
  // const data = JSON.stringify(res.data);

  return {
    props: {
      product: res.data,
    },
  };
};

export default Index;
