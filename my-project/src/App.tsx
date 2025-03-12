import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import MUITheme from "./components/MuiThemeProvider";
import Navbar from "./components/Navbar";
import WelcomePage from "./components/Home";
import ProductList from "./components/ProductList"; // Product list component
import ProductDetailPage from "./components/ProductDetail";
import About from "./components/AboutUs"; // About page component

function App() {
  return (
    <MUITheme>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          {/* Home Page */}
          <Route path="/products" element={<ProductList />} />
          {/* Products Page */}
          <Route path="/products/:id" element={<ProductDetailPage />} />{" "}
          {/* Route for individual product */}
          <Route path="/about" element={<About />} />
          {/* About Us Page */}
        </Routes>
      </Router>
    </MUITheme>
  );
}

export default App;
