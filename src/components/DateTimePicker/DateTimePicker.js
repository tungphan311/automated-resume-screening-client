import { DatePicker, Space } from "antd";
import moment from "moment";
import React, { useState, useEffect } from "react";
import "./DateTimePicker.scss";
import locale from "antd/lib/locale/vi_VN";
import "moment/locale/vi";

function DateTimePicker({
  formClassName = "",
  label = "",
  subLabel = "",
  format = "HH:mm DD/MM/YYYY",
  showTime = false,
  required = false,
  meta = {}, // redux form
  input = {} // redux form
}) {
  const { touched, error } = meta;

  const showError = touched && error;
  const { errCode } = error || {};

  const [date, setDate] = useState(null);

  const onChange = (value) => {
    setDate(value);
  };

  function onOk(value) {
    input.onChange(moment(value).toISOString());
  }

  useEffect(() => {
    if (input.value) {
      setDate(moment(input.value));
    }
  }, [input.value]);

  return (
    <div className={`form-group ${formClassName}`}>
      <label className={`${!label ? "d-none" : "input__label"}`}>
        {label}
        {required && <span className="text-danger"> *</span>}
      </label>
      <div className={subLabel ? "help-block text-italic" : "d-none"}>
        {subLabel}
      </div>
      <div>
        <Space>
          <DatePicker
            value={date}
            size="small"
            format={format}
            showTime={showTime}
            onOk={onOk}
            onChange={onChange}
            locale={locale}
          />
        </Space>
      </div>
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

export default DateTimePicker;
