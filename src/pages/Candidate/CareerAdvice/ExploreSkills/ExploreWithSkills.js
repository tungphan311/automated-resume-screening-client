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

import { SearchOutlined } from "@ant-design/icons";
import Select from "react-select";
import { GET_JOB_DOMAIN, GET_JOB_SKILL } from "state/reducers/jobDomainReducer";
import { ROLES } from "constants/roles";
import history from "state/history";
import { candidateProfileAction } from "state/actions/profileAction";

const ExploreWithSkills = ({ profile }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.candidate.token);
  const [value, setValue] = useState("");
  const [isChange, setIsChange] = useState(false);
  // const [edit, setEdit] = useState(false);

  console.log("profile", profile);
  const [resume, setResume] = useState(profile);

  const {
    educations,
    experiences,
    technical_skills,
    months_of_experience
  } = resume;

  const [skills, setSkills] = useState(getIndexArray(technical_skills));
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

  const submit1 = (e) => {
    e.preventDefault();

    let filter = { role: role.value };
    const query = qs.stringify(filter, { skipNull: true });
    const win = window.open(`/career-advice/direction?${query}`, "_blank");
    win.focus();
    // history.push(`/career-advice/direction?${query}`);
  };

  const [searchRole, setSearchRole] = useState({
    loadingSelect: false,
    fetch: false,
    jobDomains: []
  });

  const [searchSkill, setSearchSkill] = useState({
    loadingSkillSelect: false,
    fetchSkill: false,
    jobSkills: []
  });

  const { loadingSelect, fetch, jobDomains } = searchRole;
  const { loadingSkillSelect, fetchSkill, jobSkills } = searchSkill;

  const [role, setRole] = useState(null);
  const [skill, setSkill] = useState(null);

  const domains = useSelector((state) => state.jobDomain.domains);
  const skillsData = useSelector((state) => state.jobDomain.skills);

  useEffect(() => {
    console.log("profile", profile);

    // Explore with search skill and domain
    if (!domains.length) {
      dispatch({ type: GET_JOB_DOMAIN });
      setSearchRole((curState) => ({ ...curState, loadingSelect: true }));
    } else {
      setSearchRole((curState) => ({
        ...curState,
        jobDomains: domains.map(({ id, name }) => ({ value: id, label: name }))
      }));
    }

    if (!skillsData.length) {
      dispatch({ type: GET_JOB_SKILL });
      setSearchSkill((curState) => ({ ...curState, loadingSkillSelect: true }));
    } else {
      setSearchSkill((curState) => ({
        ...curState,
        jobSkills: skillsData.map(({ id, name }) => ({
          value: id,
          label: name
        }))
      }));
    }
  }, []);

  if (!fetch) {
    if (domains.length && loadingSelect) {
      setSearchRole((curState) => ({
        ...curState,
        loadingSelect: false,
        fetch: true,
        jobDomains: domains.map(({ id, name }) => ({ value: id, label: name }))
      }));
    }
  }

  if (!fetchSkill) {
    if (skillsData.length && loadingSkillSelect) {
      setSearchSkill((curState) => ({
        ...curState,
        loadingSkillSelect: false,
        fetchSkill: true,
        jobSkills: skillsData.map(({ id, name }) => ({
          value: id,
          label: name
        }))
      }));
    }
  }

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
          <div className="explore__content__skills">
            <p className="explore__content__skills__intro">
              Using skills listed in your Profile, we’ll help you discover
              career options.
            </p>

            <div className="chip" style={{ marginTop: "20px" }}>
              {skills.length &&
                skills.map(({ key, value }) => (
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
        </div>
      </div>

      <div className="container">
        <h2 className="explore__title-look">
          Looking for a specific role or skill?
        </h2>
        <div className="explore__title-sub">
          Find out more about a role or skill you’re interested in.
        </div>
        <div className="explore-look">
          <h2 className="explore-look__title">
            What skill do you want to focus on?
          </h2>

          <form>
            <div className="row">
              <div className="col-md-8 explore-look__input">
                <div className="dropdown pr-10" style={{ zIndex: 5 }}>
                  <Select
                    value={role}
                    onChange={(value) => setRole(value)}
                    options={jobDomains}
                    placeholder="Địa điểm làm việc"
                    menuPosition="fixed"
                    isClearable={true}
                  />
                  <div className="input-icon">
                    <SearchOutlined style={{ color: "#555" }} />
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4">
                <button
                  type="submit"
                  className="btn btn-full-width explore-look__btn"
                  style={{ fontWeight: 700 }}
                  onClick={submit1}
                >
                  Explore
                </button>
              </div>
            </div>
          </form>

          <form>
            <div className="row">
              <div className="col-md-8 explore-look__input">
                <div className="dropdown pr-10" style={{ zIndex: 5 }}>
                  <Select
                    value={skill}
                    onChange={(value) => setSkill(value)}
                    options={jobSkills}
                    placeholder="Địa điểm làm việc"
                    menuPosition="fixed"
                    isClearable={true}
                  />
                  <div className="input-icon">
                    <SearchOutlined style={{ color: "#555" }} />
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4">
                <button
                  type="submit"
                  className="btn btn-full-width explore-look__btn"
                  style={{ fontWeight: 700 }}
                  onClick={submit1}
                >
                  Explore
                </button>
              </div>
            </div>
          </form>
        </div>
        <div style={{ height: "80px" }}></div>
        {/* <Explore handleSubmit={submit1} history={history} /> */}
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
