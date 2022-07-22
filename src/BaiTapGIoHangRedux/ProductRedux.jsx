import React, { Component } from "react";
//Kết nối react component với store redux
import { connect } from "react-redux";

class ProductRedux extends Component {
  render() {
    let { sanPham } = this.props;
    return (
      <div className="card">
        <img
          width={250}
          height={400}
          src={sanPham.hinhAnh}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{sanPham.tenSP}</h5>
          <p className="card-text">{sanPham.giaBan.toLocaleString()}</p>
          <button
            data-toggle="modal"
            data-target="#exampleModal"
            className="btn btn-primary"
            onClick={() => {
              this.props.themGioHang(sanPham);
            }}
          >
            Thêm Giỏ Hàng
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  // Trả về 1 props (function) component ProductRedux
  return {
    themGioHang: (sanPhamClick) => {
      //   console.log(sanPhamClick);
      let spGHClick = { ...sanPhamClick, soLuong: 1 };
      const action = {
        type: "ThemGioHang", //Bắt buộc để đưa vào store  dễ phân biệt xử lý
        //Dữ liệu cần đưa lên store
        spGHClick: spGHClick,
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(ProductRedux);
