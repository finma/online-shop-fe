import Cookies from "js-cookie";
import { useCallback, useEffect, useState } from "react";
import { getUser } from "src/services/auth";

import { Menu } from "./Menu";
import { Profile } from "./Profile";

export const Sidebar = (props: { active: string }) => {
  const [user, setUser] = useState({ name: "", email: "" });
  const [token, setToken] = useState("");

  const getUserInfo = useCallback(async (token) => {
    const res = await getUser(token);

    setUser(res.data);
  }, []);

  useEffect(() => {
    const tokenFromLocal = Cookies.get("token");

    if (tokenFromLocal) {
      const token = Buffer.from(tokenFromLocal, "base64").toString("binary");

      setToken(token);
      getUserInfo(token);
    }
  }, [getUserInfo]);

  return (
    <div className="w-72 h-screen bg-white">
      <Profile user={user} />
      <Menu active={props.active} token={token} />
    </div>
  );
};
