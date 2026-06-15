import { Routes, Route } from "react-router-dom";

import { Navbar } from "./Components/Navbar.jsx";
import { Footer } from "./Components/Footer.jsx";

import { Home } from "./Pages/Home.jsx";
import { Shop } from "./Pages/Shop.jsx";
import { About } from "./Pages/About.jsx";
import { Contact } from "./Pages/Contact.jsx";
import { AddProduct } from "./Pages/AddProduct.jsx";

function App() {
  return (
    <div style={{ backgroundColor: "#eadbee", minHeight: "100vh" }}>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/add-product" element={<AddProduct />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;