import Dashboard from "pages/HR/Home/Dashboard";
import HRInsider from "pages/HR/Home/HRInsider";
import React from "react";
import "./Home.scss";
import { Table } from "antd";
import { format_date } from "utils/index";
import { Link } from "react-router-dom";

const FILTERS = [
  {
    id: 1,
    name: {
      id: 1,
      name: "Frontend Dev"
    },
    last_edit: Date.now()
  },
  {
    id: 2,
    name: {
      id: 2,
      name: "Backend Dev"
    },
    last_edit: Date.now()
  },
  {
    id: 3,
    name: {
      id: 3,
      name: "Backend Dev"
    },
    last_edit: Date.now()
  }
];

function HRHome() {
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
      title: "Cập nhật lần cuối",
      dataIndex: "last_edit",
      align: "center",
      sorter: true,
      render: (last_edit) => format_date(last_edit)
    }
  ];
  return (
    <div className="container" style={{ marginTop: 20 }}>
      <div className="row">
        <div className="col-md-8">
          <Dashboard />
          <div className="panel panel-default panel-dashboard">
            <div className="panel-body">
              <div className="row header">
                <div className="col-md-6">
                  <div className="text">Danh sách bộ lọc ứng viên</div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="border"></div>
                </div>
              </div>
              <Table
                rowKey={(record) => record.id}
                dataSource={FILTERS}
                columns={columns}
                // loading={loading}
                // onChange={handleTableChange}
                showSorterTooltip={false}
                // pagination={{
                //   page: pagination.page,
                //   pageSize: 10,
                //   total: pagination.total
                // }}
              />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <HRInsider />
        </div>
      </div>
    </div>
  );
}

export default HRHome;
