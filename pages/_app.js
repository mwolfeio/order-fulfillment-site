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
  createHttpLink,
} from "@apollo/client";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new createHttpLink({
    uri: `https://${process.env.HOST_NAME}.myshopify.com/api/2020-07/graphql.json`,
    headers: {
      "X-Shopify-Storefront-Access-Token": process.env.ACCESS_TOKEN,
      Accept: "application/graphql",
    },
    fetch,
  }),
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
