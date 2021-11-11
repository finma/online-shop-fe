import type { VFC } from "react";
import { Auth } from "src/component/Auth/Auth";

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
          <Auth />
        </div>
      </div>
    </div>
  );
};
