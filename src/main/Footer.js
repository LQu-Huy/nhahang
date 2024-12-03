// src/Footer.js
import React from "react";
import "./Footer.css"; // Import file CSS cho footer
import logo from "../image/logo.jpg"; // Adjust the path as necessary

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="copyright">
          <p>&copy; 2024 Công Ty ABC. Bảo lưu mọi quyền.</p>
        </div>
      </div>
      <div className="footer-right">
        <div className="footer-links">
          <ul>
            <li>Thực Đơn</li>
            <li>Giao Hàng</li>
            <li>Chi Nhánh</li>
            <li>Địa Chỉ</li>
            <li>Chính Sách</li>
            <li>Giấy Phép</li>
          </ul>
        </div>
        <div className="contact-info">
          <p>Điện thoại: (123) 456-7890</p>
          <p>Email: contact@abc.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
