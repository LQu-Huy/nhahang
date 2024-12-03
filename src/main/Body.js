// src/Body.js
import React, { useState } from "react";
import "./Body.css"; // Import the CSS for styling
import p1 from "../image/bunca.jpg";
import p2 from "../image/download (1).jpg";
import p3 from "../image/nem.jpg";
import p4 from "../image/download (1).jpg";
import p5 from "../image/noodle.jpg";
import p6 from "../image/download (2).jpg";
import p7 from "../image/OIP.jpg";

const images = [
  {
    src: p1,
    title: "Bún cá",
    info: "Bún cá chuẩn vị Hà nội",
    price: "20.000 VNĐ",
  },
  {
    src: p2,
    title: "Thịt Nướng",
    info: "Thịt nướng sả đặc biệt thơm ngon.",
    price: "150.000 VNĐ",
  },
  {
    src: p3,
    title: "Nem",
    info: "Nem cuộn, Bún thịt nướng",
    price: "80.000 VNĐ",
  },
  {
    src: p4,
    title: "Thịt Nướng",
    info: "Thịt nướng sả đặc biệt thơm ngon.",
    price: "150.000 VNĐ",
  },
  {
    src: p5,
    title: "Mì Quảng",
    info: "Mì Quảng đặc biệt chuẩn vị miền Trung.",
    price: "30.000 VNĐ",
  },
];

const Body = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="body">
      <div className="image-container">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].title}
          className="main-image"
        />
        <div className="overlay">
          <h2>{images[currentIndex].title}</h2>
          <p>{images[currentIndex].info}</p>
          <p className="price">{images[currentIndex].price}</p>
        </div>
        <button className="prev-button" onClick={prevImage}>
          ❮
        </button>
        <button className="next-button" onClick={nextImage}>
          ❯
        </button>
      </div>
      <div className="restaurant-images">
        <div className="restaurant-image">
          <img src={p6} alt="Nhà hàng 1" className="restaurant-image-img" />
          <p>
            Chào mừng bạn đến với Nhà hàng Ẩm Thực Việt, chúng tôi mang đến cho
            bạn một hành trình khám phá ẩm thực truyền thống đầy hấp dẫn. Từ phở
            bò nóng hổi, bún chả thơm lừng đến các món đặc sản miền Tây như lẩu
            mắm, tất cả đều được chế biến từ nguyên liệu tươi ngon, an toàn.
          </p>
        </div>
        <div className="restaurant-image">
          <img src={p7} alt="Nhà hàng 2" className="restaurant-image-img" />
          <p>
            Không gian ấm cúng và phong cách phục vụ chu đáo sẽ khiến bạn cảm
            thấy như đang thưởng thức bữa ăn tại chính ngôi nhà của mình. Hãy
            đến để tận hưởng những món ăn ngon miệng và đắm chìm trong hương vị
            Việt đậm đà!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Body;
