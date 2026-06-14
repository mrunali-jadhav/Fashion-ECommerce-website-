import { BestSellers } from "../components/BestSellers.jsx";

export function Shop({ products }) {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Our Fashion Collection</h1>

      <BestSellers />

      <h2 style={{ marginTop: "40px" }}>Newly Added Products</h2>

      {products.length === 0 ? (
        <p>No products added yet.</p>
      ) : (
        products.map((product, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              marginBottom: "20px",
              backgroundColor: "#fff"
            }}
          >
            

            <h3>{product.title}</h3>

            <p>{product.details}</p>

            <p>
              <strong>Price:</strong> ₹{product.price}
            </p>
          </div>
        ))
      )}
    </div>
  );
}