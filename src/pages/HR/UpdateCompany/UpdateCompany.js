import NotifyModal from "components/Modals/NotifyModal/NotifyModal";
import React, { useEffect, useState } from "react";
import "./UpdateCompany.scss";
import { Form, Input } from "antd";
import { searchCompany } from "services/companyServices";
import { toast, toastErr } from "utils/index";
import { useDispatch } from "react-redux";
import FormData from "form-data";
import { addCompanyAction, updateHRCompanyAction } from "state/actions/index";
import Loading from "components/Loading/Loading";

const ACCEPTS = ["image/jpeg", "image/jpg", "image/png"];

function HRUpdateCompany() {
  const [showing, setShowing] = useState(false);
  const [name, setName] = useState("");
  const [isSelect, setIsSelect] = useState(true);
  const [pagination, setPagination] = useState({
    search: false,
    page: 1,
    hasMore: false,
    isLoading: false
  });
  const [companies, setCompanies] = useState([]);
  const [selected, setSelected] = useState(null);

  const [files, setFiles] = useState({ logo: {}, background: {} });

  const [loading, setLoading] = useState(false);

  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const layout = {
    labelCol: {
      span: 6
    },
    wrapperCol: {
      span: 18
    }
  };

  useEffect(() => {
    // setShowing(true);
  }, []);

  const onCancel = () => setShowing(false);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const validateMessages = {
    required: "${label} không được bỏ trống!",
    types: {
      email: "Email không hợp lệ!"
    }
  };

  const { TextArea } = Input;

  const handleSearchCompany = async (e) => {
    e.preventDefault();
    setPagination({ ...pagination, isLoading: true });

    await searchCompany(name, pagination.page)
      .then((result) => {
        const { data } = result.data;

        const has_more = result.data.pagination
          ? result.data.pagination.has_more
          : false;

        setCompanies(data);
        setPagination({
          ...pagination,
          hasMore: has_more,
          search: true,
          isLoading: false
        });
      })
      .catch((err) => toastErr(err));
  };

  const handleLoadMore = async (e) => {
    e.preventDefault();

    const result = await searchCompany(name, pagination.page);
    const { data } = result.data;

    const has_more = result.data.pagination
      ? result.data.pagination.has_more
      : false;

    setCompanies([...companies, ...data]);
    setPagination({ ...pagination, hasMore: has_more });
  };

  const handleSelect = (id) => {
    if (id) {
      const comp = companies.find((ele) => ele.id === id);

      setSelected(comp);
    } else setSelected(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (isSelect) {
      dispatch(updateHRCompanyAction(selected.id)).catch(() =>
        setLoading(false)
      );
    }

    form.submit();
  };

  const onFinish = (values) => {
    const { description, email, location, name, phone, website } = values;
    const { logo, background } = files;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("location", location);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("logo", logo);
    formData.append("website", website);
    formData.append("background", background);
    formData.append("description", description);

    dispatch(addCompanyAction(formData)).catch(() => setLoading(false));
  };

  const handleInputChange = (e) => {
    const name = e.target.name;
    const file = e.target.files[0];

    if (!ACCEPTS.includes(file.type)) {
      toast({ type: "error", message: "Định dạng tệp không hợp lệ" });
    }

    setFiles({ ...files, [name]: file });
  };

  return (
    <div className="container" style={{ marginTop: 20 }}>
      <Loading loading={loading} />
      <div className="row">
        <div className="col-md-10 col-md-offset-2 col-sm-10 col-sm-offset-1">
          <form>
            <div className="panel panel-default">
              <div className="panel-heading">Đăng ký thông tin Công ty</div>
              <div className="panel-body" style={{ minHeight: "200px" }}>
                {isSelect ? (
                  <div id="select-company">
                    <p>
                      <i className="fa fa-info-circle text-primary" /> Để đảm
                      bảo chất lượng tin tuyển dụng của Quý Khách hàng tốt nhất
                      và tăng sự tin tưởng với ứng viên. Vui lòng cập nhật chi
                      thông tin công ty tại đây. Hãy tìm kiếm công ty của bạn
                      trên hệ thống.
                    </p>
                    <div className="input-group">
                      <input
                        type="text"
                        placeholder="Tìm và chọn công ty của bạn"
                        className="form-control search-company"
                        value={name}
                        onChange={handleChange}
                      />
                      <span className="input-group-btn">
                        <button
                          disabled={!name || pagination.isLoading}
                          className="form-control btn btn-default company-btn"
                          onClick={handleSearchCompany}
                        >
                          Tìm kiếm
                          {pagination.isLoading && (
                            <div className="dashed-loading"></div>
                          )}
                        </button>
                      </span>
                    </div>
                    <div style={{ marginTop: 40 }}>
                      {selected === null ? (
                        companies.length ? (
                          companies.map(({ id, name, location, logo }) => (
                            <Company
                              key={id}
                              id={id}
                              name={name}
                              location={location}
                              logo={logo}
                              handleSelect={handleSelect}
                            />
                          ))
                        ) : (
                          pagination.search && <Empty />
                        )
                      ) : (
                        <Company
                          id={selected.id}
                          name={selected.name}
                          location={selected.location}
                          logo={selected.logo}
                          selected
                          handleSelect={handleSelect}
                        />
                      )}
                    </div>
                    {pagination.hasMore && (
                      <div className="text-center" style={{ marginTop: 30 }}>
                        <button
                          disabled={pagination.isLoading}
                          className="btn btn-default company-btn"
                          onClick={handleLoadMore}
                        >
                          Xem thêm
                          {pagination.isLoading && (
                            <div className="dashed-loading"></div>
                          )}
                        </button>
                      </div>
                    )}
                    {selected === null && (
                      <div style={{ marginTop: 30 }}>
                        <p>
                          <span className="text-primary">
                            <i className="fa fa-info-circle"></i>
                          </span>{" "}
                          Trường hợp không tìm thấy kết quả, vui lòng đăng ký
                          công ty mới.
                        </p>
                        <div className="text-center">
                          <button
                            className="btn btn-default"
                            onClick={() => setIsSelect(false)}
                          >
                            Đăng ký công ty
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div id="create-company">
                    <p style={{ marginBottom: 20 }}>
                      <i className="fa fa-info-circle text-primary"></i> Hoàn
                      thành thông tin công ty hoặc{" "}
                      <strong>
                        <button
                          className="text-primary"
                          onClick={() => setIsSelect(true)}
                        >
                          lựa chọn công ty đã có
                        </button>
                      </strong>
                    </p>
                    <Form
                      {...layout}
                      onFinish={onFinish}
                      form={form}
                      validateMessages={validateMessages}
                    >
                      <Form.Item
                        name="name"
                        label="Tên công ty"
                        rules={[{ required: true }]}
                      >
                        <Input placeholder="Tên công ty" />
                      </Form.Item>
                      <Form.Item
                        name="location"
                        label="Địa chỉ"
                        rules={[{ required: true }]}
                      >
                        <Input placeholder="Địa chỉ công ty" />
                      </Form.Item>
                      <Form.Item
                        name="phone"
                        label="Số điện thoại"
                        rules={[{ required: true }]}
                      >
                        <Input placeholder="Số điện thoại công ty" />
                      </Form.Item>
                      <Form.Item
                        name="email"
                        label="Email"
                        rules={[{ required: true, type: "email" }]}
                      >
                        <Input placeholder="email@company.com" />
                      </Form.Item>
                      <Form.Item name="logo" label="Logo công ty">
                        <input
                          type="file"
                          name="logo"
                          accept="image/*"
                          onChange={handleInputChange}
                        />
                      </Form.Item>
                      <Form.Item name="background" label="Background công ty">
                        <input
                          type="file"
                          name="background"
                          accept="image/*"
                          onChange={handleInputChange}
                        />
                      </Form.Item>
                      <Form.Item
                        name="website"
                        label="Website"
                        rules={[{ required: true }]}
                      >
                        <Input placeholder="https://company.com" />
                      </Form.Item>
                      <Form.Item name="description" label="Mô tả công ty">
                        <TextArea rows={4} />
                      </Form.Item>
                    </Form>
                  </div>
                )}
              </div>
              <div className="panel-footer">
                <div className="pull-right">
                  <button className="btn btn-primary" onClick={handleSubmit}>
                    Hoàn tất
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <NotifyModal visible={showing} onCancel={onCancel} />
    </div>
  );
}

export default HRUpdateCompany;

const Company = ({
  id,
  name,
  location,
  logo,
  selected = false,
  handleSelect
}) => (
  <div className="row" style={{ marginTop: 20 }}>
    <div className="col-md-3">
      <img src={logo} alt="" style={{ width: "100%" }} />
    </div>
    <div className="col-md-7">
      <p style={{ fontSize: 18, marginBottom: 10 }}>
        <b>{name}</b>
      </p>
      <p style={{ textAlign: "justify" }}>{location}</p>
    </div>
    <div className="col-md-2 text-right">
      {!selected ? (
        <button
          className="btn btn-default"
          onClick={(e) => {
            e.preventDefault();
            handleSelect(id);
          }}
        >
          Chọn
        </button>
      ) : (
        <button
          className="btn btn-info"
          onClick={(e) => {
            e.preventDefault();
            handleSelect(null);
          }}
        >
          Huỷ chọn
        </button>
      )}
    </div>
  </div>
);

const Empty = () => (
  <div className="text-center">
    <img
      src="/assets/svg/Empty.svg"
      alt="empty icon"
      style={{ width: "380px", height: "160px", margin: "50px auto" }}
    />
    <p style={{ paddingBottom: "40px" }}>Không có tin công ty nào!</p>
  </div>
);
