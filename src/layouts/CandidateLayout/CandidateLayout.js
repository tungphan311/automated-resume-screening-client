import Header from "components/Header/Header";
import React from "react";

function CandidateLayout({ children }) {
  return (
    <>
      <Header />
      <main id="content">{children}</main>
    </>
  );
}

export default CandidateLayout;
