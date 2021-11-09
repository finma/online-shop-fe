export const ShoppingDetail = () => {
  return (
    <div className="p-4 w-3/4 rounded-lg shadow-md">
      <h3 className="mb-3 text-lg font-medium">Detail Belanja</h3>
      <div className="flex justify-between">
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
          <span className="text-lg text-gray-500">4</span>
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
        className="flex justify-center items-center py-2 px-6 mb-3 w-full text-blue-600 hover:text-white hover:bg-blue-600 rounded-lg border-2 border-blue-600 transition duration-200 ease-in focus:outline-none"
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
  );
};
