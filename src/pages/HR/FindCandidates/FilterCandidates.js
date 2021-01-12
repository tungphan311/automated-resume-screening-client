import JobMenu from "components/JobMenu/JobMenu";
import { CANDIDATES_MENU } from "constants/index";
import React, { useState, useRef, useEffect } from "react";
import "./FilterCandidates.scss";
import { Table } from "antd";
import { Link } from "react-router-dom";
import { EditFilled, FileTextOutlined, DeleteFilled } from "@ant-design/icons";
import { format_date, toast } from "utils/index";
import { useSelector } from "react-redux";
import { deleteFilter, getListFilter } from "services/filterServices";
import swal from "sweetalert";

function HRFilterCandidates() {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [dropdown, toggleDropdown] = useState(undefined);
  const [pagination, setPagination] = useState({ page: 1, total: 0 });
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState([]);
  const [jobChange, setJobChange] = useState(0);

  const province_list = useSelector((state) => state.cv.provinces);
  const { token } = useSelector((state) => state.auth.recruiter);

  const ref = useRef(false);

  const setRef = (status) => {
    ref.current = status;
  };

  useEffect(() => {
    const fetchFilter = async () => {
      setLoading(true);

      await getListFilter(pagination.page, token)
        .then((res) => {
          const {
            data,
            pagination: { total }
          } = res.data;
          setFilters(
            data.map(({ id, name, last_edit, provinces }) => ({
              id,
              name: { id, name },
              provinces: provinces ? provinces.split(",") : [],
              last_edit,
              action: { id }
            }))
          );
          setPagination({ ...pagination, total });
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchFilter();
  }, [pagination.page, jobChange]);

  const handleDelete = (id = null) => {
    swal({
      title: "Bạn có chắc không?",
      text: "Một khi xoá, bạn không thể khôi phục những bộ lọc đã chọn!",
      icon: "warning",
      buttons: ["Huỷ", "Xoá"],
      dangerMode: true
    })
      .then(async (willDelete) => {
        if (willDelete) {
          const ids = id ? [id] : selectedRowKeys;

          setLoading(true);
          await deleteFilter(ids, token)
            .then((res) => {
              const { message } = res.data;

              toast({ message });
              setJobChange(jobChange + 1);
            })
            .catch((err) => {
              console.log(err);
            })
            .finally(() => {
              setLoading(false);
            });
          setSelectedRowKeys([]);
        } else {
          swal("Chúc mừng dữ liệu của bạn vẫn an toàn!");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const columns = [
    {
      title: "Mã",
      dataIndex: "id",
      align: "center",
      render: (id) => `#${id}`
    },
    {
      title: "Tên bộ lọc",
      dataIndex: "name",
      render: ({ id, name }) => (
        <Link
          to={`/recruiter/find-candidates/${id}`}
          className="job-item-title"
        >
          <strong>{name}</strong>
        </Link>
      ),
      width: "30%"
    },
    {
      title: "Tiêu chí",
      dataIndex: "provinces",
      align: "center",
      sorter: true,
      width: "30%",
      render: (provinces) => {
        const province_names = provinces.map(
          (p) =>
            province_list.length &&
            province_list.find((el) => el.province_id === p).province_name
        );

        return provinces.length ? (
          <div>
            <i
              className="fa fa-map-marker"
              style={{ minWidth: 15, color: "#777" }}
            />
            {province_names.join(", ")}
          </div>
        ) : null;
      }
    },
    {
      title: "Cập nhật lần cuối",
      dataIndex: "last_edit",
      align: "center",
      sorter: true,
      render: (last_edit) => format_date(last_edit)
    },
    {
      title: (
        <button
          className={` ${selectedRowKeys.length ? "" : "d-none"}`}
          onClick={() => handleDelete()}
        >
          <span className="text-danger">
            <DeleteFilled />
            {" Xoá"}
          </span>
        </button>
      ),
      dataIndex: "action",
      render: ({ id }) => (
        <div
          className={`btn-group btn-group-action ${
            dropdown === id ? "open" : ""
          }`}
          onMouseEnter={() => toggleDropdown(id)}
          onMouseLeave={() => {
            setTimeout(() => {
              if (!ref.current) toggleDropdown(null);
            }, 200);
          }}
        >
          <button className="btn btn-sm btn-default dropdown-toggle btn-action outline btn-hover-no-effect">
            <strong>Thao tác &nbsp;</strong>
            <span className="caret"></span>
          </button>
          <ul
            className="dropdown-menu dropdown-menu-right"
            role="menu"
            onMouseEnter={() => setRef(true)}
            onMouseLeave={() => setRef(false)}
          >
            <li>
              <Link to={`/recruiter/find-candidates/${id}`}>
                <FileTextOutlined />
                {" Xem danh sách ứng viên"}
              </Link>
            </li>
            <li>
              <Link to="#">
                <EditFilled />
                {" Chỉnh sửa bộ lọc"}
              </Link>
            </li>
            <li>
              <Link to="#" onClick={() => handleDelete(id)}>
                <span className="text-danger">
                  <DeleteFilled />
                  {" Xoá"}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      ),
      align: "center"
    }
  ];

  const onSelectChange = (selectedRowKeys) => {
    setSelectedRowKeys(selectedRowKeys);
  };

  const handleTableChange = async (pagination) => {
    setPagination({ page: pagination.current });
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selection: Table.SELECTION_ALL
  };

  return (
    <>
      <JobMenu menu={CANDIDATES_MENU} />
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">Danh sách bộ lọc</div>
          <div className="panel-body">
            <div>
              <div className="row">
                <div className="col-md-5">
                  <div className="form-group">
                    <input
                      type="text"
                      name="title"
                      className="form-control"
                      placeholder="Tìm kiếm theo tên bộ lọc"
                    />
                  </div>
                </div>
                <div className="col-md-7">
                  <button className="btn btn-primary btn-search-filter">
                    <i className="fa fa-search mr-5" />
                    Tìm kiếm
                  </button>
                </div>
              </div>
            </div>
            <div style={{ marginBottom: 15 }}>
              Tổng số: <strong className="text-primary">1</strong> chiến dịch
            </div>
            <Table
              rowKey={(record) => record.id}
              rowSelection={rowSelection}
              dataSource={filters}
              columns={columns}
              loading={loading}
              onChange={handleTableChange}
              showSorterTooltip={false}
              pagination={{
                page: pagination.page,
                pageSize: 10,
                total: pagination.total
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HRFilterCandidates;
