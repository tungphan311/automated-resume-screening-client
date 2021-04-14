import Toaster from "components/Toastify/Toaster";
import React from "react";
import { toast as toaster } from "react-toastify";

export function toast({ type = "success", message = "" }) {
  return toaster(<Toaster type={type} message={message} />);
}

export function toastErr(error) {
  const { response } = error;

  let errMsg = response ? response.data.message : null;

  if (!errMsg) {
    errMsg = "Thao tác không thành công";
  }

  toast({ type: "error", message: errMsg });
}

export const format_date = (dateString) =>
  new Date(dateString).toLocaleDateString();

export const formatDateTime = (dateString) =>
  new Date(dateString).toLocaleString();

export function range(start, end) {
  return Array(end - start + 1)
    .fill()
    .map((_, idx) => ({
      value: start + idx,
      label: start + idx
    }));
}

export const formatMonths = (month) => {
  const year = parseInt(month / 12);
  const m = month % 12;

  return year ? `${year} năm ${m} tháng` : `${month} tháng`;
};

export const formatProvince = (provinces, provinceId) => {
  const province = provinces.find((p) => p.province_id === provinceId);

  return province.province_name;
};

export const formatSearchHistory = (title, provinces, provinceId) => {
  let province = {};
  if (provinceId) {
    province = provinces.find((p) => p.province_id === provinceId);
  }

  let result = "";

  if (title) {
    result += title;

    if (provinceId) {
      result += " - " + province.province_name;
    }
  } else {
    if (provinceId) {
      result += province.province_name;
    }
  }

  return result;
};

export const numberToArray = (value) =>
  Array(value)
    .fill("")
    .map((_, index) => index);
