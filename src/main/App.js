// src/App.js
import React from "react";
import Header from "./Header"; // Import Header component
import Body from "./Body"; // Import Body component
import Footer from "./Footer"; // Import Footer component

const App = () => {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer /> {/* Thêm Footer component vào đây */}
    </div>
  );
};

export default App;
