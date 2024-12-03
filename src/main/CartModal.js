// src/CartModal.js
import React from "react";
import "./Modal.css"; // Import CSS cho modal

const CartModal = ({ items, onClose }) => {
  const totalPrice = items.reduce((total, item) => total + item.price, 0);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Giỏ Hàng</h2>
          <button className="close-button" onClick={onClose}>
            Đóng
          </button>
        </div>
        <div className="modal-body">
          <ul>
            {items.length === 0 ? (
              <li>Giỏ hàng trống</li>
            ) : (
              items.map((item, index) => (
                <li key={index}>
                  {item.name} - {item.price} VNĐ
                </li>
              ))
            )}
          </ul>
          <h3 className="total-price">Tổng giá: {totalPrice} VNĐ</h3>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
