import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function AddProduct({ addProduct }) {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      title,
      details,
      price,
      image,
    };

    addProduct(newProduct);

    navigate("/shop");
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        backgroundColor: "#fff",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Add Product</h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label>Product Title</label>
          <br />
          <input
            type="text"
            placeholder="Enter product title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ width: "100%", padding: "10px" }}
            required
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Product Details</label>
          <br />
          <textarea
            placeholder="Enter product details"
            rows="4"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            style={{ width: "100%", padding: "10px" }}
            required
          ></textarea>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Product Price</label>
          <br />
          <input
            type="number"
            placeholder="Enter product price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            style={{ width: "100%", padding: "10px" }}
            required
          />
        </div>

  

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#000",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}