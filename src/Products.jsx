import React from "react";
import data from "./data";
import Catalogue from "./Catalogue";

function Products() {
  return (
    <div className="content">
      <div className="productMain">
        <button className="contentButton">
          Eryx Hoody <span>120USD</span>
        </button>
      </div>
      <div className="productLeft">
        {data.map((oneData) => {
          return (
            <Catalogue
              key={oneData.key}
              name={oneData.shoeName}
              price={oneData.shoePrice}
              image={oneData.background}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Products;
