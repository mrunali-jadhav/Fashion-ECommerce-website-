export function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Discover Your Perfect Style</h1>
         <a href="/add-product">
  <button
    style={{
      padding: "12px 24px",
      backgroundColor: "#000",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      fontSize: "16px",
      cursor: "pointer",
      marginTop: "20px"
    }}
  >
    Add Product
  </button>
</a>
        <p>
          Elevate your wardrobe with our latest fashion
          collections designed for every occasion.
        </p>


        <button>Explore Collection</button>
      </div>

      <img
        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
        alt="Fashion" style={{
    width: "800px",
    height: "500px",
    objectFit: "cover",
    borderRadius: "20px"
  }}
      />
    </section>
  );
}