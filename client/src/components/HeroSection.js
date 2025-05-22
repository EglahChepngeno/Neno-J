
import React from "react";

function HeroSection() {
  return (
    <section
      style={{
        backgroundColor: "#0f0f0f",
        color: "white",
        padding: "60px 20px",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "42px", fontWeight: "bold", marginBottom: "20px" }}>
        Welcome to AuraLens
      </h1>
      <p style={{ fontSize: "18px", maxWidth: "600px", margin: "0 auto 40px" }}>
        Explore cutting-edge AR technology to transform your world. Dive into immersive
        experiences designed to empower, educate, and excite.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "24px",
          flexWrap: "wrap",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1593642634443-44adaa06623a"
          alt="Tech Demo"
          style={{
            width: "220px",
            height: "140px",
            borderRadius: "12px",
            objectFit: "cover",
            boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
          }}
        />
      </div>
    </section>
  );
}

export default HeroSection;
