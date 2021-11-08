import type { CustomNextPage } from "next";
import { FluidLayout } from "src/layout";

const Index: CustomNextPage = () => {
  return (
    <div className="grid md:grid-cols-3 gap-2 mt-10">
      <div className="w-full">
        <img src="/img/1.png" alt="kucing" className="object-cover w-full rounded-xl" />
      </div>
      <div className="p-4 w-full">
        <h3 className="text-xl font-medium">Sepatu Adidas Terbaru 2021</h3>
        <p className="text-3xl font-bold text-gray-700">Rp. 50.000</p>
        <p className="mt-2 text-base text-gray-600">Kategori : Baju</p>
        <p className="mt-4 text-base text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita autem inventore quisquam commodi rerum
          ullam. Voluptate minima voluptates, sed obcaecati omnis ullam natus eum iste quod placeat necessitatibus qui.
          Sequi.
        </p>
      </div>
      <div className="w-full">
        <div className="p-4 w-3/4 rounded-lg shadow-md">
          <h3 className="mb-3 text-lg font-medium">Detail Belanja</h3>
          <div className="flex justify-between">
            <div className="flex space-x-4">
              <button className="text-green-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
              <span className="text-lg text-gray-500">4</span>
              <button className="text-green-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </div>
            <p className="text-sm text-gray-400">
              Stok <span className="text-base font-medium text-gray-600">999</span>
            </p>
          </div>
          <div className="my-4">
            <div className="flex justify-between">
              <span className="text-sm text-gray-400">Total barang</span>
              <span className="text-base font-medium text-gray-600">8</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-400">Total harga</span>
              <span className="text-base font-medium text-gray-600">Rp. 400.000</span>
            </div>
          </div>
          <button
            type="button"
            className="flex justify-center items-center py-2 px-6 mb-3 w-full text-green-600 hover:text-white hover:bg-green-600 rounded-lg border-2 border-green-600 transition duration-200 ease-in focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>{" "}
            Keranjang
          </button>
          <button
            type="button"
            className=" flex justify-center items-center py-2 px-4 w-full text-base font-semibold text-center text-white bg-green-600 hover:bg-green-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-green-200 shadow-md transition duration-200 ease-in focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>{" "}
            Beli
          </button>
        </div>
      </div>
    </div>
  );
};

Index.getLayout = FluidLayout;

export default Index;
