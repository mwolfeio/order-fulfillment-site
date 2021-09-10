import { useState } from "react";

const Header = (props) => {
  const [active, setActive] = useState(false);

  // let active = props.selected.includes(props.product);
  // let active = props.selected[1] == props.product;
  // let toggle = () => {
  //   props.toggleSelected(props.product);
  // };

  let product = props.product;
  let font = product.font ? product.font.replace("Font_", "") : "";

  console.log("selected product :", props.selected);

  return (
    <li
      onClick={!product.fulfilled ? props.setSelected : null}
      className={`flex-center-center order-product ${
        !product.fulfilled ? "not-disabled-product" : ""
      } ${props.selected && !product.fulfilled ? "active-product" : ""}`}
    >
      {!product.fulfilled ? <div className={`checkbox`}></div> : ""}
      <div className="product-img-wrapper">
        <div className={`tiny-tab ${product.fulfilled ? "disabled-tab" : ""}`}>
          {!product.fulfilled ? `QT ${product.qt}` : "Fulfilled"}
        </div>
        <div
          className={`text-overlay flex-center-center ${font
            .replace("&", "")
            .replace(/\s/g, "-")}-font`}
        >
          {product.message}
        </div>
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
          Font:
          <span
            style={{ color: "#4388F8", fontWeight: 700, marginLeft: "4px" }}
          >
            {font}
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
