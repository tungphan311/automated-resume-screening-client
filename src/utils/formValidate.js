import { MAX_SALARY, MIN_SALARY } from "constants/job";
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

export const requiredMinSalary = (value, allValues) =>
  !MIN_SALARY.includes(allValues.salary)
    ? undefined
    : required(value)
    ? undefined
    : buildErr("Đây là trường bắt buộc, vui lòng không bỏ trống");

export const requiredMaxSalary = (value, allValues) =>
  !MAX_SALARY.includes(allValues.salary)
    ? undefined
    : required(value)
    ? undefined
    : buildErr("Đây là trường bắt buộc, vui lòng không bỏ trống");
