import type { CustomNextPage } from "next";
import { FluidLayout } from "src/layout";

import { Card } from "../../component/Card/Card";
import { Category } from "../../component/Category/Category";

const Index: CustomNextPage = () => {
  return (
    <div className="">
      <Category />
      <div className="grid md:grid-cols-4 lg:grid-cols-6 gap-y-2 py-10 mx-auto">
        <Card title="Sepatu Adidas Terbaru" price={50000} image="1" />
        <Card title="Sepatu Adidas Terbaru" price={50000} image="1" />
        <Card title="Sepatu Adidas Terbaru" price={50000} image="1" />
        <Card title="Sepatu Adidas Terbaru" price={50000} image="1" />
        <Card title="Sepatu Adidas Terbaru" price={50000} image="1" />
        <Card title="Sepatu Adidas Terbaru" price={50000} image="1" />
        <Card title="Sepatu Adidas Terbaru" price={50000} image="1" />
        <Card title="Sepatu Adidas Terbaru" price={50000} image="1" />
      </div>
      <div className="flex justify-center items-center">
        <button className=" py-2 px-6 text-blue-600 hover:text-white hover:bg-blue-600 rounded-lg border-2 border-blue-600 transition duration-200 ease-in focus:outline-none">
          Muat lebih banyak
        </button>
      </div>
    </div>
  );
};

Index.getLayout = FluidLayout;

export default Index;
