import Header from "components/Header/Header";
import React from "react";

function RecruiterLayout({ children }) {
  return (
    <>
      <Header />
      <main id="content">{children}</main>
    </>
  );
}

export default RecruiterLayout;
