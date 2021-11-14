import type { VFC } from "react";

import { Logo } from "../component/Navbar/Logo";
import { SearchInput } from "../component/Navbar/SearchInput";
import { Tooltip } from "../component/Navbar/Tooltip";

/**
 * @package
 */
export const Header: VFC = () => {
  return (
    <div className=" sticky top-0 z-50 w-full bg-pastel-white-pink">
      <div className=" container flex py-5 m-auto w-full">
        <Logo />
        <SearchInput />
        <Tooltip />
      </div>
    </div>
  );
};
