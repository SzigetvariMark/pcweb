import React from "react";

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
