export function BestSellers() {
  const products = [
    {
      name: "Premium Hoodie",
      price: "₹1499"
    },
    {
      name: "Denim Jacket",
      price: "₹1999"
    },
    {
      name: "White Sneakers",
      price: "₹2499"
    },
    {
      name: "Leather Bag",
      price: "₹1799"
    }
  ];

  return (
    <section>
      <h2>Best Sellers</h2>

      <div className="products">
        {products.map((item, index) => (
          <div className="product-card" key={index}>
            <div className="product-image"></div>

            <h3>{item.name}</h3>

            <p>{item.price}</p>

            <button>Buy Now</button>
          </div>
        ))}
      </div>
    </section>
  );
}