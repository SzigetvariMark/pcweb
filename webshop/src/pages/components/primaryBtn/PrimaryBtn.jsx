import React from "react";
import "./PrimaryBtn.css";

function PrimaryBtn({ children }) {
  return <button className="StyledButton">{children}</button>;
}

export default PrimaryBtn;
