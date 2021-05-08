import React from "react";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

import "../MatchSkill.scss";

const MatchSkillSubModal = ({
  show,
  toggleModal,
  matchedSkills,
  mainSkills,
  name
}) => {
  const handleCloseModal = () => {
    toggleModal();
  };

  let sameSkills = mainSkills.filter((item) => matchedSkills.includes(item));
  let diffSkills = mainSkills.filter((item) => !sameSkills.includes(item));

  return (
    <Modal show={show} onHide={handleCloseModal} dialogClassName="skills-modal">
      <Modal.Header>
        <Modal.Title>{name}</Modal.Title>
        <Button onClick={handleCloseModal}>Close</Button>
      </Modal.Header>

      <Modal.Body>
        <div className="row skills-modal__header-text">
          <img src="https://www.seek.com.au/career-advice/assets/801328b9.svg" alt="icon match"/>
          <span>Skill overlaps with your previous roles and {name}</span>
        </div>

        <h3 className="row skills-modal__title">Key skills and experience</h3>

        <p className="row skills-modal__sub-title">
          Your previous roles have&nbsp;<b>{matchedSkills.length}</b>
          &nbsp;overlapping key skills and experience.
        </p>

        <div className="skills-modal__list">
          {matchedSkills.length &&
            matchedSkills.map((item) => {
              return <SkillMatched name={item} />;
            })}
          {diffSkills.length &&
            diffSkills.slice(0, 21).map((item) => {
              return <SkillMatched name={item} isMatch={false} />;
            })}
        </div>

        <Link className="row skills-modal__learn">
          <img
            src="https://www.seek.com.au/career-advice/assets/a9c6382f.svg"
            alt="arrow right"
          />
          <span>Learn more about this career</span>
        </Link>
      </Modal.Body>

      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

export default MatchSkillSubModal;

const SkillMatched = ({ name, isMatch = true }) => {
  return (
    <div className={`row skill-matched ${!isMatch && "skill-matched-not"}`}>
      <span style={{ textTransform: "capitalize" }}>{name}</span>
      {isMatch && (
        <img src="https://www.seek.com.au/career-advice/assets/801328b9.svg" />
      )}
    </div>
  );
};
