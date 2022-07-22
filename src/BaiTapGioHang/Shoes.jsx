import React, { Component } from "react";

export default class Shoes extends Component {
  render() {
    let { shoes, addProduct } = this.props;
    return (
      <div className="card">
        <img src={shoes.image} className="card-img-top" alt={shoes.image} />
        <div className="card-body">
          <h5 className="card-title">{shoes.name}</h5>
          <p className="card-text">{shoes.price}$</p>
          <button
            data-toggle="modal"
            data-target="#exampleModal"
            className="btn btn-primary"
            onClick={() => {
              addProduct(shoes);
            }}
          >
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}
