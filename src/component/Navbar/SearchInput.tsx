export const SearchInput = () => {
  return (
    <>
      <div className=" flex relative items-center w-3/5">
        <span className="flex absolute justify-center items-center ml-1 w-8 h-8 text-white bg-pastel-pink-light rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </span>

        <input
          type="search"
          name="serch"
          placeholder="Cari Produk"
          className="px-4 pl-10 w-full h-10 text-base text-gray-700 bg-gray-50 rounded-r-full rounded-l-full border-none focus:ring-0 shadow-md outline-none"
        />
      </div>
    </>
  );
};
