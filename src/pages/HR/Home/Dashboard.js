import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="panel panel-default panel-dashboard panel-stats">
      <div className="panel-body">
        <div className="row header">
          <div className="col-md-6">Thống kê</div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="border"></div>
          </div>
        </div>
        <div className="row" style={{ marginTop: 20 }}>
          <div className="col-md-12 col-xs-12">
            <div className="row">
              <div className="col-md-4 text-left">
                <div className="text">Tổng số ứng viên</div>
                <div className="number text-default">1000</div>
              </div>
              <div className="col-md-4 text-left">
                <div className="text">Cập nhật tháng gần nhất</div>
                <div className="number text-warning">100</div>
              </div>
              <div className="col-md-4 text-left">
                <div className="text">Cập nhật hôm nay</div>
                <div className="number text-primary">10</div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center" style={{ marginTop: 20 }}>
          <div>
            <Link to="/recruiter/find-candidates" className="btn btn-primary">
              <i className="fa fa-search mr-5" />
              Tìm kiếm ứng viên ngay
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
