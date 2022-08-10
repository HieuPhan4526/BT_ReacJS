import React, { Component } from "react";
//Kết nối react component với redux store
import { connect } from "react-redux";

class TableDSSVLife extends Component {
  renderTableSV = () => {
    let { danhSachSinhVien } = this.props;
    return danhSachSinhVien.map((sinhVien, index) => {
      return (
        <tr key={index}>
          <td>{sinhVien.maSV}</td>
          <td>{sinhVien.hoTen}</td>
          <td>{sinhVien.soDienThoai}</td>
          <td>{sinhVien.email}</td>
          <td>
            <button
              onClick={() => {
                this.props.xoaSinhVien(index);
              }}
              className="btn btn-danger mr-2"
            >
              Xóa
            </button>
            <button
              onClick={() => {
                this.props.xemSinhVien(sinhVien);
              }}
              className="btn btn-primary"
            >
              Sửa
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div>
        <div className="card">
          <div className="card-header bg-dark text-light">
            Danh Sách Sinh Viên ĐK
          </div>
          <div className="card-body">
            <div className="form-group d-flex flex-column align-items-end fe">
              <label htmlFor="timKiem">Search SV</label>
              <input
                style={{ width: "50%" }}
                type="text"
                className="form-control"
                id="timKiem"
                name="timKiem"
              />
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Mã</th>
                  <th scope="col">Họ Tên</th>
                  <th scope="col">Số Điện Thoại</th>
                  <th scope="col">Email</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>{this.renderTableSV()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (rootReducer) => {
  return {
    //Trả về 1 props của component
    danhSachSinhVien: rootReducer.QLSVLifeReducer.danhSachSinhVien,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    // Trả về 1 props(function) của component
    xoaSinhVien: (indexXoa) => {
      const action = {
        type: "XOA_SINH_VIEN",
        indexXoa: indexXoa,
      };
      dispatch(action);
    },
    xemSinhVien: (sinhVienXem) => {
      const action = {
        type: "XEM_SINH_VIEN",
        sinhVienXem: sinhVienXem,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableDSSVLife);
