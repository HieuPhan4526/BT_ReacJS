import React, { Component } from "react";

export default class ModalGIoHang extends Component {
  renderGioHang = () => {
    let { gioHang, deleteProduct, tangGiamSoLuong } = this.props;
    return gioHang.map((product, index) => {
      return (
        <tr key={index}>
          <td>{product.id}</td>
          <td>
            <img
              width={70}
              height={80}
              src={product.image}
              alt={product.image}
            />
          </td>
          <td>{product.name}</td>
          <td>{product.price}$</td>
          <td>
            <button
              onClick={() => {
                tangGiamSoLuong(product, true);
              }}
              className="btn btn-primary"
            >
              +
            </button>
            <span>{product.soLuongGioHang}</span>
            <button
              onClick={() => {
                tangGiamSoLuong(product, false);
              }}
              className="btn btn-danger"
            >
              -
            </button>
          </td>
          <td>{(product.price * product.soLuongGioHang).toLocaleString()}$</td>
          <td>
            <button
              onClick={() => {
                deleteProduct(product.id);
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
      // <!-- Modal -->
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
                Giỏ hàng
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
                    <th scope="col">Giá</th>
                    <th scope="col">Số Lượng</th>
                    <th scope="col">Thành tiền</th>
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
