import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Services from "./Pages/Services";
import Products from "./Pages/Products";
import ContactUs from "./Pages/ContactUs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";



function App () {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contactUs" element={<ContactUs />} />
          {/* Add more routes if needed */}
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;