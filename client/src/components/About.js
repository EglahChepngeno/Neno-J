

import React from "react";

function About() {
  return (
    <section style={{ backgroundColor: "black", padding: "96px 32px" }}>
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          gap: "64px",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {/* Text Section */}
        <div style={{ flex: "1 1 50%" }}>
          <h2 style={{ color: "white", fontSize: "48px", fontWeight: "800", marginBottom: "32px" }}>
            Who We Are
          </h2>
          <p style={{ color: "white", fontSize: "22px", fontWeight: "600", marginBottom: "24px", lineHeight: "1.6" }}>
            We are a team that thrives on turning complex challenges into creative solutions.  
          </p>
          <p style={{ color: "white", fontSize: "22px", fontWeight: "600", lineHeight: "1.6" }}>
            Quick, capable, and committed to delivering results that matter—big enough to deliver, small enough to move fast.
          </p>
        </div>

        {/* Image Section */}
        <div style={{ flex: "1 1 40%", display: "flex", flexDirection: "column", gap: "24px" }}>
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
            alt="Office 1"
            style={{
              width: "100%",
              height: "300px", // Increased from 100px
              objectFit: "cover",
              borderRadius: "12px",
              boxShadow: "0 8px 24px rgba(255,255,255,0.1)",
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default About;
