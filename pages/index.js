import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase";

import Header from "../components/Header.js";
import Auth from "../components/Auth.js";
import Orders from "../components/Orders.js";

export default function Home() {
  const [user, loading, error] = useAuthState(auth);

  return (
    <main>
      <Header />
      {user ? <Orders /> : <Auth />}
    </main>
  );
}
