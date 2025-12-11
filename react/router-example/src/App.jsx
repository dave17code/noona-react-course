import { use, useState } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./page/Homepage";
import Aboutpage from "./page/Aboutpage";
import Productpage from "./page/Productpage";
import ProductDetailPage from "./page/ProductDetailPage";
import LoginPage from "./page/LoginPage";
import UserPage from "./page/UserPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const PrivateRoute = () => {
    return isLoggedIn ? <UserPage /> : <Navigate to="/login" />;
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/products" element={<Productpage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user" element={<PrivateRoute />} />
      </Routes>
    </div>
  );
}

export default App;
