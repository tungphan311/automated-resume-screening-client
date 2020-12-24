import Dropdown from "components/Dropdown/Dropdown";
import JobSearchAdvance from "components/Forms/JobSearchAdvance/JobSearchAdvance";
import JobItem from "components/JobItem/JobItem";
import { DATES } from "constants/index";
import React, { useEffect, useState } from "react";
import "./JobList.scss";

function CandidateJobList() {
  const [curSelect, setCurSelect] = useState(null);
  const [top, setTop] = useState(0);

  useEffect(() => {
    function getScroll() {
      const scrollY = window.scrollY;
      setTop(top - scrollY);
    }

    window.addEventListener("scroll", getScroll);

    return () => window.removeEventListener("scroll", getScroll);
  }, []);

  const onChangeSelect = (jobId) => setCurSelect(jobId);
  return (
    <>
      <div id="search-jobs-wrapper">
        <div
          id="search-jobs"
          className="search-jobs-container search-jobs-widget"
        >
          <div className="container">
            <JobSearchAdvance />

            <div className="filters">
              <Dropdown options={DATES} />
            </div>
          </div>
        </div>
        <div
          ref={(el) => {
            if (!el) return;

            setTop(el.getBoundingClientRect().y);
          }}
        >
          <div className="container">
            <table id="searchContent" className="serpContainerMinHeight">
              <tbody>
                <tr role="main" style={{ verticalAlign: "top" }}>
                  <td id="resultCol">
                    <div style={{ paddingTop: "6px" }}></div>
                    <div className="resultsTop">
                      <div className="secondRow">
                        <div className="searchCountContainer">
                          <div id="searchCountPages">Page 1 of 101 jobs</div>
                        </div>
                      </div>
                    </div>
                    <JobItem
                      jobId={1}
                      curSelect={curSelect}
                      onChangeSelect={onChangeSelect}
                      top={top}
                    />
                    <JobItem
                      jobId={2}
                      curSelect={curSelect}
                      onChangeSelect={onChangeSelect}
                      top={top}
                    />
                  </td>
                  {curSelect === null && (
                    <td role="region" id="auxCol">
                      <JobAlert />
                      <div className="recentsearches"></div>
                    </td>
                  )}
                  <td id="applyCol"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default CandidateJobList;

const JobAlert = () => (
  <div id="jobalertswrapper">
    <div id="jobalerts" className="open jaui">
      <div className="jobalertlabel">
        <div id="jobalertlabel" className="jobalerts_title">
          <div>Nhận việc làm mới cho tìm kiếm này qua email</div>
        </div>
      </div>
      <div id="jobalertform" className="jaform">
        <span id="jobalertsending"></span>
        <div id="jobalertmessage">
          <label className="jobAlertFormLabel-contrast-color">
            Địa chỉ email
          </label>
          <input
            type="email"
            name="email"
            size={25}
            maxLength={100}
            id="alertmail"
          />
          <span className="serp-button">
            <span className="serp-button-inner">
              <button id="alertsubmit" className="serp-button-label">
                Kích hoạt
              </button>
            </span>
          </span>
          <div style={{ marginTop: "12px" }}>
            <span>
              Khi tạo thông báo việc làm, bạn đồng ý với điều khoản của chúng
              tôi. Bạn có thể thay đổi cài đặt chấp thuận của mình bất kỳ lúc
              nào bằng cách hủy đăng ký, hoặc như được trình bày chi tiết trong
              điều khoản của chúng tôi.
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);
