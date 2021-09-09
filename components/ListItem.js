import UnFulfilled from "../media/UnFulfilled.js";
import Fulfilled from "../media/Fulfilled.js";

const Header = (props) => {
  let order = props.order;

  const selectOrder = () => {
    props.open(order.number);
  };

  return (
    <li
      onClick={selectOrder}
      className={`list-item ${props.active ? "active-list-item" : ""}`}
    >
      <div className="flex-center-left">
        {props.active ? <UnFulfilled /> : <Fulfilled />}
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
        <h6>{order.shippingNumber ? order.shippingNumber : "-"}</h6>
        <p>Shipping Number</p>
      </div>
      <button
        className={`self-center ${props.active ? "primary" : "secondary"}`}
      >
        {props.active ? "Fulfill Order" : "Fulfilled"}
      </button>
    </li>
  );
};
export default Header;
