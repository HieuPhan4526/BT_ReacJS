import React, { Component } from "react";
//Kết nối react component với redux store
import { connect } from "react-redux";

class FormDangKySV extends Component {
  state = {
    values: {
      maSV: "",
      hoTen: "",
      soDienThoai: "",
      email: "",
    },
    errors: {
      maSV: "",
      hoTen: "",
      soDienThoai: "",
      email: "",
    },
  };
  handleChange = (event) => {
    // let newSinhVien = { ...this.state };
    let { name, value, pattern } = event.target;
    // console.log(name, value);
    //validation
    //Kiểm Tra Rỗng
    let errorsMassager = "";
    if (value.trim() == "") {
      errorsMassager = name + " Vui lòng nhập dữ liệu!";
    }
    //kiểm tra định dạng
    let regex = new RegExp(pattern);
    if ([name] == name) {
      if (!value.match(regex)) {
        errorsMassager = name + " Dữ liệu chưa đúng định dạng";
      }
    }
    let newValues = { ...this.state.values, [name]: value };
    let newErrors = { ...this.state.errors, [name]: errorsMassager };
    this.setState({
      values: newValues,
      errors: newErrors,
    });
  };

  componentWillReceiveProps(newProps) {
    //Khi props thay đổi thì xét lại giá trị values của state bằng giá trị sinhVienChiTiet
    this.setState({
      values: newProps.sinhVienChiTiet,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let { values, errors } = this.state;
    // console.log(this.state);
    let vali = true;
    for (const key in values) {
      if (values[key] == "") {
        return (vali = false + alert(key + " Vui lòng nhập dữ liệu"));
      }
    }
    for (const key in errors) {
      if (errors[key] !== "") {
        return (vali = false + alert(key + " Dữ liệu chưa đúng định dạng"));
      }
    }
    if (vali) {
      this.props.themSinhVien(this.state.values);
    }
  };
  render() {
    // let { sinhVienChiTiet } = this.props;
    let { values } = this.state;
    // console.log(values);
    return (
      <div className="my-5">
        <div className="card">
          <div className="card-header bg-dark text-light">Form Đăng ký</div>
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="maSV">Mã SV</label>
                    <input
                      type="text"
                      className="form-control"
                      id="maSV"
                      name="maSV"
                      value={values.maSV}
                      onChange={this.handleChange}
                    />
                    <p className="text-danger">{this.state.errors.maSV}</p>
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="hoTen">Họ Tên</label>
                    <input
                      type="text"
                      className="form-control"
                      id="hoTen"
                      name="hoTen"
                      onChange={this.handleChange}
                      value={values.hoTen}
                      pattern="^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$"
                    />
                    <p className="text-danger">{this.state.errors.hoTen}</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="maSV">Số Điện Thoại</label>
                    <input
                      type="text"
                      className="form-control"
                      id="soDienThoai"
                      name="soDienThoai"
                      onChange={this.handleChange}
                      value={values.soDienThoai}
                      pattern="^[0-9]+$"
                    />
                    <p className="text-danger">
                      {this.state.errors.soDienThoai}
                    </p>
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="hoTen">Email</label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      name="email"
                      value={values.email}
                      onChange={this.handleChange}
                      pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
                    />
                    <p className="text-danger">{this.state.errors.email}</p>
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary">
                Đăng Ký
              </button>
              <button
                onClick={() => {
                  let { values, errors } = this.state;
                  // console.log(this.state);
                  let vali = true;
                  for (const key in values) {
                    if (values[key] == "") {
                      return (vali =
                        false + alert(key + " Vui lòng nhập dữ liệu"));
                    }
                  }
                  for (const key in errors) {
                    if (errors[key] !== "") {
                      return (vali =
                        false + alert(key + " Dữ liệu chưa đúng định dạng"));
                    }
                  }
                  if (vali) {
                    this.props.capNhapSinhVien(values);
                  }
                }}
                type="button"
                className="btn btn-success ml-2"
              >
                Cập Nhập
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    //Trả về 1 props(function) của component
    themSinhVien: (sinhVien) => {
      const action = {
        type: "THEM_SINH_VIEN",
        sinhVien: sinhVien,
      };
      dispatch(action);
    },
    capNhapSinhVien: (sinhVienUpdate) => {
      const action = {
        type: "UPDATE_SV",
        sinhVienUpdate: sinhVienUpdate,
      };
      dispatch(action);
    },
  };
};

const mapStateToProps = (rootReducer) => {
  return {
    //Trả về 1 props của component
    sinhVienChiTiet: rootReducer.QLSVLifeReducer.sinhVienChiTiet,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormDangKySV);
