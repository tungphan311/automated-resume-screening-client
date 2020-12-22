import ConfirmModal from "components/Modals/ConfirmModal/ConfirmModal";
import React, { useEffect, useState } from "react";

function CandidateReviewCV() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const toggleModal = () => setVisible(false);
  return (
    <div>
      Review
      <ConfirmModal visible={visible} toggleModal={toggleModal} />
    </div>
  );
}

export default CandidateReviewCV;
