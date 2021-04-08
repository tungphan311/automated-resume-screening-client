import JobSearch from "components/Forms/JobSearch/JobSearch";
import JobSearchAdvance from "components/Forms/JobSearchAdvance/JobSearchAdvance";
import { getFormValues } from "redux-form";
import { FORM_KEY_JOB_SEARCH } from "state/reducers/formReducer";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./CareerAdvice.scss";
import { useLocation } from "react-router-dom";
import qs from "query-string";

function CandidateCareerAdvice({ history }) {
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 10,
    total: 0
  });
  const [filter, setFilter] = useState({
    posted_date: undefined,
    contract_type: undefined,
    min_salary: undefined,
    max_salary: undefined,
    "job-domain": undefined
  });

  const handleSubmit = async () => {
    const job_title = formValues
      ? formValues.job_title || undefined
      : undefined;
    const province_id = formValues
      ? formValues.location
        ? formValues.location.value
        : undefined
      : undefined;

    let filter = qs.parse(params);
    filter = { ...filter, location: province_id, q: job_title };
    const query = qs.stringify(filter, { skipNull: true });

    history.push({ search: `?${query}` });

    setFilter({ ...filter, job_title, province_id: province_id });
    setPagination({ ...pagination, page: 1 });
  };

  const onFilterChange = (key, value) => {
    let filter = qs.parse(params);

    filter = { ...filter, [key]: value };

    const query = qs.stringify(filter, { skipNull: true });
    history.push({ search: `?${query}` });
  };

  const params = useLocation().search;

  const formValues = useSelector((state) =>
    getFormValues(FORM_KEY_JOB_SEARCH)(state)
  );

  const { domains } = useSelector((state) => state.jobDomain);
  const { provinces } = useSelector((state) => state.cv);

  return (
    <>
      <div className="container">
        <JobSearchAdvance onSubmit={handleSubmit} history={history} />
      </div>
      <h1>Trang career o day</h1>
    </>
  );
}

export default CandidateCareerAdvice;
