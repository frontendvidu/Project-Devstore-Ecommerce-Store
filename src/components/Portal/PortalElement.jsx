import React from "react";
import ReactDOM from "react-dom";
function PortalElement(props) {
  return ReactDOM.createPortal(
    <>{props.children}</>,
    document.getElementById("portal-root")
  );
}

export default PortalElement;
