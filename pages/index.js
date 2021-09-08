import { useContext } from "react";
import { UserContext } from "../lib/context";

import Header from "../components/Header.js";
import Auth from "../components/Auth.js";
import Orders from "../components/Orders.js";

export default function Home() {
  const { user, username } = useContext(UserContext);

  return (
    <main>
      <Header />
      {user ? <Orders /> : <Auth />}
    </main>
  );
}
