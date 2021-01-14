import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import React from "react";

function RecruiterLayout({ children }) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />
      <main id="content" style={{ flexGrow: 1 }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default RecruiterLayout;
