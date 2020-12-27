import Dropdown from "components/Dropdown/Dropdown";
import JobSearchAdvance from "components/Forms/JobSearchAdvance/JobSearchAdvance";
import JobItem from "components/JobItem/JobItem";
import { CONTACTS, DATES, PAGE_SIZES } from "constants/index";
import React, { useEffect, useState } from "react";
import "./JobList.scss";
import { Pagination, Select } from "antd";
import { findJobs } from "services/jobServices";
import { toastErr } from "utils/index";

function CandidateJobList() {
  const [curSelect, setCurSelect] = useState(null);
  const [top, setTop] = useState(0);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 10,
    total: 0
  });

  const mapResponseToState = (data) =>
    data.map(
      ({
        company_name,
        contact_type,
        job_description,
        job_post_id,
        job_title,
        last_edit,
        province_id,
        salary
      }) => ({
        jobId: job_post_id,
        jobTitle: job_title,
        company: company_name,
        salary,
        contractType: contact_type,
        jobDescription: job_description,
        lastEdit: last_edit,
        provinceId: province_id
      })
    );

  useEffect(() => {
    function getScroll() {
      const scrollY = window.scrollY;
      setTop(top - scrollY);
    }

    const fetchJobs = async () => {
      setLoading(true);
      await findJobs()
        .then((res) => {
          setJobs(mapResponseToState(res.data.data));
          setPagination({ ...pagination, total: res.data.pagination.total });
        })
        .catch((err) => {
          toastErr(err);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchJobs();

    window.addEventListener("scroll", getScroll);

    return () => window.removeEventListener("scroll", getScroll);
  }, []);

  const fetchJobs = async (page, pageSize) => {
    setLoading(true);
    return await findJobs(page, pageSize);
  };

  const handleChangePageSize = async (value) => {
    const { page } = pagination;
    await fetchJobs(page, value)
      .then((res) => {
        setJobs(mapResponseToState(res.data.data));
        setPagination({
          page: 1,
          pageSize: value,
          total: res.data.pagination.total
        });
      })
      .catch((err) => {
        toastErr(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleChangePage = async (page) => {
    const { pageSize } = pagination;
    await fetchJobs(page, pageSize)
      .then((res) => {
        setJobs(mapResponseToState(res.data.data));
        setPagination({
          page,
          pageSize,
          total: res.data.pagination.total
        });
      })
      .catch((err) => {
        toastErr(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onChangeSelect = (jobId) => setCurSelect(jobId);

  const { page, pageSize, total } = pagination;
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
              <Dropdown title="Ngày đăng" options={DATES} />
              <Dropdown title="Loại hợp đồng" options={CONTACTS} />
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
                        <div>
                          Hiển thị:{" "}
                          <span style={{ display: "inline-block" }}>
                            <Select
                              style={{ width: 140 }}
                              options={PAGE_SIZES}
                              defaultValue={pageSize}
                              onChange={(value) => handleChangePageSize(value)}
                            />
                          </span>
                        </div>
                        <div className="searchCountContainer">
                          {/* <div id="searchCountPages">Page 1 of 101 jobs</div> */}
                        </div>
                      </div>
                    </div>
                    {loading && <div>Loading ...</div>}

                    {jobs.map((job) => (
                      <JobItem
                        {...job}
                        curSelect={curSelect}
                        onChangeSelect={onChangeSelect}
                        top={top}
                      />
                    ))}
                    <nav>
                      <div className="vjs-pagination">
                        <Pagination
                          current={page}
                          total={total}
                          showSizeChanger={false}
                          showLessItems
                          pageSize={pageSize}
                          onChange={handleChangePage}
                        />
                      </div>
                    </nav>
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
