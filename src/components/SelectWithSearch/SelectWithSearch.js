import React from "react";
import Select from "react-select";

function SelectWithSearch({
  selectedOption,
  options,
  onChange,
  className,
  name,
  defaultValue,
  placeholder,
  isMulti,
  label,
  icon = ""
}) {
  return (
    <div className={`dropdown ${className}`} style={{ zIndex: 999 }}>
      {label && <label>{label}</label>}
      <Select
        name={name}
        options={options}
        classNamePrefix={`${icon ? "icon-select" : "select"}`}
        defaultValue={defaultValue}
        value={selectedOption}
        isMulti={isMulti}
        onChange={onChange}
        placeholder={placeholder}
        menuPosition="fixed"
      />
      {icon && <div className="input-icon">{icon}</div>}
    </div>
  );
}

export default SelectWithSearch;
