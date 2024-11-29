import React, { useState } from "react";
import styles from "./Modal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

function Modal(props) {
  const [status, setStatus] = useState("none");

  function closeModal() {
    props.onClose(); // Notify the parent to close the modal
  }

  return (
    <div
      className={styles.modalOuter}
      style={{ display: props.display }}
      // onClick={closeModal}
    >
      <div
        className={styles.Modal}
        style={{ background: `url(${props.imageURL})` }}
      >
        <div className={styles.content}>
          <button className={styles.btnclose} onClick={closeModal}>
            <FontAwesomeIcon icon={faX} className={styles.close} />
          </button>
          <h1 className={styles.title}>{props.title}</h1> {/*change this */}
          <p className={styles.description}>
            {/*change this */}
            {props.descrip}
          </p>
          <div className={styles.price}>{props.price}</div>
          {/*change this */}
          <p className={styles.size}>Sizes</p>
          <div className={styles.btndiv}>
            <button className={styles.btnsize}>S</button>
            <button className={styles.btnsize}>M</button>
            <button className={styles.btnsize}>L</button>
            <button className={styles.btnsize}>XL</button>
          </div>
          <button className={styles.checkout}>Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
