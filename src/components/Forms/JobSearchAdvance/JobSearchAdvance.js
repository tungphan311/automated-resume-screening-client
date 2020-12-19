import IconInput from "components/Input/IconInput";
import React from "react";
import { Field, reduxForm } from "redux-form";
import { FORM_KEY_JOB_SEARCH } from "state/reducers/formReducer";
import "./JobSearchAdvance.scss";
import { SearchOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

function JobSearchAdvance({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-sm-8">
          <Field
            component={IconInput}
            name="job_title"
            icon={<SearchOutlined style={{ color: "#555" }} />}
            formClassName="col-sm-8 pr-10"
          />
          <Field
            component={IconInput}
            name="location"
            formClassName="col-sm-4"
            icon={<FontAwesomeIcon icon={faMapMarkerAlt} color="#555" />}
          />
        </div>
        <div className="col-sm-4">
          <div className="col-sm-5">
            <button type="submit" className="btn btn-primary btn-full-width">
              Tìm kiếm
            </button>
          </div>
          <div className="col-sm-7">
            <div>
              <a href="#">Tìm kiếm nâng cao</a>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

JobSearchAdvance = reduxForm({
  form: FORM_KEY_JOB_SEARCH,
  touchOnBlur: false
})(JobSearchAdvance);

export default JobSearchAdvance;
