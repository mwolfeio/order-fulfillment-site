import UnFulfilled from "../media/UnFulfilled.js";
import Fulfilled from "../media/UnFulfilled.js";

const Header = (props) => {
  let active = true;

  return (
    <li
      onClick={props.open}
      className={`list-item ${active ? "active-list-item" : ""}`}
    >
      <div className="flex-center-left">
        {active ? <UnFulfilled /> : <Fulfilled />}
        <div style={{ marginLeft: "16px" }}>
          <h6>Order Number</h6>
          <p>Larry Traverso</p>
        </div>
      </div>
      <div className="self-center">
        <h6>order date</h6>
        <p>time</p>
      </div>
      <div className="self-center">
        <h6>0</h6>
        <p>items</p>
      </div>
      <div className="self-center">
        <h6>Customers</h6>
        <p>address</p>
      </div>
      <div className="self-center">
        <h6>-</h6>
        <p>Shipping Number</p>
      </div>
      <button className={`self-center ${active ? "primary" : "secondary"}`}>
        {active ? "Fulfill Order" : "Filfilled"}
      </button>
    </li>
  );
};
export default Header;
