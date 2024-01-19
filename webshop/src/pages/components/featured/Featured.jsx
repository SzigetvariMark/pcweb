import React from "react";
import "./Featured.css";

export default function Featured() {
  return (
    <div className="featured--container">
      <div className="featured--wrapper">
        <div>
          <h1 className="featured--title">Pro anywhere</h1>
          <p className="featured--desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            porro omnis nobis tenetur quos excepturi. Voluptate. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, doloribus natus veritatis fuga nisi deserunt dolor optio nobis exercitationem, laboriosam quidem? Dolorem ut facere nobis exercitationem nisi? Earum molestiae cum incidunt magnam veritatis.
          </p>
        </div>
        <div>
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
