import React from "react";
import "./Head.css";

function Head() {
  function freeDelivery() {
    alert("Ingyenes szállítás");
    console.log("hello");
  }
  return (
    <header className="head">
      <input
        type="button"
        value="Ingyenes szállítás minden megrendelésre Korlátozott idejű ajánlat"
        className="head--input"
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
