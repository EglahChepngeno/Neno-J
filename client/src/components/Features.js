
import React from "react";

const features = [
  {
    title: "Marketing",
    description:
      "Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan.",
    icon: (
      <svg
        className="w-5 h-5 text-primary-600"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
//   {
//     title: "Legal",
//     description:
//       "Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you.",
//     icon: (
//       <svg
//         className="w-5 h-5 text-primary-600"
//         fill="currentColor"
//         viewBox="0 0 20 20"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
//       </svg>
//     ),
//   },
  {
    title: "Business Automation",
    description:
      "Auto-assign tasks, send Slack messages, and much more. Now power up with hundreds of new templates to help you get started.",
    icon: (
      <svg
        className="w-5 h-5 text-primary-600"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
          clipRule="evenodd"
        />
        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
      </svg>
    ),
  },
  {
    title: "Finance",
    description:
      "Audit-proof software built for critical financial operations like month-end close and quarterly budgeting.",
    icon: (
      <svg
        className="w-5 h-5 text-primary-600"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582-.155.103-.346.196-.567.267z" />
        <path d="M10 2a8 8 0 100 16 8 8 0 000-16z" />
      </svg>
    ),
  },
];

function Features() {
  return (
    <section style={{ padding: "40px 20px", backgroundColor: "#f5f5f5" }}>
      <div
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "24px",
        }}
      >
        {features.map((feature) => (
          <div
            key={feature.title}
            style={{
              backgroundColor: "white",
              padding: "24px",
              borderRadius: "12px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              textAlign: "center",
            }}
          >
            <div
              style={{
                marginBottom: "12px",
                color: "#2563eb",
                display: "inline-block",
              }}
            >
              {feature.icon}
            </div>
            <h3 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "12px" }}>
              {feature.title}
            </h3>
            <p style={{ fontSize: "16px", color: "#4b5563" }}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
