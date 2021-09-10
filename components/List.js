import { useState, useEffect } from "react";
import { firestore, postToJSON } from "../lib/firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import ListItem from "./ListItem.js";
import Modal from "./Modal.js";

const runOrderCount = (orders) => {
  if (!orders) return;
  let count =
    orders.length -
    orders.filter((order) => order.products.every((prod) => prod.fulfilled))
      .length;
  return count;
};

export default function Orders(props) {
  const [modal, setModal] = useState(false);
  const [activeOrder, setActiveOrder] = useState({});
  const [value, loading, error] = useCollection(
    firestore.collection("orders").orderBy("date", "desc").limit(30),
    {
      snapshotListenOptions: { includeMetadataChanges: false },
    }
  );

  let orders = value ? value.docs.map((doc) => postToJSON(doc)) : [];
  console.log(orders);

  const count = runOrderCount(orders);
  const closeModal = () => {
    setModal(false);
    setActiveOrder({});
  };
  const openModal = (orderNumber) => {
    if (!orders) return;
    let order = orders.find((o) => o.number === orderNumber);

    setActiveOrder(order);
    setModal(true);
  };

  return (
    <div className="List-wrapper">
      <div className="flex-center-btw">
        <h1>
          Order History{" "}
          <span style={{ marginLeft: "8px" }} className="sub-title">
            ({count} Unfulfilled)
          </span>
        </h1>
        <div className="placeholder-text">Showing last 30 orders</div>
      </div>
      {loading && <span>Loading...</span>}
      {error && <span>{error}</span>}
      {orders && (
        <ul className="list-contaiener">
          <li className="list-header">
            <p>order</p>
            <p>order date</p>
            <p>items</p>
            <p>customer</p>
            <p>Shipping #</p>
            <p style={{ justifySelf: "end" }}>Action</p>
          </li>
          {orders.map((order) => {
            let isFulfilled = order.products.every((prod) => prod.fulfilled);
            if (props.filter === "Unfulfilled Orders" && isFulfilled) return;
            if (props.filter === "Fulfiller Orders" && !isFulfilled) return;
            // return JSON.stringify(order);
            return (
              <ListItem open={openModal} active={!isFulfilled} order={order} />
            );
          })}
        </ul>
      )}
      {modal ? <Modal order={activeOrder} close={closeModal} /> : ""}
    </div>
  );
}
