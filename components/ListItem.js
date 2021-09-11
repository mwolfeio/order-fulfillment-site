import UnFulfilled from "../media/UnFulfilled.js";
import Fulfilled from "../media/Fulfilled.js";
import PartlyFulfilled from "../media/PartlyFulfilled.js";

const Header = (props) => {
  let order = props.order;

  const selectOrder = () => {
    props.open(order.number);
  };

  let needsFulfilled = !props.percentFulfilled;
  // 0 = needs fulfillment
  let partlyFulfilled =
    props.percentFulfilled < 1 && props.percentFulfilled > 0;
  // 0-n = partial fulfillment
  let fulfilled = props.percentFulfilled === 1;
  // n = fulfilled

  console.log("needsFulfilled: ", needsFulfilled);
  console.log("partlyFulfilled: ", partlyFulfilled);
  console.log("fulfilled: ", fulfilled);

  return (
    <li
      onClick={selectOrder}
      className={`list-item ${
        needsFulfilled
          ? "active-list-item"
          : partlyFulfilled
          ? "partly-active-list-item"
          : ""
      }`}
    >
      <div className="flex-center-left">
        {needsFulfilled ? (
          <UnFulfilled />
        ) : partlyFulfilled ? (
          <PartlyFulfilled />
        ) : (
          <Fulfilled />
        )}
        <div style={{ marginLeft: "16px" }}>
          <h6>{order.number}</h6>
          <p>Larry Traverso</p>
        </div>
      </div>
      <div className="self-center">
        <h6>{order.date}</h6>
        <p>{order.time}</p>
      </div>
      <div className="self-center">
        <h6>{order.items}</h6>
        <p>items</p>
      </div>
      <div className="self-center">
        <h6>{order.customer}</h6>
        <p>{order.shippingAddress.address1}</p>
      </div>
      <div className="self-center">
        <h6>
          {order.products && order.products[0].shippingNumber
            ? order.products[0].shippingNumber
            : "-"}
        </h6>
        <p>
          {" "}
          {order.products && order.products[0].shippingMethod
            ? order.products[0].shippingMethod
            : "-"}
        </p>
      </div>
      <button
        className={`self-center ${
          needsFulfilled ? "primary" : partlyFulfilled ? "caution" : "secondary"
        }`}
      >
        {partlyFulfilled && (
          <div
            className="caution-button-status"
            style={{ width: `${props.percentFulfilled * 100}%` }}
          />
        )}
        <span style={{ position: "relative", zIndex: 1 }}>
          {needsFulfilled
            ? "Fulfill Order"
            : partlyFulfilled
            ? `${props.percentFulfilled * order.products.length}/${
                order.products.length
              } fulfilled`
            : "Fulfilled"}
        </span>
      </button>
    </li>
  );
};
export default Header;
