import { useState } from "react";
import FulfillmentComfirmation from "./FulfillmentComfirmation.js";
import FulfillmentSelection from "./FulfillmentSelection.js";

const Header = (props) => {
  const [selected, setSelected] = useState([]);
  const [shippingMethod, setShippingMethod] = useState("DHL");
  const [shippingNumber, setShippingNumber] = useState("");
  const [page, setPage] = useState(0);

  let order = props.order;

  console.log("selected: ", selected);

  const toggleSelected = (product) => {
    let productsArr = selected;
    let index = productsArr.indexOf(product);
    console.log("included: ", productsArr.includes(product));

    productsArr.includes(product)
      ? productsArr.splice(index, 1)
      : productsArr.push(product);
    console.log("new arr: ", productsArr);

    setSelected(productsArr);
  };

  if (!props.active) return <div></div>;

  return (
    <div className="modal-background">
      <div className="modal-wrapper">
        <div className="flex-center-btw">
          <h1>
            Order:{" "}
            <span style={{ color: "#4E5D78", marginLeft: "8px" }}>
              {order.number}
            </span>
          </h1>
          <button
            onClick={() => {
              setPage(0);
              props.close();
            }}
            style={{ width: "43px" }}
            className="secondary"
          >
            X
          </button>
        </div>
        <div className="flex-center-btw modal-ino">
          <div style={{ width: "40%" }}>
            <h2>Address</h2>
            <p>
              {order.customer}
              <br />
              {order.shippingAddress.address1}
              <br />
              {order.shippingAddress.city} {order.shippingAddress.state}{" "}
              {order.shippingAddress.zip}
              <br />
              {order.shippingAddress.country}
            </p>
          </div>
          <div className="divider-line"></div>
          <div style={{ width: "40%" }}>
            <h2>Information</h2>
            <p>
              {order.date}, 2021
              <br />
              {order.time}
              <br />
              from: Online Store
              <br />
              {order.shippingNumber
                ? `Shipping #: ${order.shippingNumber}`
                : ""}
              <br />
            </p>
          </div>
        </div>
        {!page ? (
          <FulfillmentSelection
            order={order}
            selected={selected}
            toggleSelected={toggleSelected}
            close={() => {
              setPage(0);
              props.close();
            }}
            next={() => setPage(1)}
          />
        ) : (
          <FulfillmentComfirmation
            back={() => setPage(0)}
            submit={() => console.log("submit")}
            shippingMethod={shippingMethod}
            setShippingMethod={setShippingMethod}
            shippingNumber={shippingNumber}
            setShippingNumber={setShippingNumber}
          />
        )}
      </div>
    </div>
  );
};
export default Header;
