import React, { Component } from "react";
//kết nối react component với redux store
import { connect } from "react-redux";

class FormDangKySV extends Component {
  handeChange = (event) => {
    let { sinhVien } = this.props;
    let tagInput = event.target;
    let { name, value, pattern } = tagInput;
    //Kiểm tra rỗng
    let errorMesssager = "";
    if (value.trim() === "") {
      errorMesssager = name + " Vui lòng nhập dữ liệu";
    }
    //Kiểm tra validation
    if (name == [name]) {
      let regex = new RegExp(pattern);
      if (!value.match(regex)) {
        //Lỗi
        errorMesssager = name + " Dữ liệu chưa đúng định dạng";
      }
    }
    let newError = { ...sinhVien.errors, [name]: errorMesssager };
    let newValue = { ...sinhVien.values, [name]: value };
    const action = {
      type: "HANDLE_CHANGE",
      sinhVienVali: {
        values: newValue,
        errors: newError,
      },
    };
    this.props.dispatch(action);
  };
  handleSubmit = (event) => {
    let { sinhVien } = this.props;
    event.preventDefault();
    const action = {
      type: "THEM_SINH_VIEN",
      sinhVien: sinhVien.values,
    };
    this.props.dispatch(action);
  };
  renderButton = () => {
    let { sinhVien } = this.props;
    let vali = true;
    for (const key in sinhVien.errors) {
      if (sinhVien.errors[key] !== "") {
        //Đang Lỗi
        vali = false;
      }
    }
    for (const key in sinhVien.values) {
      if (sinhVien.values[key] == "") {
        //Đang Lỗi
        vali = false;
      }
    }
    if (vali) {
      return (
        <div>
          <button type="submit" className="btn btn-primary">
            Thêm SV
          </button>
          <button
            onClick={() => {
              this.handleUpdate(sinhVien);
            }}
            type="button"
            className="btn btn-success"
          >
            Cập Nhập
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <button disabled className="btn btn-primary">
            Thêm SV
          </button>
          <button disabled className="btn btn-success">
            Cập Nhập
          </button>
        </div>
      );
    }
  };
  handleUpdate = (sinhVienXem) => {
    const action = {
      type: "CAP_NHAP_SV",
      sinhVienXem: sinhVienXem.values,
    };
    this.props.dispatch(action);
  };
  render() {
    let { sinhVien } = this.props;
    return (
      <div className="my-5">
        <div className="card">
          <div className="card-header bg-dark text-light">Form Đăng Ký</div>
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
                      value={sinhVien.values.maSV}
                      onChange={this.handeChange}
                    />
                    <p className="text-danger">{sinhVien.errors.maSV}</p>
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
                      value={sinhVien.values.hoTen}
                      pattern="^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$"
                      onChange={this.handeChange}
                    />
                    <p className="text-danger">{sinhVien.errors.hoTen}</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="soDienThoai">Số Điện Thoại</label>
                    <input
                      type="text"
                      className="form-control"
                      id="soDienThoai"
                      name="soDienThoai"
                      pattern="^[0-9]+$"
                      value={sinhVien.values.soDienThoai}
                      onChange={this.handeChange}
                    />
                    <p className="text-danger">{sinhVien.errors.soDienThoai}</p>
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      name="email"
                      value={sinhVien.values.email}
                      pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
                      onChange={this.handeChange}
                    />
                    <p className="text-danger">{sinhVien.errors.email}</p>
                  </div>
                </div>
              </div>
              {this.renderButton()}
            </form>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (rootReducer) => {
  return {
    //Trả về 1 props(object) của component
    sinhVien: rootReducer.QuanLySinhVienReducer.sinhVien,
  };
};
export default connect(mapStateToProps)(FormDangKySV);
