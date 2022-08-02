import React, { Component } from "react";
//Kết nối react component với redux Store
import { connect } from "react-redux";

class TableDSSV extends Component {
  renderSinhVien = () => {
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
              className="btn btn-danger"
            >
              Xóa
            </button>
            <button
              onClick={() => {
                this.props.xemSinhVien(sinhVien);
              }}
              className="btn btn-primary ml-2"
            >
              Sửa
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    // console.log(this.props.danhSachSinhVien);
    return (
      <div>
        <div className="card">
          <div className="card-header bg-dark text-light">
            Danh Sách Sinh Viên
          </div>
          <div className="card-body">
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
              <tbody>{this.renderSinhVien()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (rootReducer) => {
  return {
    //Trả về 1 props(mảng object) của component
    danhSachSinhVien: rootReducer.QuanLySinhVienReducer.danhSachSinhVien,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    //Trả về 1 props (function) của component
    xoaSinhVien: (indexDelete) => {
      const action = {
        type: "XOA_SINH_VIEN",
        indexDelete: indexDelete,
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

export default connect(mapStateToProps, mapDispatchToProps)(TableDSSV);
