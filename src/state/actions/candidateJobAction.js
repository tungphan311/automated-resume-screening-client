import { createPromiseAction } from "@adobe/redux-saga-promise";
import * as types from "./index";

export const candidateJobSimilarAction = (id) => ({
  type: types.GET_JOB_SIMILAR,
  payload: id
});

export const candidateJobSimilarProAction = createPromiseAction(
  "GET_JOB_SIMILAR"
);

export const candidateJobSuggestAction = (domain_id, province_id, page) => ({
  type: types.GET_JOB_SUGGEST,
  payload: { domain_id, province_id, page }
});

export const candidateJobSuggestProAction = createPromiseAction(
  "GET_JOB_SUGGEST"
);

export const exploreSkillsAction = (skills) => ({
  type: types.EXPLORE_SKILLS,
  payload: { skills }
});

export const exploreSkillsProAction = createPromiseAction(
  "EXPLORE_SKILLS"
);

export const resetSkillsAction = {
  type: types.RESET_SKILLS_ACTION
};
