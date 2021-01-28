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
import ContentLoader from "react-content-loader";
import qs from "query-string";

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={410}
    height={600}
    viewBox="0 0 410 600"
    backgroundColor="#b7b3b3"
    foregroundColor="#ffffff"
    {...props}
  >
    <rect x="0" y="10" rx="0" ry="0" width="400" height="20" />
    <rect x="0" y="40" rx="0" ry="0" width="300" height="16" />
    <rect x="0" y="90" rx="0" ry="0" width="150" height="14" />
    <rect x="0" y="112" rx="0" ry="0" width="400" height="14" />
    <rect x="0" y="135" rx="0" ry="0" width="400" height="14" />
    <rect x="0" y="177" rx="0" ry="0" width="400" height="20" />
    <rect x="0" y="207" rx="0" ry="0" width="300" height="16" />
    <rect x="0" y="246" rx="0" ry="0" width="150" height="14" />
    <rect x="0" y="271" rx="0" ry="0" width="400" height="14" />
    <rect x="0" y="296" rx="0" ry="0" width="400" height="14" />
    <rect x="0" y="344" rx="0" ry="0" width="400" height="20" />
    <rect x="0" y="376" rx="0" ry="0" width="300" height="16" />
    <rect x="0" y="414" rx="0" ry="0" width="150" height="14" />
    <rect x="0" y="438" rx="0" ry="0" width="400" height="14" />
    <rect x="0" y="464" rx="0" ry="0" width="400" height="14" />
  </ContentLoader>
);

function CandidateJobList({ history }) {
  const [curSelect, setCurSelect] = useState(null);
  const [top, setTop] = useState(0);
  const [bottom, setBottom] = useState(-1);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 10,
    total: 0
  });
  const [filter, setFilter] = useState({
    posted_date: null,
    contract_type: null,
    min_salary: null,
    max_salary: null,
    job_domain_id: null,
    job_title: null,
    province_id: null
  });

  const formValues = useSelector((state) =>
    getFormValues(FORM_KEY_JOB_SEARCH)(state)
  );
  const { domains } = useSelector((state) => state.jobDomain);

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

  const isBottom = (el) =>
    el.getBoundingClientRect().bottom <= window.innerHeight;

  useEffect(() => {
    function getScroll() {
      const scrollY = window.scrollY;
      setTop(top - scrollY);

      const el = document.getElementById("content");

      if (isBottom(el)) {
        const footer = document.getElementById("footer");
        setBottom(
          document.body.clientHeight - footer.getBoundingClientRect().top
        );
      } else {
        setBottom(-1);
      }
    }

    const fetchJobs = async () => {
      setLoading(true);
      setCurSelect(null);
      const { page, pageSize } = pagination;
      const {
        posted_date,
        contract_type,
        job_title,
        province_id,
        min_salary,
        max_salary,
        job_domain_id
      } = filter;

      await findJobs(
        page,
        pageSize,
        job_title,
        province_id,
        posted_date,
        contract_type,
        min_salary,
        max_salary,
        job_domain_id
      )
        .then((res) => {
          setJobs(mapResponseToState(res.data.data));
          setPagination({
            ...pagination,
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
  }, [filter, pagination.page, pagination.pageSize]);

  const handleChangePageSize = async (value) => {
    setPagination({
      page: 1,
      pageSize: value
    });
  };

  const handleChangePage = async (page) => {
    setPagination({
      ...pagination,
      page
    });
  };

  const handleSubmit = async () => {
    setLoading(true);

    const job_title = formValues
      ? formValues.job_title || undefined
      : undefined;
    const province_id = formValues
      ? formValues.location
        ? formValues.location.value
        : undefined
      : undefined;

    const query = qs.stringify(
      { location: province_id, q: job_title },
      { skipNull: true }
    );

    history.push({ search: `?${query}` });

    setFilter({ ...filter, job_title, province_id: province_id });
    setPagination({ ...pagination, page: 1 });
  };

  const onChangeSelect = (jobId) => setCurSelect(jobId);

  const { page, pageSize, total } = pagination;
  const {
    posted_date,
    contract_type,
    min_salary,
    max_salary,
    job_domain_id
  } = filter;
  return (
    <>
      <div id="search-jobs-wrapper">
        <div
          id="search-jobs"
          className="search-jobs-container search-jobs-widget"
        >
          <div className="container">
            <JobSearchAdvance onSubmit={handleSubmit} history={history} />

            <div className="filters">
              <Dropdown
                title="Ngày đăng"
                options={DATES}
                value={posted_date}
                onChange={(value) =>
                  setFilter({ ...filter, posted_date: value })
                }
                select
              />
              <Dropdown
                title="Hình thức làm việc"
                options={CONTACTS}
                value={contract_type}
                onChange={(value) =>
                  setFilter({ ...filter, contract_type: value })
                }
                select
              />
              <Dropdown
                title="Mức lương tối thiểu"
                value={min_salary}
                onChange={(value) =>
                  setFilter({ ...filter, min_salary: value })
                }
              />
              <Dropdown
                title="Mức lương tối đa"
                value={max_salary}
                onChange={(value) =>
                  setFilter({ ...filter, max_salary: value })
                }
              />
              <Dropdown
                title="Lĩnh vực công việc"
                options={domains.map((d) => ({ value: d.id, label: d.name }))}
                value={job_domain_id}
                onChange={(value) =>
                  setFilter({ ...filter, job_domain_id: value })
                }
                select
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
                    {loading ? (
                      <MyLoader />
                    ) : (
                      jobs.map((job) => (
                        <JobItem
                          {...job}
                          key={job.jobId}
                          curSelect={curSelect}
                          onChangeSelect={onChangeSelect}
                          top={top}
                          bottom={bottom}
                        />
                      ))
                    )}

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
