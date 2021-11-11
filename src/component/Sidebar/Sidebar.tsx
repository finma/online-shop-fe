export const Sidebar = () => {
  return (
    <div className="w-72 h-screen bg-white">
      <div className="flex justify-start items-center mx-6 mt-10">
        <div className="flex flex-col justify-center items-center w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-14 h-14 text-blue-900"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-xl font-medium">Firman Maulana</span>
          <span>firman@gmail.com</span>
        </div>
      </div>
      <nav className=" px-6 mt-10">
        <a
          className=" flex items-center p-2 my-6 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white bg-gray-100 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors duration-200"
          href="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            />
          </svg>
          <span className="mx-4 text-lg font-normal">Dashboard</span>
          <span className="flex-grow text-right"></span>
        </a>
        <a
          className="flex items-center p-2 my-6 text-gray-800 hover:text-gray-800 dark:text-gray-100 dark:hover:text-white hover:bg-gray-100 dark:bg-gray-600 dark:hover:bg-gray-600 rounded-lg transition-colors duration-200"
          href="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          <span className="mx-4 text-lg font-normal">Transaksi</span>
          <span className="flex-grow text-right"></span>
        </a>
        <a
          className="flex items-center p-2 my-6 text-gray-800 hover:text-gray-800 dark:text-gray-100 dark:hover:text-white hover:bg-gray-100 dark:bg-gray-600 dark:hover:bg-gray-600 rounded-lg transition-colors duration-200"
          href="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
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
          <span className="mx-4 text-lg font-normal">Keranjang</span>
          <span className="flex-grow text-right"></span>
        </a>
        <a
          className="flex items-center p-2 my-6 text-gray-800 hover:text-gray-800 dark:text-gray-100 dark:hover:text-white hover:bg-gray-100 dark:bg-gray-600 dark:hover:bg-gray-600 rounded-lg transition-colors duration-200"
          href="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
          <span className="mx-4 text-lg font-normal">Keluar</span>
          <span className="flex-grow text-right"></span>
        </a>
      </nav>
    </div>
  );
};
