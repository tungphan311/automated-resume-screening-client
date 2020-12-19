import Input from "components/Input/Input";
import React from "react";

function IconInput({ icon, className = "", ...props }) {
  const newProps = { ...props, className: `${className} input-with-icon` };
  return (
    <Input {...newProps}>
      <span className="input-icon">{icon}</span>
    </Input>
  );
}

export default IconInput;
