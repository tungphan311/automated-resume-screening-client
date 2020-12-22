import ConfirmModal from "components/Modals/ConfirmModal/ConfirmModal";
import React, { useEffect, useState } from "react";
import ProgressBar from "components/ProgressBar/ProgressBar";
import BasicForm from "components/Forms/ReviewForm/BasicForm";
import EducationForm from "components/Forms/ReviewForm/EducationForm";
import ExperienceForm from "components/Forms/ReviewForm/ExperienceForm";
import SkillForm from "components/Forms/ReviewForm/SkillForm";

function CandidateReviewCV() {
  const [visible, setVisible] = useState(false);
  const [curStep, setStep] = useState(1);
  const [progress, setProgress] = useState(0);

  const STEPS = [
    { step: 1, label: "Thông tin liên lạc" },
    { step: 2, label: "Học vấn" },
    { step: 3, label: "Kinh nghiệm" },
    { step: 4, label: "Kỹ năng" },
    { step: 5, label: "Xác nhận" }
  ];

  const handleChangeStep = (step) => {
    setStep(step);
    setProgress(((step - 1) * 100) / (STEPS.length - 1));
  };

  useEffect(() => {
    // setVisible(true);
  }, []);

  const toggleModal = () => setVisible(false);

  const renderContent = () => {
    switch (curStep) {
      case 1:
        return (
          <BasicForm curStep={curStep} handleChangeStep={handleChangeStep} />
        );

      case 2:
        return (
          <EducationForm
            curStep={curStep}
            handleChangeStep={handleChangeStep}
          />
        );

      case 3:
        return (
          <ExperienceForm
            curStep={curStep}
            handleChangeStep={handleChangeStep}
          />
        );

      case 4:
        return (
          <SkillForm curStep={curStep} handleChangeStep={handleChangeStep} />
        );

      default:
        return null;
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "35px auto 0" }}>
      <ProgressBar
        steps={STEPS}
        curStep={curStep}
        progress={progress}
        handleChangeStep={handleChangeStep}
      />

      {renderContent()}

      <ConfirmModal visible={visible} toggleModal={toggleModal} />
    </div>
  );
}

export default CandidateReviewCV;
