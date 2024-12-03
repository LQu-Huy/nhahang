// src/Header.js
import React, { useState } from "react";
import "./Header.css"; // Import the CSS for styling
import logo from "../image/logo.jpg"; // Adjust the path as necessary
import MenuModal from "./MenuModal"; // Import MenuModal
import CartModal from "./CartModal"; // Import CartModal

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const toggleMenu = () => setMenuOpen(!isMenuOpen);
  const toggleCart = () => setCartOpen(!isCartOpen);

  return (
    <header className="header">
      <div className="yellow-rectangle">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="button-container">
          <div className="button" onClick={toggleMenu}>
            Thực Đơn
          </div>
          <div className="button">Giao Hàng</div>
          <div className="button">Chi Nhánh</div>
          <div className="button" onClick={toggleCart}>
            Giỏ Hàng
          </div>
        </div>
      </div>

      {/* Hiển thị modal thực đơn */}
      {isMenuOpen && (
        <MenuModal onClose={toggleMenu} onAddToCart={handleAddToCart} />
      )}

      {/* Hiển thị modal giỏ hàng */}
      {isCartOpen && <CartModal items={cartItems} onClose={toggleCart} />}
    </header>
  );
};

export default Header;
