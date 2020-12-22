import ConfirmModal from "components/Modals/ConfirmModal/ConfirmModal";
import React, { useEffect, useState } from "react";
import ProgressBar from "components/ProgressBar/ProgressBar";

function CandidateReviewCV() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // setVisible(true);
  }, []);

  const toggleModal = () => setVisible(false);
  return (
    <div style={{ maxWidth: "600px", margin: "35px auto 0" }}>
      <ProgressBar />
      <ConfirmModal visible={visible} toggleModal={toggleModal} />
    </div>
  );
}

export default CandidateReviewCV;
