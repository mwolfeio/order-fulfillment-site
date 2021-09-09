import Product from "./Product.js";
const Header = (props) => {
  let order = props.order;

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
        {order.products.map((product) => (
          <Product
            fulfilled={order.fulfilled}
            selected={props.selected}
            toggleSelected={props.toggleSelected}
            product={product}
          />
        ))}
      </ul>
      <div className="flex-center-btw" style={{ marginTop: "30px" }}>
        <button
          onClick={props.close}
          className="secondary"
          style={{ width: !order.fulfilled ? "Calc(50% - 8px)" : "100%" }}
        >
          Close
        </button>
        {!order.fulfilled ? (
          <button
            disabled={
              props.shippingMethod && props.shippingNumber ? false : true
            }
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
