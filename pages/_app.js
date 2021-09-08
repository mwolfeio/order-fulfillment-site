import "../styles/globals.css";
import { UserContext } from "../lib/context";

function MyApp({ Component, pageProps }) {
  return (
    <UserContext.Provider value={{ user: {}, username: "jeff" }}>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}

export default MyApp;
