import React, { useState } from "react";
import {
  FundViewOutlined,
  FileDoneOutlined,
  HeartOutlined,
  DeleteFilled,
  CloseOutlined
} from "@ant-design/icons";
import Widget from "components/Widget/Widget";
import { closeJob, deleteJobPost } from "services/hrJobServices";
import { useSelector } from "react-redux";
import ContentLoader from "react-content-loader";
import { formatDateTime, toast, toastErr } from "utils/index";
import { Button } from "antd";
import { EditOutlined } from "@ant-design/icons";
import history from "state/history";
import swal from "sweetalert";

function HRJobDetail({ id, post, load }) {
  const [loading, setLoading] = useState(load);

  const { token } = useSelector((state) => state.auth.recruiter);

  const handleCloseJp = () => {
    swal({
      title: "Bạn có chắc không?",
      text: "Một khi đóng, bạn không thể khôi phục thông tin đã chọn!",
      icon: "warning",
      buttons: ["Huỷ", "Tiếp tục"],
      dangerMode: true
    })
      .then(async (willDelete) => {
        if (willDelete) {
          setLoading(true);

          await closeJob(id, token)
            .then(() => {
              toast({ message: "Đóng tin tuyển dụng thành công" });
              history.push("/recruiter/jobs");
            })
            .catch((err) => toastErr(err))
            .finally(() => setLoading(false));
        } else {
          swal("Chúc mừng dữ liệu của bạn vẫn an toàn!");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = () => {
    swal({
      title: "Bạn có chắc không?",
      text: "Một khi xoá, bạn không thể khôi phục những tin đã chọn!",
      icon: "warning",
      buttons: ["Huỷ", "Xoá"],
      dangerMode: true
    })
      .then(async (willDelete) => {
        if (willDelete) {
          const ids = [id];

          setLoading(true);
          await deleteJobPost(ids, token)
            .then((res) => {
              const { message } = res.data;
              toast({ message });

              history.push("/recruiter/jobs");
            })
            .catch((err) => {
              console.log(err);
            })
            .finally(() => {
              setLoading(false);
            });
        } else {
          swal("Chúc mừng dữ liệu của bạn vẫn an toàn!");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const { total_view, total_save, total_apply } = post;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="jp-summary">Thống kê ứng viên</div>
          <Widget
            title="Lượt truy cập"
            value={Intl.NumberFormat().format(total_view)}
            icon={<FundViewOutlined style={{ fontSize: 48 }} />}
          />
          <Widget
            title="Lượt ứng tuyển"
            value={Intl.NumberFormat().format(total_apply)}
            icon={<FileDoneOutlined style={{ fontSize: 48 }} />}
          />
          <Widget
            title="Lượt lưu tin tuyển dụng"
            value={Intl.NumberFormat().format(total_save)}
            icon={<HeartOutlined style={{ fontSize: 48 }} />}
          />
        </div>
        <div className="col-md-9" style={{ paddingRight: 0 }}>
          <div className="panel panel--light">
            <div className="panel-body">
              <div className="jp-header">
                <h5>Thông tin chi tiết</h5>
                <div>
                  <Button
                    icon={<EditOutlined />}
                    onClick={() => history.push(`/recruiter/jobs/${id}/edit`)}
                    className="mr-5"
                  >
                    Chỉnh sửa tin
                  </Button>
                  <Button
                    icon={<CloseOutlined />}
                    onClick={handleCloseJp}
                    className="mr-5"
                  >
                    Đóng tin
                  </Button>
                  <Button icon={<DeleteFilled />} onClick={handleDelete}>
                    Xoá tin
                  </Button>
                </div>
              </div>
              <div>
                <Detail {...post} loading={loading} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HRJobDetail;

const Detail = ({
  job_title,
  job_domain,
  salary,
  posted_in,
  deadline,
  contract_type,
  amount,
  description,
  requirement,
  benefit,
  loading
}) => (
  <table className="jb-detail">
    <tbody>
      <tr>
        <td className="jp-label">Tiêu đề</td>
        <td className="jp-value">{!loading ? job_title : <MyLoader />}</td>
      </tr>
      <tr>
        <td className="jp-label">Ngành</td>
        <td className="jp-value">{!loading ? job_domain : <MyLoader />}</td>
      </tr>
      <tr>
        <td className="jp-label">Ngày đăng tin</td>
        <td className="jp-value">
          {!loading ? posted_in && formatDateTime(posted_in) : <MyLoader />}
        </td>
      </tr>
      <tr>
        <td className="jp-label">Hạn chót nộp hồ sơ</td>
        <td className="jp-value">
          {!loading ? deadline && formatDateTime(deadline) : <MyLoader />}
        </td>
      </tr>
      <tr>
        <td className="jp-label">Hình thức làm việc</td>
        <td className="jp-value">{!loading ? contract_type : <MyLoader />}</td>
      </tr>
      <tr>
        <td className="jp-label">Lương</td>
        <td className="jp-value">{!loading ? salary : <MyLoader />}</td>
      </tr>
      <tr>
        <td className="jp-label">Địa điểm làm việc</td>
        <td className="jp-value">Thành phố Hồ Chí Minh</td>
      </tr>
      <tr>
        <td className="jp-label">Số lượng cần tuyển</td>
        <td className="jp-value">{!loading ? amount : <MyLoader />}</td>
      </tr>
      <tr>
        <td className="jp-label">Mô tả công việc</td>
        <td className="jp-value">
          {!loading ? (
            <div dangerouslySetInnerHTML={{ __html: description }}></div>
          ) : (
            <MyLoader />
          )}
        </td>
      </tr>
      <tr>
        <td className="jp-label">Yêu cầu ứng viên</td>
        <td className="jp-value">
          {!loading ? (
            <div dangerouslySetInnerHTML={{ __html: requirement }}></div>
          ) : (
            <MyLoader />
          )}
        </td>
      </tr>
      <tr>
        <td className="jp-label">Quyền lợi ứng viên</td>
        <td className="jp-value">
          {!loading ? (
            <div dangerouslySetInnerHTML={{ __html: benefit }}></div>
          ) : (
            <MyLoader />
          )}
        </td>
      </tr>
    </tbody>
  </table>
);

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={400}
    height={18}
    viewBox="0 0 400 18"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="400" height="18" />
  </ContentLoader>
);
