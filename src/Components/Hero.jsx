export function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Discover Your Perfect Style</h1>

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