import Widget from "components/Widget/Widget";
import React from "react";
import {
  FundViewOutlined,
  FileDoneOutlined,
  HeartOutlined,
  FileExcelOutlined
} from "@ant-design/icons";
import JobDetailMenu from "components/JobDetailMenu/JobDetailMenu";
import "./JobDetail.scss";

function HRJobDetail() {
  return (
    <>
      <JobDetailMenu />
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="jp-summary">Thống kê ứng viên</div>
            <Widget
              title="Lượt truy cập"
              value={Intl.NumberFormat().format(1294)}
              icon={<FundViewOutlined style={{ fontSize: 48 }} />}
            />
            <Widget
              title="Lượt ứng tuyển"
              value={Intl.NumberFormat().format(100)}
              icon={<FileDoneOutlined style={{ fontSize: 48 }} />}
            />
            <Widget
              title="Lượt lưu tin tuyển dụng"
              value={Intl.NumberFormat().format(100)}
              icon={<HeartOutlined style={{ fontSize: 48 }} />}
            />
            <Widget
              title="Từ chối ứng viên"
              value={Intl.NumberFormat().format(100)}
              icon={<FileExcelOutlined style={{ fontSize: 48 }} />}
            />
          </div>
          <div className="col-md-9" style={{ paddingRight: 0 }}>
            <div className="panel panel--light">
              <div className="panel-body">
                <div className="jp-header">
                  <h5>Thông tin chi tiết</h5>
                </div>
                <div>
                  <Detail />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HRJobDetail;

const Detail = () => (
  <table className="jb-detail">
    <tr>
      <td className="jp-label">Tiêu đề</td>
      <td className="jp-value">
        <b>Tuyển Frontend Developer</b>
      </td>
    </tr>
    <tr>
      <td className="jp-label">Ngành</td>
      <td className="jp-value">Lập trình viên Frontend</td>
    </tr>
    <tr>
      <td className="jp-label">Ngày đăng tin</td>
      <td className="jp-value">15/01/2021</td>
    </tr>
    <tr>
      <td className="jp-label">Hạn chót nộp hồ sơ</td>
      <td className="jp-value">15/01/2021</td>
    </tr>
    <tr>
      <td className="jp-label">Hình thức làm việc</td>
      <td className="jp-value">Toàn thời gian</td>
    </tr>
    <tr>
      <td className="jp-label">Lương</td>
      <td className="jp-value">Thoả thuận</td>
    </tr>
    <tr>
      <td className="jp-label">Địa điểm làm việc</td>
      <td className="jp-value">Thành phố Hồ Chí Minh</td>
    </tr>
    <tr>
      <td className="jp-label">Số lượng cần tuyển</td>
      <td className="jp-value">10</td>
    </tr>
    <tr>
      <td className="jp-label">Mô tả công việc</td>
      <td className="jp-value">
        <div>
          <p>
            - Tổ chức tiếp thị bán hàng, phát triển khách hàng hiện hữu và khách
            hàng tiềm năng.
          </p>
          <p>
            - Tìm hiểu, thu thập thông tin tổng quát của khách hàng tiềm
            năng.&nbsp;
          </p>
          <p>
            - Lập kế hoạch tiếp thị, trực tiếp tiếp xúc khách hàng để giới thiệu
            các sản phẩm, dịch vụ của Eximbank,...&nbsp;
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td className="jp-label">Yêu cầu ứng viên</td>
      <td className="jp-value">
        <div>
          <p>
            - Tổ chức tiếp thị bán hàng, phát triển khách hàng hiện hữu và khách
            hàng tiềm năng.
          </p>
          <p>
            - Tìm hiểu, thu thập thông tin tổng quát của khách hàng tiềm
            năng.&nbsp;
          </p>
          <p>
            - Lập kế hoạch tiếp thị, trực tiếp tiếp xúc khách hàng để giới thiệu
            các sản phẩm, dịch vụ của Eximbank,...&nbsp;
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td className="jp-label">Quyền lợi ứng viên</td>
      <td className="jp-value">
        <div>
          <p>
            - Tổ chức tiếp thị bán hàng, phát triển khách hàng hiện hữu và khách
            hàng tiềm năng.
          </p>
          <p>
            - Tìm hiểu, thu thập thông tin tổng quát của khách hàng tiềm
            năng.&nbsp;
          </p>
          <p>
            - Lập kế hoạch tiếp thị, trực tiếp tiếp xúc khách hàng để giới thiệu
            các sản phẩm, dịch vụ của Eximbank,...&nbsp;
          </p>
        </div>
      </td>
    </tr>
  </table>
);
