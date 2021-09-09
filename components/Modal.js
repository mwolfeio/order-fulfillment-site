import { useState } from "react";
import Product from "./Product.js";

const Header = (props) => {
  const [selected, setSelected] = useState([]);
  const [confirm, setConfirm] = useState(false);

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
          <h1>Order: 1111</h1>
          <button onClick={props.close} className="secondary">
            X
          </button>
        </div>
        <div className="flex-center-btw modal-ino">
          <div style={{ width: "40%" }}>
            <h2>Address</h2>
            <p>
              Matt Wolfe
              <br />
              16 Black Creek Lane
              <br />
              St. Louis MO 63124
              <br />
              United States
            </p>
          </div>
          <div className="divider-line"></div>
          <div style={{ width: "40%" }}>
            <h2>Information</h2>
            <p>
              September 1, 2021
              <br />
              at 12:40pm
              <br />
              from: Online Store
              <br />{" "}
            </p>
          </div>
        </div>
        {!confirm ? (
          <div>
            <div style={{ margin: "30px 0" }}>
              <h2>Select Products</h2>
              <p>
                Select all the products in this order you would like to mark as
                fulfilled.
              </p>
            </div>
            <ul className="modal-product-list">
              <Product
                selected={selected}
                toggleSelected={toggleSelected}
                product={"test"}
              />
            </ul>
            <div className="flex-center-btw" style={{ marginTop: "30px" }}>
              <button
                onClick={props.close}
                className="secondary"
                style={{ width: "Calc(50% - 8px)" }}
              >
                Close
              </button>
              <button
                onClick={() => setConfirm(true)}
                className="primary"
                style={{ width: "Calc(50% - 8px)" }}
              >
                Next
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div style={{ margin: "30px 0" }}>
              <h2>Shipping Informaiton</h2>
              <p>
                Please enter the shipping information for this order. This
                information will be sent to the customer.
              </p>
            </div>
            <input type="text" placeholder="Enter the shipping number" />

            <div className="flex-center-btw" style={{ marginTop: "30px" }}>
              <button
                onClick={() => setConfirm(false)}
                className="secondary"
                style={{ width: "Calc(50% - 8px)" }}
              >
                Back
              </button>
              <button
                onClick={props.close}
                className="primary"
                style={{ width: "Calc(50% - 8px)" }}
              >
                Fulfill Order
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Header;
