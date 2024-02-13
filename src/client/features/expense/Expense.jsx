import NavExpense from "./NavExpense";
import "../../layout/Navbar.less";
import { Outlet } from "react-router-dom";
export default function Expense() {
  return (
    <>
      <NavExpense />
      <section>
        <Outlet />
      </section>
    </>
  );
}
