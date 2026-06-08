export function ShopByCategory() {
  const categories = [
    "Men",
    "Women",
    "Shoes",
    "Accessories"
  ];

  return (
    <section>
      <h2>Shop By Category</h2>

      <div className="categories">
        {categories.map((item) => (
          <div className="category-card" key={item}>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}