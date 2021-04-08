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
  icon = "",
  isClearable
}) {
  return (
    <div className={`dropdown ${className}`} style={{ zIndex: 5 }}>
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
        isClearable={isClearable}
      />
      {icon && <div className="input-icon">{icon}</div>}
    </div>
  );
}

export default SelectWithSearch;
