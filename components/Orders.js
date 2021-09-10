import { useContext, useState } from "react";
import { UserContext } from "../lib/context";

import Filters from "./Filters.js";
import List from "./List.js";
import Logo from "../media/Logo.js";

const Header = () => {
  const { user, username } = useContext(UserContext);
  const [filter, setFilter] = useState("All Orders");

  let filters = ["All Orders", "Unfulfilled Orders", "Fulfilled Orders"];

  return (
    <div className="orders-wrapper">
      <Filters active={filter} filters={filters} handler={setFilter} />
      <List filter={filter} />
    </div>
  );
};
export default Header;
