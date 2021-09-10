import Product from "./Product.js";
const Header = (props) => {
  let order = props.order;
  let isFulfilled = order.products.every((prod) => prod.fulfilled);

  console.log("selected FufillmentSelection: ", props.selected);
  return (
    <div>
      <div style={{ margin: "30px 0" }}>
        <h2>Select Products</h2>
        <p>
          Select all the products in this order you would like to mark as
          fulfilled.
        </p>
      </div>
      <ul className="modal-product-list">
        {order.products.map((product) => {
          let active = props.selected.includes(product);
          return (
            <Product
              selected={active}
              setSelected={() => props.setSelected(product)}
              product={product}
            />
          );
        })}
      </ul>
      <div className="flex-center-btw" style={{ marginTop: "30px" }}>
        <button
          onClick={props.close}
          className="secondary"
          style={{ width: !isFulfilled ? "Calc(50% - 8px)" : "100%" }}
        >
          Close
        </button>
        {!isFulfilled ? (
          <button
            disabled={props.selected.length > 0 ? false : true}
            onClick={props.next}
            className="primary"
            style={{ width: "Calc(50% - 8px)" }}
          >
            Next
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default Header;
