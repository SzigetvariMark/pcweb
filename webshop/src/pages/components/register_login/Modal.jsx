import React from "react";

const MODAL_STYLE = {
  positon: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  padding: "50px",
  zIndex: 1000,
};

export default function Modal({ open, children, onClose }) {
  if (!open) return null;

  return (
    <div>
      <button className="close--button" onClick={onClose}>
        Close Modal
      </button>
      <div>{children}</div>
    </div>
  );
}
