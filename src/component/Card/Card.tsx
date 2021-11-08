export const Card = () => {
  return (
    <a href="/product/123">
      <div className="p-2 m-auto w-48 bg-white rounded-2xl shadow-md">
        <div className="pt-2 m-auto w-full h-36">
          <img src="/img/1.png" alt="kucing" className="object-cover w-full h-full rounded-lg" />
        </div>
        <div className=" rounded-lg">
          <p className=" mt-1 text-base font-bold text-gray-600">Sepatu Adidas</p>
          <div className=" flex justify-between items-center">
            <p className="text-gray-800">Rp. 90.000</p>
            {/* <button className="flex justify-center items-center w-10 h-10 text-base font-medium text-blue-600 hover:bg-gray-100 rounded-full shadow-sm">
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
            </svg>
          </button> */}
          </div>
        </div>
      </div>
    </a>
  );
};
