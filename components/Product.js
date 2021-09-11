import { useState } from "react";
import { gql, useQuery } from "@apollo/client";

const GET_PRODUCTS = gql`
  query getProducts($id: ID!) {
    node(id: $id) {
      ... on Product {
        title
        images(first: 3, maxWidth: 145, maxHeight: 100) {
          edges {
            node {
              src
            }
          }
        }
        tags
      }
    }
  }
`;

const Header = ({ selected, setSelected, product }) => {
  const [active, setActive] = useState(false);
  const [imgeLoaded, setImageLoaded] = useState(false);
  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    fetchPolicy: "no-cache",
    variables: { id: btoa(`gid://shopify/Product/${product.product_id}`) },
  });

  let imgSrc =
    data && data.node
      ? data.node.images.edges[1].node.src
      : "https://i.stack.imgur.com/y9DpT.jpg";
  let font =
    data && data.node
      ? data.node.tags[
          data.node.tags.findIndex((t) => t.includes("Font_"))
        ].replace("Font_", "")
      : "";

  return (
    <li
      onClick={!product.fulfilled ? setSelected : null}
      className={`flex-center-center order-product ${
        !product.fulfilled ? "not-disabled-product" : ""
      } ${selected && !product.fulfilled ? "active-product" : ""}`}
    >
      {loading ? (
        <h4>Loading...</h4>
      ) : (
        <div className="flex-center-center">
          {!product.fulfilled ? <div className={`checkbox`}></div> : ""}

          <div className="product-img-wrapper">
            <div
              className={`tiny-tab ${product.fulfilled ? "disabled-tab" : ""}`}
            >
              {!product.fulfilled ? `QT ${product.qt}` : "Fulfilled"}
            </div>
            {product.fulfilled && (
              <div className={`tiny-tab tab-reversed disabled-tab" `}>
                {`${product.shippingMethod}: ${product.shippingNumber}`}
              </div>
            )}
            <div
              style={imgeLoaded ? {} : { visibility: "hidden" }}
              className={`text-overlay flex-center-center  ${font
                .replace("&", "")
                .replace(/\s/g, "-")}-font`}
            >
              <span
                className={`${product.sku === "PM105" ? "msg-adjustment" : ""}`}
              >
                {product.message}
              </span>
            </div>
            <img
              style={imgeLoaded ? {} : { visibility: "hidden" }}
              src={imgSrc}
              onLoad={() => setImageLoaded(true)}
            />
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
        </div>
      )}
    </li>
  );
};
export default Header;
