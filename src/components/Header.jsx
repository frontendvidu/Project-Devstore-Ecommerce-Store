import React, { useState } from "react";
import Modal from "./Modal/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

function Heading() {
  return (
    <header className="flexHorizontal">
      <div className="headerLeft flexHorizontal">
        <p className="logo">devstore</p>
        <form action="" className="formStyle flexHorizontal">
          <button>
            <FontAwesomeIcon icon={faSearch} />
          </button>
          <input type="search" placeholder="Search products" />
        </form>
      </div>
      <div className="headerRight flexHorizontal">
        <button className="headerText cartButton">
          <FontAwesomeIcon icon={faBagShopping} />
          Cart
        </button>

        <div>
          <button className="headerText accountButton flexHorizontal">
            Account
            <img src="../images/account.png" alt="" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Heading;
