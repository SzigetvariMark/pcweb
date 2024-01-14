import { useEffect, useState } from "react";
import { Products } from "./components";
import { Actions } from "./components";
import { Footer } from "./components";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);

  const cat = useLocation().search;

  console.log(location);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/products${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  return (
    <div>
      <Actions />
      <Products />
      <div className="gpu--container">
        <h1>Termékek</h1>
        <div className="gpu">
          {posts.map((item) => (
            <div className="div" key={item.ID}>
              <button>
                {item.Images && (
                  <img
                    src={item.Images}
                    alt="videókártya"
                    className="item--images"
                  />
                )}
              </button>
              <div>
                <h2>Termékneve: {item.ProductName}</h2>
                <p>{item.Description}</p>
                <h3>{item.Price}</h3>
                <h4>{item.Cat}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
