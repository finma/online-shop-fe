import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { setLogout } from "../../services/auth";

export const Auth = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [token, setToken] = useState("");

  const router = useRouter();

  useEffect(() => {
    const tokenFromLocal = localStorage.getItem("token");

    if (tokenFromLocal) {
      const token = Buffer.from(tokenFromLocal, "base64").toString("binary");

      // console.log(token);
      setToken(token);
      setIsLogin(true);
    }
  }, []);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    await setLogout(token);
    localStorage.removeItem("token");
    router.push("/");
    setIsLogin(false);
  };

  if (isLogin) {
    return (
      <div className="flex items-center">
        <div className="relative">
          <div className="inline-block relative text-left">
            <div>
              <button
                onClick={handleIsOpen}
                type="button"
                className=" flex items-center p-2 text-sm text-blue-600 hover:bg-gray-100 rounded-full transition duration-200 ease-in focus:outline-none"
                id="options-menu"
              >
                <svg
                  fill="currentColor"
                  className="w-6 h-6 text-blue-600"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1523 1339q-22-155-87.5-257.5t-184.5-118.5q-67 74-159.5 115.5t-195.5 41.5-195.5-41.5-159.5-115.5q-119 16-184.5 118.5t-87.5 257.5q106 150 271 237.5t356 87.5 356-87.5 271-237.5zm-243-699q0-159-112.5-271.5t-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5zm512 256q0 182-71 347.5t-190.5 286-285.5 191.5-349 71q-182 0-348-71t-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
                </svg>
              </button>
            </div>
            {isOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-md ring-1 ring-black ring-opacity-5 shadow-lg origin-top-right">
                <div className=" py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <a
                    href="/dashboard"
                    className=" block py-2 px-4 text-gray-700 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
                    role="menuitem"
                  >
                    <span className="flex flex-col">
                      <span>Dashboard</span>
                    </span>
                  </a>
                  <a
                    href="/"
                    className="block py-2 px-4 text-gray-700 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
                    role="menuitem"
                  >
                    <span className="flex flex-col">
                      <span>Account</span>
                    </span>
                  </a>
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="py-2 px-4 w-full text-left text-gray-700 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
                    role="menuitem"
                  >
                    <span className="flex flex-col">
                      <span>Logout</span>
                    </span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-x-2">
      <a
        href="/login"
        className="py-2 px-4 w-full text-sm font-semibold text-center text-blue-700 bg-white hover:bg-gray-100 rounded-lg border-blue-700 focus:ring-2 focus:ring-offset-2 shadow-md transition duration-200 ease-in focus:outline-none"
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
  );
};
