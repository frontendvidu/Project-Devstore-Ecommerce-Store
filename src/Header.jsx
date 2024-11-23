import React from "react";

function Heading() {
  return (
    <header className="flexHorizontal">
      <div className="headerLeft flexHorizontal">
        <p className="logo">devstore</p>
        <form action="" className="formStyle flexHorizontal">
          <button>
            <i class="fa-solid fa-magnifying-glass searchIcon"></i>
          </button>
          <input type="search" placeholder="Search products" />
        </form>
      </div>
      <div className="headerRight flexHorizontal">
        <button className="headerText cartButton">
          <i class="fa-solid fa-bag-shopping cartIcon"></i>Cart
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
