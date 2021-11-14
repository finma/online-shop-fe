import type { VFC } from "react";

import { Logo } from "../component/Navbar/Logo";
import { SearchInput } from "../component/Navbar/SearchInput";
import { Tooltip } from "../component/Navbar/Tooltip";

/**
 * @package
 */
export const Header: VFC = () => {
  return (
    <div className="w-full">
      <div className="container flex p-2 m-auto w-full bg-white">
        <Logo />
        <SearchInput />
        <Tooltip />
      </div>
    </div>
  );
};
