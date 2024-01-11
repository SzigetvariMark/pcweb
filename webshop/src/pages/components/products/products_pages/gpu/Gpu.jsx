import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProductPage.css";

function Gpu() {
  const [gpus, setGpu] = useState([]);

  useEffect(() => {
    const fetchAllGpu = async () => {
      try {
        const res = await axios.get("http://localhost:8800/products");
        setGpu(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllGpu();
  }, []);

  return (
    <div className="gpu--container">
      <h1>Videókártyák</h1>
      <div className="gpu">
        {gpus.map((gpu) => (
          <div className="div" key={gpu.ID}>
            <h2>{gpu.ProductName}</h2>
            {gpu.Images && (
              <img src={gpu.Images} alt="videókártya" className="gpu--images" />
            )}
            <p>{gpu.Description}</p>
            <h3>{gpu.Price}</h3>
            <h4>{gpu.Specifications}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gpu;
