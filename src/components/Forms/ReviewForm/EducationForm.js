import React, { useState } from "react";
import ContentEditable from "react-contenteditable";
import { Button } from "antd";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { UPDATE_CV_VALUES } from "state/reducers/cvReducer";
import "./ReviewForm.scss";

function EducationForm({ curStep, handleChangeStep, hideBtn = false }) {
  const education = useSelector((state) => state.cv.education, shallowEqual);
  const dispatch = useDispatch();

  const [html, setHtml] = useState(education);

  const handleChange = (evt) => {
    setHtml(evt.target.value);
  };

  const handleSubmit = () => {
    dispatch({ type: UPDATE_CV_VALUES, key: "education", value: html });
    handleChangeStep(curStep + 1);
  };

  return (
    <>
      <div className="panel panel--light">
        <div className="panel-body">
          <div className="rv-content">
            <div className="container-fluid">
              <div className="heading-margin sg-heading3 title">Học vấn</div>
            </div>
            <div className="wizard-page-children container-fluid">
              <ContentEditable
                html={html} // innerHTML of the editable div
                disabled={false} // use true to disable edition
                onChange={handleChange} // handle innerHTML change
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Button
          className={"form-complete " + (hideBtn && "hide-btn")}
          onClick={handleSubmit}
        >
          Tới trang sau
        </Button>
        {curStep > 1 && (
          <Button
            className="form-cancel"
            style={{ margin: "0 8px" }}
            onClick={() => handleChangeStep(curStep - 1)}
          >
            Quay lại
          </Button>
        )}
      </div>
    </>
  );
}

export default EducationForm;
