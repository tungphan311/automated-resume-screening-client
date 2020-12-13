import React, { useState } from "react";
import "./Input.scss";

const CURRENCY = "currency";

const CustomInput = ({
  placeholder = "",
  className = "",
  formClassName = "",
  label = "",
  subLabel = "",
  append = "",
  type = "text",
  formatType = CURRENCY,
  required = false,
  meta = {}, // redux form
  input // redux form
}) => {
  const { touched, error } = meta;
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");

  const showError = touched && error;
  const { errCode } = error || {};

  const onChange = (event) => {
    const stringValue = String(event.target.value).replace(/\./g, "");
    const inputValue = parseInt(stringValue);
    const fValue = formatValue(inputValue);

    setValue(inputValue);
    setFormattedValue(fValue);
  };

  const formatValue = (value) => {
    switch (formatType) {
      case CURRENCY:
        return value ? new Intl.NumberFormat("vi-VN").format(value) : "";

      default:
        return value;
    }
  };

  return (
    <div className={`form-group ${formClassName}`}>
      <label className={`${!label ? "d-none" : "input__label"}`}>
        {label}
        {required && <span className="text-danger"> *</span>}
      </label>
      <div className={subLabel ? "help-block text-italic" : "d-none"}>
        {subLabel}
      </div>
      <div className="input-group mb-3">
        <input onChange={input.onChange(value)} className="d-none" />
        <input
          value={formattedValue}
          onChange={onChange}
          placeholder={placeholder}
          className={`form-control outline ${
            append ? "input__field-group" : ""
          } ${className}`}
          type={type}
          style={{ borderTopLeftRadius: "3px", borderBottomLeftRadius: "3px" }}
        />
        {append && (
          <div className="input-group-append">
            <span className="input-group-text">{append}</span>
          </div>
        )}
        {showError && (
          <span
            className="error"
            style={{ position: "absolute", color: "#f25961", top: "40px" }}
          >
            {errCode}
          </span>
        )}
      </div>
    </div>
  );
};

export default CustomInput;
