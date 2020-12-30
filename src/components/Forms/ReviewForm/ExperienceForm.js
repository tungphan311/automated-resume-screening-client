import React, { useState } from "react";
import ContentEditable from "react-contenteditable";
import { Button } from "antd";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { UPDATE_CV_VALUES } from "state/reducers/cvReducer";
import { InputNumber } from "antd";

function ExperienceForm({
  curStep,
  handleChangeStep,
  hideBtn = false,
  changeCallback
}) {
  const experience = useSelector((state) => state.cv.experience, shallowEqual);
  const dispatch = useDispatch();
  const [month, setMonth] = useState(0);

  const [html, setHtml] = useState(experience);

  const handleChange = (evt) => {
    setHtml(evt.target.value);
    changeCallback(true);
  };

  const handleSubmit = () => {
    dispatch({ type: UPDATE_CV_VALUES, key: "experience", value: html });
    dispatch({
      type: UPDATE_CV_VALUES,
      key: "months_of_experience",
      value: month
    });
    handleChangeStep(curStep + 1);
  };

  return (
    <>
      <div className="panel panel--light">
        <div className="panel-body">
          <div className="rv-content">
            <div
              className="container-fluid custom"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <div className="heading-margin sg-heading3 title">
                Kinh nghiệm thực tế
              </div>

              <div>
                <InputNumber
                  min={0}
                  max={500}
                  value={month}
                  onChange={(value) => {
                    setMonth(value);
                    changeCallback(true);
                  }}
                />
                <span>
                  {" "}
                  tháng <span className="text-danger">*</span>
                </span>
              </div>
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
          className={hideBtn && "hide-btn"}
          type="primary"
          onClick={handleSubmit}
        >
          Tới trang sau
        </Button>
        {curStep > 1 && (
          <Button
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

export default ExperienceForm;
