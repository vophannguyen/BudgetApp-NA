import { NavLink } from "react-router-dom";

export default function NavExpense() {
  return (
    <nav className="top">
      <menu>
        <li>
          <NavLink to="need">Need</NavLink>
        </li>
        <li>
          <NavLink to="want">Want</NavLink>
        </li>
        <li>
          <NavLink to="saving">Saving</NavLink>
        </li>
      </menu>
    </nav>
  );
}
