import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ProductForm({
  _id,
  title: existingTitle,
  description: existingDescription,
  price: existingPrice,
  amount: existingAmount,
  images: existingImages,
  category: assignedCategory,
}) {
  const [title, setTitle] = useState(existingTitle || "");
  const [description, setDescription] = useState(existingDescription || "");
  const [price, setPrice] = useState(existingPrice || "");
  const [goToProducts, setGoToProducts] = useState(false);
  const [category, setCategory] = useState(assignedCategory || "");
  const [categories, setCategories] = useState([]);
  const [amount, setAmount] = useState(existingAmount || "");
  const router = useRouter();
  const [images, setImages] = useState(existingImages || [""]);
  useEffect(() => {
    axios.get("/api/categories").then((result) => {
      setCategories(result.data);
    });
  }, []);

  const handleImageChange = (index, value) => {
    const newImages = [...images];
    newImages[index] = value;
    setImages(newImages);
  };

  const handleAddImages = () => {
    setImages([...images, ""]);
  };

  async function saveProduct(ev) {
    ev.preventDefault();
    const data = {
      title,
      description,
      price,
      category,
      amount,
      images: images || [],
    };
    if (_id) {
      await axios.put("/api/products", { ...data, _id });
    } else {
      await axios.post("/api/products", data);
    }
    setGoToProducts(true);
  }
  if (goToProducts) {
    router.push("/products");
  }
  return (
    <form onSubmit={saveProduct}>
      <label>Product name</label>
      <input
        type="text"
        placeholder="product name"
        value={title}
        onChange={(ev) => setTitle(ev.target.value)}
      />
      <label>Category</label>
      <select value={category} onChange={(ev) => setCategory(ev.target.value)}>
        <option value="">Uncategorized</option>
        {categories.length > 0 &&
          categories.map((c) => <option value={c._id}>{c.name}</option>)}
      </select>
      <label>Photos</label>
      {images.map((image, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="product images"
            value={image}
            onChange={(ev) => handleImageChange(index, ev.target.value)}
            className="mb-2"
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
      <label>Product description</label>
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
        className="mb-2"
      />
      <label>Amount</label>
      <input
        type="number"
        placeholder="amount"
        value={amount}
        onChange={(ev) => setAmount(ev.target.value)}
        className="mb-2"
      />
      <button type="submit" className="btn-primary">
        Save
      </button>
    </form>
  );
}
