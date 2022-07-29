import React, { Component } from "react";
//Kết nối react component với redux store
import { connect } from "react-redux";
import { huyVeAcTion } from "../redux/action/BaiTapDatVeAction";

class ThongTinDatVe extends Component {
  renderDSGheDangDat = () => {
    return this.props.danhSachGheDangDat.map((gheDangDat, index) => {
      return (
        <tr className="text-warning" key={index}>
          <td>{gheDangDat.soGhe}</td>
          <td>{gheDangDat.gia.toLocaleString()}</td>
          <td>
            <button
              onClick={() => {
                this.props.huyVe(gheDangDat.soGhe);
              }}
              className="btn btn-danger"
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    let tinhTongTien = this.props.danhSachGheDangDat.reduce(
      (tongTien, gheDangDat, index) => {
        return (tongTien += gheDangDat.gia);
      },
      0
    );
    return (
      <div className="mt-4">
        <h4 className="text-light text-center">DANH SÁCH GHẾ BẠN CHỌN</h4>
        <div className="d-flex align-items-center my-3">
          <div className="gheDuocChon"></div>
          <span className="text-light ml-2">Ghế đã đặt</span>
        </div>
        <div className="d-flex align-items-center my-3">
          <div className="gheDangChon"></div>
          <span className="text-light ml-2">Ghế Đang Chọn</span>
        </div>
        <div className="d-flex align-items-center my-3">
          <div className="ghe ml-0"></div>
          <span className="text-light ml-2">Ghế Chưa Đặt</span>
        </div>
        <table className="table table-bordered">
          <thead>
            <tr className="text-light">
              <th scope="col">Số Ghế</th>
              <th scope="col">Giá</th>
              <th scope="col">Hủy</th>
            </tr>
          </thead>
          <tbody>{this.renderDSGheDangDat()}</tbody>
          <tfoot>
            <tr className="text-light">
              <th></th>
              <th>Thành Tiền :{tinhTongTien.toLocaleString()}</th>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    //Trả về props của component
    danhSachGheDangDat: state.DatVeReducer.danhSachGheDangDat,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    // Trả về 1 props (function) của component
    huyVe: (soGheClick) => {
      dispatch(huyVeAcTion(soGheClick));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ThongTinDatVe);
