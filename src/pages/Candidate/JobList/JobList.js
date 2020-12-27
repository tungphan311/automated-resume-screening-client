import Dropdown from "components/Dropdown/Dropdown";
import JobSearchAdvance from "components/Forms/JobSearchAdvance/JobSearchAdvance";
import JobItem from "components/JobItem/JobItem";
import { CONTACTS, DATES, PAGE_SIZES } from "constants/index";
import React, { useEffect, useState } from "react";
import "./JobList.scss";
import { Pagination, Select } from "antd";
import { findJobs } from "services/jobServices";
import { toastErr } from "utils/index";
import { getFormValues } from "redux-form";
import { FORM_KEY_JOB_SEARCH } from "state/reducers/formReducer";
import { useSelector } from "react-redux";

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
  const [query, setQuery] = useState({ job_title: null, province_id: null });
  const [filter, setFilter] = useState({
    posted_date: null,
    contract_type: null
  });

  const formValues = useSelector((state) =>
    getFormValues(FORM_KEY_JOB_SEARCH)(state)
  );

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
      const { page, pageSize } = pagination;
      const { posted_date, contact_type } = filter;
      const { job_title, province_id } = query;

      await findJobs(
        page,
        pageSize,
        job_title,
        province_id,
        posted_date,
        contact_type
      )
        .then((res) => {
          setJobs(mapResponseToState(res.data.data));
          setPagination({
            page: 1,
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

    fetchJobs();

    window.addEventListener("scroll", getScroll);

    return () => window.removeEventListener("scroll", getScroll);
  }, [filter]);

  const fetchJobs = async (page, pageSize, job_title, province_id) => {
    setLoading(true);
    return await findJobs(page, pageSize, job_title, province_id);
  };

  const handleChangePageSize = async (value) => {
    const { page } = pagination;
    const { job_title, province_id } = query;

    await fetchJobs(page, value, job_title, province_id)
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
    const { job_title, province_id } = query;

    await fetchJobs(page, pageSize, job_title, province_id)
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

  const handleSubmit = async () => {
    setLoading(true);
    const { page, pageSize } = pagination;
    const { job_title } = formValues;

    const province_id = formValues.location
      ? formValues.location.value
      : undefined;

    await fetchJobs(page, pageSize, job_title, province_id)
      .then((res) => {
        setJobs(mapResponseToState(res.data.data));
        setPagination({
          page: 1,
          pageSize,
          total: res.data.pagination.total
        });
        setQuery({ job_title, province_id: province_id });
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
  const { posted_date, contract_type } = filter;
  return (
    <>
      <div id="search-jobs-wrapper">
        <div
          id="search-jobs"
          className="search-jobs-container search-jobs-widget"
        >
          <div className="container">
            <JobSearchAdvance onSubmit={handleSubmit} />

            <div className="filters">
              <Dropdown
                title="Ngày đăng"
                options={DATES}
                value={posted_date}
                onChange={(value) =>
                  setFilter({ ...filter, posted_date: value })
                }
              />
              <Dropdown
                title="Hình thức làm việc"
                options={CONTACTS}
                value={contract_type}
                onChange={(value) =>
                  setFilter({ ...filter, contract_type: value })
                }
              />
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
                        key={job.jobId}
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
