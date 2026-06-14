import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { Navbar } from "./Components/Navbar.jsx";
import { Footer } from "./Components/Footer.jsx";

import { Home } from "./Pages/Home.jsx";
import { Shop } from "./Pages/Shop.jsx";
import { About } from "./Pages/About.jsx";
import { Contact } from "./Pages/Contact.jsx";
import { AddProduct } from "./Pages/AddProduct.jsx";

function App() {
  const [products, setProducts] = useState([]);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <div style={{ backgroundColor: "#eadbee", minHeight: "100vh" }}>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/shop"
          element={<Shop products={products} />}
        />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route
          path="/add-product"
          element={<AddProduct addProduct={addProduct} />}
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;