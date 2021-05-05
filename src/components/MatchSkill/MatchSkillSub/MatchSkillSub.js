import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../MatchSkill.scss";
import MatchSkillSubModal from "./MatchSkillSubModal";

const MatchSkillSub = ({ matchedSkills, mainSkills, name }) => {
  const [show, toggleShow] = useState(false);
  const toggleModal = () => {
    toggleShow(true);
  };

  return (
    <>
      <div onClick={toggleModal} className="match-skill__sub row">
        <div className="match-skill__sub__title">See how you match</div>
        <div className="match-skill__sub__number">
          <span>{matchedSkills.length}</span>
        </div>
      </div>
      <MatchSkillSubModal
        show={show}
        toggleModal={() => toggleShow(false)}
        matchedSkills={matchedSkills}
        mainSkills={mainSkills}
        name={name}
      />
    </>
  );
};

export default MatchSkillSub;
