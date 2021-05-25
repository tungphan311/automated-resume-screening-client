import React, { useEffect, useState } from "react";
import { Button, Input } from "antd";
import { PlusOutlined, DeleteFilled, CloseOutlined } from "@ant-design/icons";
import ContentEditable from "react-contenteditable";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { updateCVAction } from "state/actions/index";
import { GET_JOB_DOMAIN } from "state/reducers/jobDomainReducer";
import Loading from "components/Loading/Loading";

function SkillForm({ curStep, handleChangeStep }) {
  const [loading, setLoading] = useState(false);

  const skill = useSelector((state) => state.cv.skill, shallowEqual) || [];

  const dispatch = useDispatch();
  const getIndexArray = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      newArr.push({ key: i, value: arr[i] });
    }

    return newArr;
  };

  useEffect(() => {
    dispatch({ type: GET_JOB_DOMAIN });
  }, []);

  const [skills, setSkills] = useState(getIndexArray(skill));
  const [value, setValue] = useState("");

  const onDelete = (key) => {
    const newSkills =
      skills && skills.length && skills.filter((ele) => ele.key !== key);
    setSkills(newSkills);
  };

  const onAddSkill = () => {
    const key = skills && skills.length && skills[skills.length - 1].key + 1;
    const newSkills = [...skills, { key, value }];
    setSkills(newSkills);
    setValue("");
  };

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    setLoading(true);
    const values = skills.length && skills.map((ele) => ele.value);

    dispatch(updateCVAction({ values })).catch(() => {
      setLoading(false);
    });
    // dispatch({ type: UPDATE_CV_VALUES, key: "skill", value: values });
    // handleChangeStep(curStep + 1);
  };

  return (
    <>
      <Loading loading={loading} />
      <div className="panel panel--light">
        <div className="panel-body">
          <div className="rv-content">
            <div className="container-fluid">
              <div className="heading-margin sg-heading3 title">Kỹ năng</div>
            </div>
            <div
              className="wizard-page-children container-fluid"
              spellCheck="false"
            >
              <div className="inline-skill-container is-compact">
                <div className="inline-skill-input">
                  <div>
                    <div className="TextInput-labelWrapper">
                      <label className="TextInput-label">Thêm kỹ năng</label>
                      <p className="TextInput-helpText">vd: Javascript</p>
                    </div>
                    <div className="TextInput-wrapper">
                      <Input
                        size="large"
                        value={value}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="inline-skill-button">
                  <Button
                    type="primary"
                    size="large"
                    disabled={!value}
                    icon={<PlusOutlined />}
                    onClick={onAddSkill}
                  >
                    Thêm
                  </Button>
                </div>
              </div>
              <div
                className="skill-form__container"
                style={{ marginTop: "20px" }}
              >
                {skills.map(({ key, value }) => (
                  <Skill skill={value} key={key} id={key} onDelete={onDelete} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Button className="form-complete" onClick={handleSubmit}>
          Hoàn tất
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

export default SkillForm;

const Skill = ({ id, skill, onDelete }) => {
  return (
    <div className="chip-skill__item">
      <div className="container-fluid">
        <div className="row">
          <div className="skill-editable">
            <ContentEditable
              className="content-editable chip-skill__item__content"
              html={skill} // innerHTML of the editable div
              disabled={true} // use true to disable edition
            />
          </div>
          <div className="float-right chip-skill__item__delete">
            <button className=" delete-button">
              <CloseOutlined
                className="chip-skill__item__delete__icon"
                onClick={() => onDelete(id)}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
