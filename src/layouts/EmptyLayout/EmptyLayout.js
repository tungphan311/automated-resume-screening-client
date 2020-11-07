import React from "react";

function EmptyLayout({ children }) {
  return (
    <>
      <main id="content">{children}</main>
    </>
  );
}

export default EmptyLayout;
