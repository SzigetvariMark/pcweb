import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

export default function AuctionForm({
  _id,
  title: existingTitle,
  description: existingDescription,
  price: existingPrice,
  images: existingImages,
}) {
  const [title, setTitle] = useState(existingTitle || "");
  const [description, setDescription] = useState(existingDescription || "");
  const [price, setPrice] = useState(existingPrice || "");
  const [goToProducts, setGoToProducts] = useState(false);
  const router = useRouter();
  const [images, setImages] = useState(existingImages || [""]);

  const handleImageChange = (index, value) => {
    const newImages = [...images];
    newImages[index] = value;
    setImages(newImages);
  };

  const handleAddImages = () => {
    setImages([...images, ""]);
  };

  async function saveAuction(ev) {
    ev.preventDefault();
    const data = { title, description, price, images: images || [] };
    if (_id) {
      await axios.put("/api/auction", { ...data, _id });
    } else {
      await axios.post("/api/auction", data);
    }
    setGoToProducts(true);
  }
  if (goToProducts) {
    router.push("/auction");
  }
  return (
    <form onSubmit={saveAuction}>
      <label>Auction name</label>
      <input
        type="text"
        placeholder="auction name"
        value={title}
        onChange={(ev) => setTitle(ev.target.value)}
      />
      <label>Photos</label>
      {images.map((image, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="auction images"
            value={image}
            onChange={(ev) => handleImageChange(index, ev.target.value)}
          />
          <img
            src={image}
            alt="kepek"
            className="m-0 max-h-36 max-w-20 bg-slate-400 p-2 rounded-lg mb-2"
          />
        </div>
      ))}
      <button type="button" className="btn-primary" onClick={handleAddImages}>
        More image
      </button>
      <div className="mb-1"></div>
      <label>auction description</label>
      <textarea
        placeholder="description"
        value={description}
        onChange={(ev) => setDescription(ev.target.value)}
      />
      <label>Price</label>
      <input
        type="number"
        placeholder="price"
        value={price}
        onChange={(ev) => setPrice(ev.target.value)}
      />
      <label>When start the auction</label>
      <input type="date" />
      <button type="submit" className="btn-primary">
        Save
      </button>
    </form>
  );
}
