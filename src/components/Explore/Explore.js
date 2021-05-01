import { Link } from "react-router-dom";
import IconInput from "components/Input/IconInput";
import React, { useEffect, useState } from "react";
import { Field, reduxForm } from "redux-form";
import { FORM_KEY_JOB_SEARCH } from "state/reducers/formReducer";
import { SearchOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import SelectWithSearch from "components/SelectWithSearch/SelectWithSearch";
import qs from "query-string";
import Select from "components/Select/Select";
import { connect, useDispatch, useSelector } from "react-redux";
import { GET_JOB_DOMAIN } from "state/reducers/jobDomainReducer";

import "./Explore.scss";

function Explore({ handleSubmit }) {
  const [state, setState] = useState({
    loading: false,
    fetch: false,
    jobDomains: []
  });

  const { loading, fetch, jobDomains } = state;

  const dispatch = useDispatch();
  const provinces = useSelector((state) => state.cv.provinces);
  const domains = useSelector((state) => state.jobDomain.domains);

  const options = provinces.map(({ province_id, province_name }) => ({
    value: province_id,
    label: province_name
  }));

  useEffect(() => {
    if (!domains.length) {
      dispatch({ type: GET_JOB_DOMAIN });
      setState((curState) => ({ ...curState, loading: true }));
    } else {
      setState((curState) => ({
        ...curState,
        jobDomains: domains.map(({ id, name }) => ({ value: id, label: name }))
      }));
    }
  }, []);

  if (!fetch) {
    if (domains.length && loading) {
      setState((curState) => ({
        ...curState,
        loading: false,
        fetch: true,
        jobDomains: domains.map(({ id, name }) => ({ value: id, label: name }))
      }));
    }
  }

  return (
    <div className="explore-look">
      <h2 className="explore-look__title">
        What skill do you want to focus on?
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-8 explore-look__input">
            <Field
              component={CustomSelect}
              name="skill"
              className="pr-10 "
              placeholder="Enter a skill..."
              options={jobDomains}
              icon={<SearchOutlined style={{ color: "#555"}} />}
              isClearable={true}
            />
          </div>
          <div className="col-6 col-md-4">
            <button
              type="submit"
              className="btn btn-full-width explore-look__btn"
              style={{ fontWeight: 700 }}
            >
              Explore
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

Explore = reduxForm({
  form: "simple",
  touchOnBlur: false
})(Explore);

export default Explore;

const CustomSelect = ({ input, ...props }) => (
  <SelectWithSearch
    selectedOption={input.value}
    onChange={input.onChange}
    {...props}
  />
);
