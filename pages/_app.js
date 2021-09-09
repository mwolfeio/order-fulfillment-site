import "../styles/globals.css";
import { UserContext } from "../lib/context";
import { auth } from "../lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
