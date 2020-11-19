import React from "react";
import "./Input.scss";

const Input = ({
  placeholder = "",
  className = "",
  formClassName = "",
  label = "",
  append = "",
  type = "text",
  required,
  meta = {}, // redux form
  input // redux form
}) => {
  const { touched, error } = meta;

  const showError = touched && error;
  const { errCode } = error || {};

  return (
    <div className={`form-group ${formClassName}`}>
      <label className={`${!label ? "d-none" : "input__label"}`}>
        {label}
        {required && <span class="text-danger"> *</span>}
      </label>
      <div className="input-group mb-3">
        <input
          {...input}
          placeholder={placeholder}
          className={`form-control outline ${
            append ? "input__field-group" : ""
          } ${className}`}
          type={type}
        />
        {append && (
          <div className="input-group-append">
            <span className="input-group-text">{append}</span>
          </div>
        )}
        {showError && (
          <span
            className="error"
            style={{ position: "absolute", color: "#f25961", top: "38px" }}
          >
            {errCode}
          </span>
        )}
      </div>
    </div>
  );
};

export default Input;
