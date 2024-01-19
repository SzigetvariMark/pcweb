import React from "react";
import "./Featured.css";
import PrimartBtn from "../primaryBtn/PrimaryBtn";

export default function Featured() {
  return (
    <div className="featured--container">
      <div className="featured--wrapper">
        <div className="featured--column">
          <div>
            <h1 className="featured--title">Pro anywhere</h1>
            <p className="featured--desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              porro omnis nobis tenetur quos excepturi. Voluptate. Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Necessitatibus,
              doloribus natus veritatis fuga nisi deserunt dolor optio nobis
              exercitationem.
            </p>
            <div className="featured--buttons">
              <button className="featured--btn">Read more</button>
              <PrimartBtn>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                </svg>
                Add to cart
              </PrimartBtn>
            </div>
          </div>
        </div>
        <div className="featured--column">
          <img
            src="https://github.com/SzigetvariMark/pcweb/blob/main/SQLIMG/i9gen14.jpg?raw=true"
            alt="Processzor"
            className="featured--image"
          />
        </div>
      </div>
    </div>
  );
}
