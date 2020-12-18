import Toastify from "components/Toastify/Toastify";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { INIT_DATA } from "state/actions/index";

function App({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: INIT_DATA });
  }, []);

  return (
    <div className="App">
      <Toastify />
      {children}
    </div>
  );
}

export default App;
