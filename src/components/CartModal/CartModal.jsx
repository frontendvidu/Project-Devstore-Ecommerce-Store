import React from "react";
import styles from "./CartModal.module.css";

function CartModal(props) {
  return (
    <div className={styles.outerCartModal}>
      <div className={styles.innerCartModal}>
        <h3 className={styles.titleCartModal}>Shopping Continue</h3>
        <div></div>
        <p className={styles.paraCartModal}>You have 3 items in your cart</p>
        <div className={styles.itemCartModal}>
          <h5 className={styles.itemNameCartModal}>Italy Pizza</h5>
          <p className={styles.itemPriceCartModal}>$681</p>
          <button className={styles.removeButtonCartModal}>Remove</button>
        </div>
        <button onClick={() => props.handleClose()}>{"\u2716"}</button>
      </div>
    </div>
  );
}

export default CartModal;
