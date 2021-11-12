import { MenuItem } from "./MenuItem";

interface MenuProps {
  active: string;
  token: string;
}
export const Menu = (props: MenuProps) => {
  return (
    <nav className=" px-6 mt-10">
      <MenuItem active={props.active === "dashboard"} label="Overview" href="/dashboard" icon="dashboard" />
      <MenuItem label="Transaksi" href="/dashboard/transactions" icon="shopping-bag" />
      <MenuItem label="Keranjang" href="/dashboard/carts" icon="shopping-cart" />
      <MenuItem label="Setting" href="/dashboard/setting" icon="setting" />
      <MenuItem label="Keluar" icon="logout" button token={props.token} />
    </nav>
  );
};
