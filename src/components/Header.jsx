import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import CartModal from "./CartModal/CartModal";
import PortalElement from "./Portal/PortalElement";
function Heading() {
  const [cartCheck, setCartCheck] = useState(false);

  function handleCartVisibility() {
    setCartCheck((prev) => !prev);
  }

  function handleCartClose() {
    setCartCheck(false);
  }

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
        <button
          onClick={handleCartVisibility}
          className="headerText cartButton"
        >
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
      <PortalElement>
        {cartCheck && <CartModal handleClose={handleCartClose} />}
      </PortalElement>
    </header>
  );
}

export default Heading;
