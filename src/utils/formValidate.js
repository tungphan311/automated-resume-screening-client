import { required } from "utils/validate";

export function buildErr(errCode, params = {}) {
  return {
    errCode,
    ...params
  };
}

export const requireField = (value) =>
  required(value)
    ? undefined
    : buildErr("Đây là trường bắt buộc, vui lòng không bỏ trống");
