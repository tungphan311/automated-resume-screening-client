import Toaster from "components/Toastify/Toaster";
import React from "react";
import { toast as toaster } from "react-toastify";

export function toast({ type = "success", message = "" }) {
  return toaster(<Toaster type={type} message={message} />);
}

export function toastErr(error) {
  let {
    response: { data }
  } = error;

  let errMsg = data.msg || null;

  if (!errMsg) {
    errMsg = "Có lỗi xảy ra";
  }

  toast({ type: "error", message: errMsg });
}
