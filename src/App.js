import Toastify from "components/Toastify/Toastify";
import React from "react";

function App({ children }) {
  return (
    <div className="App">
      <Toastify />
      {children}
    </div>
  );
}

export default App;
