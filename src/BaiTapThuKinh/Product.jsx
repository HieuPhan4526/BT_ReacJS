import React, { Component } from "react";

export default class Product extends Component {
  render() {
    let { glass, xemChiTiet } = this.props;
    return (
      <button
        onClick={() => {
          xemChiTiet(glass);
        }}
        className="btn"
      >
        <img className="m-2" width={100} src={glass.url} alt="" />
      </button>
    );
  }
}
