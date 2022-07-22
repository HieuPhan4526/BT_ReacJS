import React, { Component } from "react";
//Kết nối component react với store redux
import { connect } from "react-redux";

class ModalGioHangRedux extends Component {
  renderGioHang = () => {
    return this.props.gioHang.map((spGH, index) => {
      return (
        <tr key={index}>
          <td>{spGH.maSP}</td>
          <td>
            <img width={60} height={70} src={spGH.hinhAnh} alt="" />
          </td>
          <td>{spGH.tenSP}</td>
          <td>
            <button
              onClick={() => {
                this.props.tangGiamSL(spGH.maSP, true);
              }}
              className="btn btn-success"
            >
              +
            </button>
            <span>{spGH.soLuong}</span>
            <button
              onClick={() => {
                this.props.tangGiamSL(spGH.maSP, false);
              }}
              className="btn btn-danger"
            >
              -
            </button>
          </td>
          <td>{spGH.giaBan.toLocaleString()}</td>
          <td>{(spGH.soLuong * spGH.giaBan).toLocaleString()}</td>
          <td>
            <button
              onClick={() => {
                this.props.xoaSanPham(index);
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
    return (
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Mã</th>
                    <th scope="col">Hình Ảnh</th>
                    <th scope="col">Tên</th>
                    <th scope="col">Số Lượng</th>
                    <th scope="col">Giá</th>
                    <th scope="col">Thành Tiền</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>{this.renderGioHang()}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //Trả về 1 props component.
  return { gioHang: state.GioHangReducer.gioHang };
};
const mapDispatchToProps = (dispatch) => {
  //Trả về 1 props (function) component
  return {
    xoaSanPham: (index) => {
      //   console.log(index);
      const action = {
        type: "XoaSanPham",
        index: index,
      };
      dispatch(action);
    },
    tangGiamSL: (maSPClick, tangGiam) => {
      const action = {
        type: "TangGiamSoLuong",
        maSPClick: maSPClick,
        tangGiam: tangGiam,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalGioHangRedux);
