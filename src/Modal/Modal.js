import React from "react";
import ReactDOM from "react-dom";
import OverLay from "./OverLay";

const Modal = ({children}) => {

  return ReactDOM.createPortal(
    <OverLay >{children}</OverLay>,
    document.getElementById("modal")
  );
};

export default Modal;
