import React, { useState } from "react";
import { CaretDownOutlined } from "@ant-design/icons";
import "./Dropdown.scss";
import OutsideClickWrapper from "components/OutsideClickWrapper/OutsideClickWrapper";

function Dropdown({ title, options }) {
  const [isShowing, setShowing] = useState(false);
  const [value, setValue] = useState(null);

  const openDropdown = () => setShowing(true);
  const closeDropdown = () => setShowing(false);

  const handleSelect = (value) => {
    setValue(value);
    closeDropdown();
  };
  return (
    <div className="dd-wrapper">
      {value === null ? (
        <>
          <button className="dd-button" onClick={openDropdown}>
            <span>
              {title}
              <span>
                <CaretDownOutlined
                  style={{ fontSize: "10px", marginLeft: "0.2rem", right: 0 }}
                />
              </span>
            </span>
          </button>
          <OutsideClickWrapper
            isShowing={isShowing}
            onClickOutside={closeDropdown}
          >
            <ul
              className={`dropdown-content dd-menu ${
                isShowing ? "" : "dd-hidden"
              }`}
            >
              {options.map(({ value, label }) => (
                <Option
                  value={value}
                  label={label}
                  handleSelect={handleSelect}
                />
              ))}
            </ul>
          </OutsideClickWrapper>
        </>
      ) : (
        <button className="dd-button dd-target blue">
          <span>
            {options.find((ele) => ele.value === value).label}
            <div className="filters-close" onClick={() => setValue(null)}>
              <img src="/assets/svg/Close.svg" alt="clear filter" />
            </div>
          </span>
        </button>
      )}
    </div>
  );
}

export default Dropdown;

const Option = ({ value, label, handleSelect }) => (
  <li className="dd-menu-option" onClick={() => handleSelect(value)}>
    <div>
      <span className="rbLabel">{label}</span>
    </div>
  </li>
);
