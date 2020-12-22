import React, { useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import ContentEditable from "react-contenteditable";
import { Button } from "antd";

function SkillForm({ curStep, handleChangeStep }) {
  const skill = useSelector((state) => state.cv.skill, shallowEqual);

  const [html, setHtml] = useState(skill);

  const handleChange = (evt) => {
    setHtml(evt.target.value);
  };

  return (
    <>
      <div className="panel panel--light">
        <div className="panel-body">
          <div className="rv-content">
            <div className="container-fluid">
              <div className="title sg-heading3 page-title pull-left">
                Kỹ năng
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
        <Button type="primary" onClick={() => handleChangeStep(curStep + 1)}>
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

export default SkillForm;
