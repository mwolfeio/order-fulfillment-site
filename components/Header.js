import { useContext } from "react";
import { UserContext } from "../lib/context";
import Logo from "../media/Logo.js";

const Header = () => {
  const { user, username } = useContext(UserContext);

  return (
    <header className="flex-center-btw">
      <Logo />
      {!user ? (
        <div className="header-tag">3rd Party Order Fulfillment</div>
      ) : (
        <button className="secondary">Sign out</button>
      )}
    </header>
  );
};
export default Header;
