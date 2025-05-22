
import React from "react";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import About from "./components/About";
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* Smooth Scroll */}
      <style>{`html { scroll-behavior: smooth; }`}</style>

      {/* Sticky Navbar */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          borderBottom: "1px solid #2d2d2d",
          backgroundColor: "black"
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "16px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo/Brand */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ color: "white", fontSize: "24px", fontWeight: "600" }}>
              AuraLens
            </span>
          </div>

          {/* Navigation Links and Auth Buttons */}
          <div style={{ display: "flex", alignItems: "center", gap: "80px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
              <a href="#home" style={{ color: "white", textDecoration: "none" }}>Home</a>
              <a href="#features" style={{ color: "white", textDecoration: "none" }}>Features</a>
              <a href="#about" style={{ color: "white", textDecoration: "none" }}>About</a>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <a href="#" style={{
                color: "white", backgroundColor: "#333", padding: "8px 16px",
                textDecoration: "none", fontWeight: "500", borderRadius: "8px", border: "1px solid white"
              }}>Sign In</a>
              <a href="#" style={{
                color: "white", backgroundColor: "#333", padding: "8px 16px",
                textDecoration: "none", fontWeight: "500", borderRadius: "8px", border: "1px solid white"
              }}>Sign Up</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Sections */}
      <div id="home"><HeroSection /></div>
      <div id="features"><Features /></div>
      <div id="about"><About /></div>
      <Footer />
    </div>
  );
}

export default App;
