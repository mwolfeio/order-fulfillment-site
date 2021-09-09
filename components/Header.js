import Logo from "../media/Logo.js";
import { auth } from "../lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <header className="flex-center-btw">
      <Logo />
      {!user ? (
        <div className="header-tag">3rd Party Order Fulfillment</div>
      ) : (
        <button className="secondary" onClick={() => auth.signOut()}>
          Sign out
        </button>
      )}
    </header>
  );
};
export default Header;
