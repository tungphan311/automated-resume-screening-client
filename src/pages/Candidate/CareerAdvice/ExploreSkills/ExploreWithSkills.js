import JobSearch from "components/Forms/JobSearch/JobSearch";
import JobSearchAdvance from "components/Forms/JobSearchAdvance/JobSearchAdvance";
import { formValues, getFormValues } from "redux-form";
import { FORM_KEY_JOB_SEARCH } from "state/reducers/formReducer";
import { Tabs, Tab } from "react-bootstrap";
import ContentEditable from "react-contenteditable";
import { CloseOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./ExploreWithSkills.scss";
import SignInDirect from "../SignInDirect/SignInDirect";
import { getIndexArray } from "utils/index";
import MatchSkill from "components/MatchSkill/MatchSkill";
import Explore from "components/Explore/Explore";
import qs from "query-string";

const ExploreWithSkills = ({ profile, history }) => {
  const dispatch = useDispatch();
  // const profile = useSelector((state) => state.profile.candidateProfile);
  const token = useSelector((state) => state.auth.candidate.token);

  // const RESUME = profile && profile.resumes && profile.resumes[0];
  const [resume, setResume] = useState({});
  const [value, setValue] = useState("");
  const [isChange, setIsChange] = useState(false);
  // const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(false);

  // const {
  //   educations,
  //   experiences,
  //   technical_skills,
  //   months_of_experience
  // } = resume;
  const a = [
    "security mechanisms",
    "engineering",
    "source code",
    "python",
    "codeigniter",
    "c++",
    "rails",
    "source codes",
    "framework",
    "education",
    "compiler",
    "software developer",
    "software developers",
    "build",
    "engineers",
    "blog",
    "restful",
    "sales",
    "ruby",
    "e-learning",
    "security mechanism",
    "laravel",
    "mysql",
    "c",
    "java",
    "knowledge",
    "json",
    "android",
    "stack",
    "software",
    "docker",
    "jquery",
    "algorithms",
    "project",
    "django",
    "code",
    "magento",
    "javascript",
    "google cloud",
    "library",
    "aws",
    "css",
    "https",
    "compilers",
    "git",
    "computer science",
    "data mining",
    "tool",
    "kubernetes",
    "symfony",
    "position",
    "tools",
    "university",
    "mysql workbench",
    "php",
    "golang"
  ];
  const [skills, setSkills] = useState(getIndexArray(a));
  const onChangeSkills = (key, value) => {
    const skill = skills.find((ele) => ele.key === key);
    let newSkills = skills.filter((ele) => ele.key !== key);
    const newSkill = { ...skill, value };
    newSkills.push(newSkill);
    newSkills.sort((a, b) => a.key - b.key);

    setSkills(newSkills);
    setIsChange(true);
  };

  const onDelete = (key) => {
    const newSkills = skills.filter((ele) => ele.key !== key);
    setSkills(newSkills);
    setIsChange(true);
  };

  const onAddSkill = () => {
    const key = skills.length && skills[skills.length - 1].key + 1;
    const newSkills = [...skills, { key, value }];
    setSkills(newSkills);
    setValue("");
    setIsChange(true);
  };

  const submitSkillFocus = () => {
    console.log("form values", formValues);
    const filter = { skill: "alal" };

    const query = qs.stringify(filter, { skipNull: true });
    console.log('qurery', query)
    history.push(`/career-advice/direction?${query}`);
  };

  return (
    <div className="explore">
      <div className="explore__title">
        <div className="container">
          <h1 className="explore__title__big">
            How can you put your skills to work?
          </h1>
          <p className="explore__title__small">
            Explore roles that could suit you based on your skills and
            experience
          </p>
        </div>
      </div>

      <div className="container">
        <div className="explore__content">
          <h2 className="explore__content__title">Your career so far</h2>
          <div className="explore__content__key">
            <p>Key skills</p>
          </div>
          {Object.keys(profile).length === 0 ? (
            <SignInDirect />
          ) : (
            <div className="explore__content__skills">
              <p className="explore__content__skills__intro">
                Using skills listed in your Profile, we’ll help you discover
                career options.
              </p>

              <div className="chip" style={{ marginTop: "20px" }}>
                {skills.map(({ key, value }) => (
                  <Skill
                    skill={value}
                    key={key}
                    id={key}
                    onChange={onChangeSkills}
                    onDelete={onDelete}
                  />
                ))}
              </div>

              <div className="inline-skill-container is-compact explore__content__skills__add">
                <div className="inline-skill-input">
                  <div className="TextInput-wrapper">
                    <Input
                      className="explore__content__skills__add__input"
                      placeholder="Add skill"
                      size="large"
                      value={value}
                      onChange={(evt) => setValue(evt.target.value)}
                    />
                  </div>
                </div>
                <div className="inline-skill-button">
                  <Button
                    className="explore__content__skills__add__btn"
                    type="primary"
                    size="large"
                    disabled={!value}
                    icon={<PlusOutlined />}
                    onClick={onAddSkill}
                  >
                    Add skill
                  </Button>
                </div>
              </div>

              <div className="explore__content__skills__match">
                <button
                  type="submit"
                  className="btn explore-look__btn"
                  style={{ fontWeight: 700 }}
                >
                  Match now
                </button>
              </div>

              <div className="explore__content__match">
                <h2 className="explore__content__title">
                  Your matched opportunities
                </h2>

                <div className="explore__content__match__tabs">
                  <Tabs className="child-tabs" defaultActiveKey="1">
                    <Tab eventKey="1" title="Most skill matches">
                      <MatchSkill />
                      <MatchSkill />
                    </Tab>
                    <Tab eventKey="2" title="What you're good at">
                      <MatchSkill />
                    </Tab>
                    <Tab eventKey="3" title="What you enjoy">
                      <MatchSkill />
                    </Tab>
                  </Tabs>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="container">
        <h2 className="explore__title-look">
          Looking for a specific role or skill?
        </h2>
        <div className="explore__title-sub">
          Find out more about a role or skill you’re interested in.
        </div>
        <Explore handleSubmit={submitSkillFocus} history={history} />
        <div style={{height:'80px'}}></div>
        <Explore handleSubmit={submitSkillFocus} history={history} />

      </div>
    </div>
  );
};

export default ExploreWithSkills;

const Skill = ({ id, skill, onChange, onDelete }) => {
  const handleChange = (evt) => {
    const value = evt.target.value;

    onChange(id, value);
  };

  return (
    <div className="chip__item">
      <div className="container-fluid">
        <div className="row">
          <div className="skill-editable">
            <ContentEditable
              className="content-editable chip__item__content"
              html={skill} // innerHTML of the editable div
              disabled={true} // use true to disable edition
              onChange={handleChange} // handle innerHTML change
            />
          </div>
          <div className="float-right chip__item__delete">
            <button className=" delete-button">
              <CloseOutlined onClick={() => onDelete(id)} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
