import ConfirmModal from "components/Modals/ConfirmModal/ConfirmModal";
import React, { useEffect, useState } from "react";
import ProgressBar from "components/ProgressBar/ProgressBar";

function CandidateReviewCV() {
  const [visible, setVisible] = useState(false);

  const STEPS = [
    { step: 1, label: "Thông tin liên lạc" },
    { step: 2, label: "Học vấn" },
    { step: 3, label: "Kinh nghiệm" },
    { step: 4, label: "Kỹ năng" },
    { step: 5, label: "Giải thưởng" }
  ];

  useEffect(() => {
    // setVisible(true);
  }, []);

  const toggleModal = () => setVisible(false);
  return (
    <div style={{ maxWidth: "600px", margin: "35px auto 0" }}>
      <ProgressBar steps={STEPS} />
      <ConfirmModal visible={visible} toggleModal={toggleModal} />
    </div>
  );
}

export default CandidateReviewCV;
