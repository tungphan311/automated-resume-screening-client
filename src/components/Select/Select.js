import React, { useEffect } from "react";
import { Select as AntSelect } from "antd";
import "./Select.scss";

function Select({
  options,
  showSearch = false,
  formClassName = "",
  label = "",
  placeholder = "",
  required = false,
  size = "large",
  defaultValue = "",
  meta = {}, // redux form
  input: { value, onChange } // redux form
}) {
  const { error } = meta;
  const { errCode } = error || {};

  useEffect(() => {
    onChange(defaultValue);
  }, []);

  const handleOnChange = (value) => onChange(value);

  const { Option } = AntSelect;
  const props = {
    showSearch,
    value,
    placeholder,
    size,
    onChange: handleOnChange
  };

  return (
    <div className={`form-group ${formClassName}`}>
      <label className={`${!label ? "d-none" : "input__label"}`}>
        {label}
        {required && <span className="text-danger"> *</span>}
      </label>
      <AntSelect {...props}>
        {options.map(({ value, label }) => (
          <Option key={value} value={value}>
            {label}
          </Option>
        ))}
      </AntSelect>
      <span
        className="error"
        style={{ position: "absolute", color: "#f25961", bottom: "-20px" }}
      >
        {errCode}
      </span>
      <br className="mb-3" />
    </div>
  );
}

export default Select;
