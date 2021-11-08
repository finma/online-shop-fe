import type { CustomNextPage } from "next";
import { FluidLayout } from "src/layout";

const Index: CustomNextPage = () => {
  return (
    <div className="flex justify-center m-auto space-x-10 max-w-[1052px]">
      <div className="m-auto w-2/3">
        <h1 className="mt-8 mb-8 text-2xl font-bold text-gray-700">Kategori</h1>
        <div className="w-full">
          <form action="POST">
            <label className="inline-flex items-center mt-3 w-full">
              <input type="checkbox" className=" w-5 h-5 text-blue-600 border-gray-600" />
              <div className="flex justify-between ml-4 w-full h-32">
                <div className="flex space-x-4">
                  <img src="/img/1.png" alt="kucing" className=" object-cover rounded-md" width="150" />
                  <div className=" flex flex-col justify-center h-full">
                    <h3 className="text-lg font-medium">
                      Adidas Terbaru 2021 Terpercaya asdfdsfd asdfdf asdfdf sdfdsf asdfdsaf asdfdsfd
                    </h3>
                    <p className="">Rp. 50.000</p>
                  </div>
                  <div className="flex flex-col justify-center items-center space-y-4">
                    <button
                      type="button"
                      className=" flex justify-center items-center py-2 px-4 w-full text-base font-semibold text-center text-blue-600 hover:bg-gray-100 rounded-lg border-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200 shadow-md transition duration-200 ease-in focus:outline-none"
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
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                      Hapus
                    </button>
                    <div className="flex space-x-4">
                      <button className="text-blue-600">
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
                      <span className=" text-lg">4</span>
                      <button className="text-blue-600">
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
                  </div>
                </div>
              </div>
            </label>
            <label className="inline-flex items-center mt-3 w-full">
              <input type="checkbox" className=" w-5 h-5 text-blue-600 border-gray-600" />
              <div className="flex justify-between ml-4 w-full h-32">
                <div className="flex space-x-4">
                  <img src="/img/1.png" alt="kucing" className=" object-cover rounded-md" width="150" />
                  <div className=" flex flex-col justify-center h-full">
                    <h3 className="text-lg font-medium">
                      Adidas Terbaru 2021 Terpercaya asdfdsfd asdfdf asdfdf sdfdsf asdfdsaf asdfdsfd
                    </h3>
                    <p className="">Rp. 50.000</p>
                  </div>
                  <div className="flex flex-col justify-center items-center space-y-4">
                    <button
                      type="button"
                      className=" flex justify-center items-center py-2 px-4 w-full text-base font-semibold text-center text-blue-600 hover:bg-gray-100 rounded-lg border-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200 shadow-md transition duration-200 ease-in focus:outline-none"
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
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                      Hapus
                    </button>
                    <div className="flex space-x-4">
                      <button className="text-blue-600">
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
                      <span className=" text-lg">4</span>
                      <button className="text-blue-600">
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
                  </div>
                </div>
              </div>
            </label>
            <label className="inline-flex items-center mt-3 w-full">
              <input type="checkbox" className=" w-5 h-5 text-blue-600 border-gray-600" />
              <div className="flex justify-between ml-4 w-full h-32">
                <div className="flex space-x-4">
                  <img src="/img/1.png" alt="kucing" className=" object-cover rounded-md" width="150" />
                  <div className=" flex flex-col justify-center h-full">
                    <h3 className="text-lg font-medium">
                      Adidas Terbaru 2021 Terpercaya asdfdsfd asdfdf asdfdf sdfdsf asdfdsaf asdfdsfd
                    </h3>
                    <p className="">Rp. 50.000</p>
                  </div>
                  <div className="flex flex-col justify-center items-center space-y-4">
                    <button
                      type="button"
                      className=" flex justify-center items-center py-2 px-4 w-full text-base font-semibold text-center text-blue-600 hover:bg-gray-100 rounded-lg border-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200 shadow-md transition duration-200 ease-in focus:outline-none"
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
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                      Hapus
                    </button>
                    <div className="flex space-x-4">
                      <button className="text-blue-600">
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
                      <span className=" text-lg">4</span>
                      <button className="text-blue-600">
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
                  </div>
                </div>
              </div>
            </label>
          </form>
        </div>
      </div>
      <div className=" flex justify-center m-auto w-1/3">
        <div className="p-4 w-3/4 rounded-lg shadow-md">
          <h3 className="mb-3 text-lg font-medium">Detail Belanja</h3>
          <div className="my-4">
            <div className="flex justify-between">
              <span className="text-sm text-gray-400">Total barang</span>
              <span className="text-sm text-gray-400">8</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-400">Total harga</span>
              <span className="text-sm text-gray-400">Rp. 400.000</span>
            </div>
          </div>
          <button
            type="button"
            className=" flex justify-center items-center py-2 px-4 w-full text-base font-semibold text-center text-white bg-blue-600 hover:bg-blue-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200 shadow-md transition duration-200 ease-in focus:outline-none"
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
