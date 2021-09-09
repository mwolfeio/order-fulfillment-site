import { useState } from "react";

import ListItem from "./ListItem.js";
import Modal from "./Modal.js";

const orders = [
  // {
  //   number: "LT1009",
  //   date: "September 9",
  //   time: "8:35am",
  //   customer: "Matt Wolfe",
  //   shippingAddress: {
  //     address1: "16 Black Creek Lane",
  //     city: "St. Louis",
  //     state: "MO",
  //     zip: "63124",
  //     country: "United States",
  //   },
  //   items: 1,

  //   products: [
  //     {
  //       name: "Oak Leaves Border Doormat",
  //       qt: "1",
  //       img:
  //         "https://cdn.shopify.com/s/files/1/0560/2577/6295/products/4_499x338.jpg?v=1629318983",
  //       message: "Arjun",
  //       sku: "PM103",
  //   fulfilled: false,
  //   shippingNumber: "",  //     },
  //   ],
  // },
  {
    number: "LT1009",
    date: "September 1",
    time: "12:40am",
    customer: "Matt Wolfe",
    shippingAddress: {
      address1: "16 Black Creek Lane",
      city: "St. Louis",
      state: "MO",
      zip: "63124",
      country: "United States",
    },
    items: 1,

    products: [
      {
        name: "Products Victorian Border Doormat",
        qt: "1",
        img:
          "//cdn.shopify.com/s/files/1/0560/2577/6295/products/131_1032x700.png?v=1629743213",
        message: "TestMat",
        sku: "PM112",
        fulfilled: true,
        shippingNumber: "1234",
      },
    ],
  },
  {
    number: "LT1008",
    date: "September 1",
    time: "7:30am",
    customer: "Matt Wolfe",
    shippingAddress: {
      address1: "16 Black Creek Lane",
      city: "St. Louis",
      state: "MO",
      zip: "63124",
      country: "United States",
    },
    items: 1,

    products: [
      {
        name: "Oak Leaves Border Doormat",
        qt: "1",
        img:
          "https://cdn.shopify.com/s/files/1/0560/2577/6295/products/4_499x338.jpg?v=1629318983",
        message: "2323",
        sku: "PM103",
        fulfilled: false,
        shippingNumber: "",
      },
    ],
  },
  {
    number: "LT1007",
    date: "September 1",
    time: "7:24am",
    customer: "Matt Wolfe",
    shippingAddress: {
      address1: "16 Black Creek Lane",
      city: "St. Louis",
      state: "MO",
      zip: "63124",
      country: "United States",
    },
    items: 1,

    products: [
      {
        name: "English Ironwork Border Doormat",
        qt: "1",
        img:
          "https://cdn.shopify.com/s/files/1/0560/2577/6295/products/8499336670_499x338.png?v=1629743118",
        message: "2222222",
        sku: "PM107",
        fulfilled: true,
        shippingNumber: "2222222",
      },
    ],
  },
  {
    number: "LT1006",
    date: "September 1",
    time: "7:02am",
    customer: "Matt Wolfe",
    shippingAddress: {
      address1: "16 Black Creek Lane",
      city: "St. Louis",
      state: "MO",
      zip: "63124",
      country: "United States",
    },
    items: 1,

    products: [
      {
        name: "Asian Border Doormat",
        qt: "1",
        img:
          "https://cdn.shopify.com/s/files/1/0560/2577/6295/products/141_499x338.png?v=1629743154",
        message: "2222222",
        sku: "PM111",
        fulfilled: true,
        shippingNumber: "11111111",
      },
    ],
  },
  {
    number: "LT1005",
    date: "August 31",
    time: "11:53pm",
    customer: "Matt Wolfe",
    shippingAddress: {
      address1: "16 Black Creek Lane",
      city: "St. Louis",
      state: "MO",
      zip: "63124",
      country: "United States",
    },
    items: 1,

    products: [
      {
        name: "Falling Leaves Border Doormat",
        qt: "1",
        img:
          "https://cdn.shopify.com/s/files/1/0560/2577/6295/products/3_499x338.jpg?v=1629318496",
        message: "Dz nuts",
        sku: "PM104",
        fulfilled: true,
        shippingNumber: "112345Z2345",
      },
    ],
  },
  {
    number: "LT1004",
    date: "September 1",
    time: "11:05pm",
    customer: "Matt Wolfe",
    shippingAddress: {
      address1: "16 Black Creek Lane",
      city: "St. Louis",
      state: "MO",
      zip: "63124",
      country: "United States",
    },
    items: 1,

    products: [
      {
        name: "Victorian Border Doormat",
        qt: "1",
        img:
          "https://cdn.shopify.com/s/files/1/0560/2577/6295/products/131_499x338.png?v=1629743213",
        message: "Tesrerer",
        sku: "PM112",
        fulfilled: true,
        shippingNumber: "112345Z2345",
      },
    ],
  },
  {
    number: "LT1002",
    date: "August 31",
    time: "7:47pm",
    customer: "Matt Wolfe",
    shippingAddress: {
      address1: "16 Black Creek Lane",
      city: "St. Louis",
      state: "MO",
      zip: "63124",
      country: "United States",
    },
    items: 1,

    products: [
      {
        name: "Medallion Corners Doormat",
        qt: "1",
        img:
          "https://cdn.shopify.com/s/files/1/0560/2577/6295/products/111_499x338.png?v=1629498291",
        message: "314",
        sku: "PM113",
        fulfilled: true,
        shippingNumber: "123",
      },
    ],
  },
  {
    number: "LT1001",
    date: "August 20",
    time: "6:47pm",
    customer: "Matt Wolfe",
    shippingAddress: {
      address1: "16 Black Creek Lane",
      city: "St. Louis",
      state: "MO",
      zip: "63124",
      country: "United States",
    },
    items: 1,

    products: [
      {
        name: "Medallion Corners Doormat",
        qt: "1",
        img:
          "https://cdn.shopify.com/s/files/1/0560/2577/6295/products/111_499x338.png?v=1629498291",
        message: "314",
        sku: "Test",
        fulfilled: true,
        shippingNumber: "123",
      },
    ],
  },
];

const Header = (props) => {
  const [modal, setModal] = useState(false);
  const [activeOrder, setActiveOrder] = useState({});

  console.log(activeOrder);

  const closeModal = () => {
    setModal(false);
    setActiveOrder({});
  };
  const openModal = (orderNumber) => {
    let order = orders.find((o) => o.number === orderNumber);

    setActiveOrder(order);
    setModal(true);
  };

  return (
    <div className="List-wrapper">
      <div className="flex-center-btw">
        <h1>
          Order History{" "}
          <span style={{ marginLeft: "8px" }} className="sub-title">
            (10 Unfulfilled)
          </span>
        </h1>
        <div>Date picker</div>
      </div>
      <ul className="list-contaiener">
        <li className="list-header">
          <p>order</p>
          <p>order date</p>
          <p>items</p>
          <p>customer</p>
          <p>Shipping #</p>
          <p style={{ justifySelf: "end" }}>Action</p>
        </li>
        {orders.map((order) => {
          let isFulfilled = order.products.every((prod) => prod.fulfilled);
          if (props.filter && isFulfilled !== props.filter) return;
          return (
            <ListItem open={openModal} active={!isFulfilled} order={order} />
          );
        })}
      </ul>
      {modal ? <Modal order={activeOrder} close={closeModal} /> : ""}
    </div>
  );
};
export default Header;
