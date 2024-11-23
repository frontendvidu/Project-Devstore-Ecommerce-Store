import React from "react";

function Products() {
  return (
    <div className="content">
      <div className="productMain">
        <button className="contentButton">
          Eryx Hoody <span>120USD</span>
        </button>
      </div>
      <div className="productLeft">
        <div className="productLeftOne top">
          <button className="contentButton">
            Maia Hoodie <span>99USD</span>
          </button>
        </div>
        <div className="productLeftOne bottom">
          <button className="contentButton">
            M G Hoodie <span>89USD</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Products;
