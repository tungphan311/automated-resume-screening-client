import JobMenu from "components/JobMenu/JobMenu";
import { CANDIDATES_MENU } from "constants/index";
import React, { useState } from "react";
import "./FilterCandidates.scss";
import { Table } from "antd";
import { Link } from "react-router-dom";
import { EditFilled, FileTextOutlined, DeleteFilled } from "@ant-design/icons";
import { format_date } from "utils/index";
import { useSelector } from "react-redux";

const FILTERS = [
  {
    id: 1,
    name: "Frontend Dev",
    provinces: ["92", "48"],
    last_edit: "2020-12-27T21:50:52",
    action: { id: 1 }
  }
];

function HRFilterCandidates() {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [dropdown, toggleDropdown] = useState(undefined);

  const province_list = useSelector((state) => state.cv.provinces);

  // const closeDropdown = () => toggleDropdown(undefined);

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
      render: (name) => (
        <Link to={"/recruiter/jobs/1"} className="job-item-title">
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
          (p) => province_list.find((el) => el.province_id === p).province_name
        );

        return (
          <div>
            <i
              className="fa fa-map-marker"
              style={{ minWidth: 15, color: "#777" }}
            />
            {province_names.join(", ")}
          </div>
        );
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
          // onClick={handleDelete}
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
          onMouseLeave={() => toggleDropdown(null)}
        >
          <button className="btn btn-sm btn-default dropdown-toggle btn-action outline btn-hover-no-effect">
            <strong>Thao tác &nbsp;</strong>
            <span className="caret"></span>
          </button>
          <ul className="dropdown-menu dropdown-menu-right" role="menu">
            <li>
              <Link to="#">
                <FileTextOutlined />
                {" Xem CV ứng tuyển"}
              </Link>
            </li>
            <li>
              <Link to="#">
                <EditFilled />
                {" Chỉnh sửa tin"}
              </Link>
            </li>
            <li>
              <Link to="#">
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
              dataSource={FILTERS}
              columns={columns}
              // loading={loading}
              // onChange={handleTableChange}
              showSorterTooltip={false}
              pagination={{
                // page,
                pageSize: 10,
                total: 10
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HRFilterCandidates;
