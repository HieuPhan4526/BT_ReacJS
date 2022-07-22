import React, { Component } from "react";
import ModalGioHangRedux from "./ModalGioHangRedux";
import ProductLtstRedux from "./ProductLtstRedux";
//Kết nối react componnet với store redux
import { connect } from "react-redux";

class BaiTapGioHangRedux extends Component {
  render() {
    let tongSoLuong = this.props.gioHang.reduce((tongSL, spGH, index) => {
      return (tongSL += spGH.soLuong);
    }, 0);
    return (
      <div>
        <h1 className="text-center">Bài Tập Giỏ Hàng Redux</h1>
        <div className="container">
          <div className="text-right my-5">
            <button
              data-toggle="modal"
              data-target="#exampleModal"
              className="btn btn-warning"
            >
              Giỏ Hàng ({tongSoLuong})
            </button>
          </div>
          <ProductLtstRedux />
          <ModalGioHangRedux />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  //Trả về 1 props component.
  return { gioHang: state.GioHangReducer.gioHang };
};
export default connect(mapStateToProps, null)(BaiTapGioHangRedux);
