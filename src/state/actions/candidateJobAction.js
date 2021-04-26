import { createPromiseAction } from "@adobe/redux-saga-promise";
import * as types from "./index";

export const candidateJobSimilarAction = (id) => ({
  type: types.GET_JOB_SIMILAR,
  payload: id
});

export const candidateJobSimilarProAction = createPromiseAction(
  "GET_JOB_SIMILAR"
);
