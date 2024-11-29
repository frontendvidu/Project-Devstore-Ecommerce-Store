import React from "react";
import sideData from "../data_to_render/sideData";
import Catalogue from "./Catalogue";
import Main from "./Main";
import mainData from "../data_to_render/mainData";

function Products() {
  return (
    <div className="content">
      {mainData.map((Data) => {
        return (
          <Main
            key={Data.key}
            name={Data.shoeName}
            price={Data.shoePrice}
            image={Data.background}
          />
        );
      })}
      ;
      <div className="productLeft">
        {sideData.map((oneData) => {
          return (
            <Catalogue
              key={oneData.key}
              name={oneData.shoeName}
              price={oneData.shoePrice}
              image={oneData.background}
              btnId={oneData.divId}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Products;
