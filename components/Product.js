import { useState } from "react";

const Header = (props) => {
  const [active, setActive] = useState(false);

  // let active = props.selected.includes(props.product);
  // let active = props.selected[1] == props.product;
  // let toggle = () => {
  //   props.toggleSelected(props.product);
  // };
  //
  let product = props.product;

  console.log("selected product :", props.selected);

  return (
    <li
      onClick={props.setSelected}
      className={`flex-center-center order-product ${
        props.selected && !props.fulfilled ? "active-product" : ""
      }`}
    >
      {!props.fulfilled ? <div className={`checkbox`}></div> : ""}
      <div>
        <div className="tiny-tab"></div>
        <img src={product.img} />
      </div>
      <div>
        <h4>{product.name}</h4>
        <p>
          Message:
          <span
            style={{ color: "#4388F8", fontWeight: 700, marginLeft: "4px" }}
          >
            {product.message}
          </span>
        </p>
        <p>
          Sku:{" "}
          <span
            style={{ color: "#4388F8", fontWeight: 700, marginLeft: "4px" }}
          >
            {product.sku}
          </span>
        </p>
        <p>
          Quantity:{" "}
          <span
            style={{ color: "#4388F8", fontWeight: 700, marginLeft: "4px" }}
          >
            {product.qt}
          </span>
        </p>
      </div>
    </li>
  );
};
export default Header;
