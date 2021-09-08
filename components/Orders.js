import { useContext } from "react";
import { UserContext } from "../lib/context";

import Filters from "./Filters.js";
import List from "./List.js";
import Logo from "../media/Logo.js";

const Header = () => {
  const { user, username } = useContext(UserContext);

  return (
    <div className="orders-wrapper">
      <Filters />
      <List />
    </div>
  );
};
export default Header;
