import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase";

import Header from "../components/Header.js";
import Auth from "../components/Auth.js";
import Orders from "../components/Orders.js";

// export async function getServerSideProps() {
//   console.log("running getServerSideProps");
//   const user = true;
//   let orders = [];
//
//   if (user) {
//     let postsQuery = firestore
//       .collection("orders")
//       .orderBy("date", "desc")
//       .limit(30);
//     orders = (await postsQuery.get()).docs.map(postToJSON);
//   }
//   return { props: { orders } };
// }

export default function Home({ orders }) {
  const [user, loading, error] = useAuthState(auth);

  return (
    <main>
      <Header />
      {user ? <Orders /> : <Auth />}
    </main>
  );
}
