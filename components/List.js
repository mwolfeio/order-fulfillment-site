import { useState } from "react";

import ListItem from "./ListItem.js";
import Modal from "./Modal.js";

const Header = () => {
  const [modal, setModal] = useState(false);

  const closeModal = () => {
    setModal(false);
  };
  const openModal = () => {
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
          <p>Actoin</p>
        </li>
        <ListItem open={openModal} />
      </ul>
      <Modal active={modal} close={closeModal} />
    </div>
  );
};
export default Header;
