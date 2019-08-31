import React from "react";

const Modal = ({ handleClose, show, children, btnText }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button onClick={handleClose}>{btnText}</button>
      </section>
    </div>
  );
};

export default Modal;
