import React, { useEffect, useState } from "react";
import { Select as AntSelect } from "antd";
import "./Select.scss";

function Select({
  options,
  loading = false,
  showSearch = false,
  formClassName = "",
  label = "",
  placeholder = "",
  required = false,
  size = "large",
  disabled = false,
  mode,
  defaultValue = "",
  singleCondition = undefined,
  meta = {}, // redux form
  input: { value, onChange } // redux form
}) {
  const { touched, error } = meta;

  const showError = touched && error;
  const { errCode } = error || {};

  const [selectMode, setMode] = useState(mode);

  useEffect(() => {
    onChange(defaultValue);
  }, []);

  const handleOnChange = (value) => onChange(value);

  const { Option } = AntSelect;

  if (singleCondition !== undefined) {
    if (value === singleCondition && selectMode === "multiple") setMode("");
    if (selectMode === "" && value !== singleCondition) setMode("multiple");
  }
  const props = {
    showSearch,
    loading,
    value,
    placeholder,
    size,
    onChange: handleOnChange,
    disabled,
    mode: selectMode
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
      {showError && (
        <span
          className="error"
          style={{ position: "absolute", color: "#f25961", bottom: "0px" }}
        >
          {errCode}
        </span>
      )}
      <br className="mb-3" />
    </div>
  );
}

export default Select;
