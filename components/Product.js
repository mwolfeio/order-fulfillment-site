import { useState } from "react";

const Header = (props) => {
  let active = props.selected.includes(props.product);
  let toggle = () => {
    props.toggleSelected(props.product);
  };

  return (
    <li
      onClick={toggle}
      className={`flex-center-center order-product ${
        active ? "active-product" : ""
      }`}
    >
      <div className={`checkbox`}></div>
      <div>
        <div className="tiny-tab"></div>
        <img src="https://cdn.shopify.com/s/files/1/0560/2577/6295/products/111_499x338.png?v=1629498291%201.00x" />
      </div>
      <div>
        <h4>Cathedral Trellis Border Doormat</h4>
        <p>
          Message:{" "}
          <span style={{ color: "#4388F8", fontWeight: 700 }}>Test 2</span>
        </p>
        <p>
          Sku: <span style={{ color: "#4388F8", fontWeight: 700 }}>PM112</span>
        </p>
        <p>
          Quantity: <span style={{ color: "#4388F8", fontWeight: 700 }}>2</span>
        </p>
      </div>
    </li>
  );
};
export default Header;
