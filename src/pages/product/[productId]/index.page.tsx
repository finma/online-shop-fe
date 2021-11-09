import type { CustomNextPage } from "next";
import Image from "next/image";
import { ProductDetail } from "src/component/ShoppingDetail/ProductDetail";
import { ShoppingDetail } from "src/component/ShoppingDetail/ShoppingDetail";
import { FluidLayout } from "src/layout";

const Index: CustomNextPage = () => {
  return (
    <div className="grid md:grid-cols-3 gap-2 mt-10">
      <div className="w-full">
        <Image src="/img/1.png" alt="kucing" className="object-cover w-full rounded-xl" width={400} height={260} />
      </div>
      <div className="p-4 w-full">
        <ProductDetail />
      </div>
      <div className="w-full">
        <ShoppingDetail />
      </div>
    </div>
  );
};

Index.getLayout = FluidLayout;

export default Index;
