import { useEffect, useState } from "react";
import { supabase } from "../supabase";
import { BestSellers } from "../Components/BestSellers.jsx";

export function Shop() {
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    const { data } = await supabase
      .from("products")
      .select("*");

    setProducts(data);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Our Fashion Collection</h1>

      <BestSellers />

      <h2 style={{ marginTop: "40px" }}>
        Products Added by Admin
      </h2>

      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "10px",
            backgroundColor: "#fff",
          }}
        >
          <h3>{product.title}</h3>

          <p>{product.details}</p>

          <p>
            <strong>Price:</strong> ₹{product.price}
          </p>
        </div>
      ))}
    </div>
  );
}