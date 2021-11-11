/* eslint-disable react/jsx-handler-names */
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { setLogin } from "src/services/auth";

export const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  // useEffect(() => {

  // }, []);

  const handleLogin = async () => {
    const data = new FormData();

    data.append("email", email);
    data.append("password", password);

    const result = await setLogin(data);

    if (!result.error) {
      const token = `${result.content.token_type} ${result.content.access_token}`;
      const tokenBase64 = Buffer.from(token, "binary").toString("base64");

      localStorage.setItem("token", tokenBase64);
      router.push("/");
    }
  };

  return (
    <div className="flex flex-col py-8 px-4 sm:px-6 md:px-8 lg:px-10 w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow">
      <div className="self-center text-xl sm:text-2xl font-light text-gray-600 dark:text-white">Login</div>
      <div className="mt-8">
        <form action="#" autoComplete="off">
          <div className="flex flex-col mb-2">
            <div className=" flex relative">
              <span className="inline-flex items-center px-3 text-sm text-blue-500 bg-white rounded-l-md border-t border-b border-l border-gray-300 shadow-sm">
                <svg
                  width="15"
                  height="15"
                  fill="currentColor"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"></path>
                </svg>
              </span>
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={(e) => {
                  return setEmail(e.target.value);
                }}
                className=" flex-1 py-2 px-4 w-full text-base placeholder-gray-400 text-gray-700 bg-white rounded-r-lg border border-gray-300 focus:border-transparent focus:ring-2 focus:ring-blue-600 shadow-sm appearance-none focus:outline-none"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="flex flex-col mb-6">
            <div className=" flex relative">
              <span className="inline-flex items-center px-3 text-sm text-blue-500 bg-white rounded-l-md border-t border-b border-l border-gray-300 shadow-sm">
                <svg
                  width="15"
                  height="15"
                  fill="currentColor"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z"></path>
                </svg>
              </span>
              <input
                type="password"
                id="password"
                name="password"
                onChange={(e) => {
                  return setPassword(e.target.value);
                }}
                value={password}
                className=" flex-1 py-2 px-4 w-full text-base placeholder-gray-400 text-gray-700 bg-white rounded-r-lg border border-gray-300 focus:border-transparent focus:ring-2 focus:ring-blue-600 shadow-sm appearance-none focus:outline-none"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="flex items-center -mt-4 mb-6">
            <div className="flex ml-auto">
              <Link href="/#">
                <a className="inline-flex text-xs sm:text-sm font-thin text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white">
                  Lupa Password?
                </a>
              </Link>
            </div>
          </div>
          <div className="flex w-full">
            <button
              type="button"
              onClick={handleLogin}
              className=" py-2 px-4 w-full text-base font-semibold text-center text-white bg-blue-600 hover:bg-blue-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200 shadow-md transition duration-200 ease-in focus:outline-none"
            >
              Login
            </button>
          </div>
        </form>
      </div>
      <div className="flex justify-center items-center mt-6">
        <Link href="/register">
          <a className="inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white">
            <span className="ml-2">Belum punya akun? Daftar sekarang.</span>
          </a>
        </Link>
      </div>
    </div>
  );
};
