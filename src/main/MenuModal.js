// src/MenuModal.js
import React from "react";
import "./Modal.css"; // Import CSS cho modal
import p1 from "../image/bunca.jpg";
import p2 from "../image/download (1).jpg";
import p3 from "../image/nem.jpg";
import p4 from "../image/noodle.jpg";
const MenuModal = ({ onClose, onAddToCart }) => {
  const menuItems = [
    {
      id: 1,
      name: "Bún Cá",
      price: 20000.0,
      image: p1,
    },
    { id: 2, name: "Thịt Nướng", price: 150000.0, image: p2 },
    { id: 3, name: "Nem", price: 80000.0, image: p3 },
    { id: 4, name: "Mì Quảng", price: 30000.0, image: p4 },
  ];

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Thực Đơn</h2>
          <button className="close-button" onClick={onClose}>
            Đóng
          </button>
        </div>
        <div className="modal-body">
          <ul>
            {menuItems.map((item) => (
              <li key={item.id} className="menu-item">
                <img src={item.image} alt={item.name} className="menu-image" />
                <span>
                  {item.name} - {item.price} VNĐ
                </span>
                <button
                  className="add-to-cart-button"
                  onClick={() => onAddToCart(item)}
                >
                  Thêm vào giỏ
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuModal;
