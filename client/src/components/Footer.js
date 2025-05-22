

import React from "react";

function Footer() {
  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    margin: "0 12px",
    cursor: "pointer",
    fontWeight: "500",
  };

  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      style={{
        backgroundColor: "#000",
        color: "#fff",
        padding: "40px 20px",
        borderTop: "1px solid #fff",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", textAlign: "center" }}>
        <nav style={{ marginBottom: "20px" }}>
          <a href="#home" style={linkStyle} onClick={(e) => handleSmoothScroll(e, "home")}>
            Home
          </a>
          <a href="#features" style={linkStyle} onClick={(e) => handleSmoothScroll(e, "features")}>
            Features
          </a>
          <a href="#about" style={linkStyle} onClick={(e) => handleSmoothScroll(e, "about")}>
            About
          </a>
        </nav>

        <p style={{ marginBottom: "20px", fontSize: "14px", color: "#aaa" }}>
          <br />
          Copyright © 2025 AuraLens, Inc. All Rights Reserved.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "20px" }}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/145/145802.png"
              alt="Facebook"
              width="24"
              height="24"
            />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/145/145812.png"
              alt="Twitter"
              width="24"
              height="24"
            />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/145/145805.png"
              alt="Instagram"
              width="24"
              height="24"
            />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/145/145807.png"
              alt="LinkedIn"
              width="24"
              height="24"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 
