import React from "react";
import "./Head.css";

function Head() {
  function freeDelivery() {
    alert("Ingyenes szállítás, 200.000 forint felett!");
  }
  return (
    <header className="head">
      <input
        type="button"
        value="Akár ingyenes kiszállítás minden megrendelésre"
        className="head--input"
        onClick={freeDelivery}
      />
      <input
        type="button"
        value="Ingyenes visszaküldés 90 napon belül"
        className="head--input"
      />
    </header>
  );
}

export default Head;
