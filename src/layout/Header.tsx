import type { VFC } from "react";

/**
 * @package
 */
export const Header: VFC = () => {
  return (
    <div className="w-full shadow-md">
      <div className="container flex flex-row justify-between items-center p-2 m-auto w-full bg-white">
        <div className="hidden md:flex w-1/5 text-lg text-gray-700">
          <a href="/">Online Shop</a>
        </div>
        <span className="flex w-3/5 md:w-1/2 h-10 text-sm rounded-lg border border-gray-50 cursor-pointer">
          <input
            type="search"
            name="serch"
            placeholder="Search"
            className="flex-grow px-4 text-sm rounded-lg ring-white focus:ring-blue-500 focus:outline-none"
          />
        </span>
        {/* <div className="flex flex-row-reverse text-white mr-4 ml-4 md:hidden">
        <button>
          <svg
            width="20"
            height="20"
            fill="currentColor"
            className="h-8 w-8"
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
          </svg>
        </button>
      </div> */}
        <div className="hidden md:flex justify-end items-center space-x-6 w-1/5">
          <a
            href="/cart"
            className="flex items-center p-2 text-sm text-blue-600 hover:bg-gray-100 rounded-full transition duration-200 ease-in focus:outline-none"
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
            </svg>
          </a>
          <div className="space-x-2">
            <a
              href="/login"
              className="py-2 px-4 w-full text-sm font-semibold text-center text-blue-700 bg-white rounded-lg border-blue-700 focus:ring-2 focus:ring-offset-2 shadow-md transition duration-200 ease-in focus:outline-none hover:bg-grey-100"
            >
              Masuk
            </a>
            <a
              href="/register"
              className=" py-2 px-4 w-full text-sm font-semibold text-center text-white bg-blue-600 hover:bg-blue-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200 shadow-md transition duration-200 ease-in focus:outline-none"
            >
              Daftar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
