const Header = (props) => {
  let shippingMethods = ["DHL Express", "FedEx", "UPS"];
  return (
    <div>
      <div style={{ margin: "30px 0" }}>
        <h2>Shipping Information</h2>
        <p>
          Please enter the shipping information for this order. This information
          will be sent to the customer.
        </p>
      </div>
      <input
        type="text"
        placeholder="Enter the Tracking number"
        onChange={(e) => props.setShippingNumber(e.target.value)}
        value={props.shippingNumber}
      />
      <div className="selector flex-center-btw">
        {shippingMethods.map((shippingMethod) => (
          <div
            key={`${shippingMethod}-key`}
            className={`flex-center-center ${
              props.shippingMethod === shippingMethod ? "active-method" : ""
            }`}
            onClick={() => props.setShippingMethod(shippingMethod)}
          >
            {shippingMethod}
          </div>
        ))}
      </div>

      <div className="flex-center-btw" style={{ marginTop: "30px" }}>
        <button
          onClick={props.back}
          className="secondary"
          style={{ width: "Calc(50% - 8px)" }}
        >
          Back
        </button>
        <button
          onClick={props.submit}
          className="primary"
          disabled={props.shippingMethod && props.shippingNumber ? false : true}
          style={{ width: "Calc(50% - 8px)" }}
        >
          Fulfill Order
        </button>
      </div>
    </div>
  );
};
export default Header;
