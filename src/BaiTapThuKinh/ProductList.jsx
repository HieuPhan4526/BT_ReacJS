import React, { Component } from "react";
import Product from "./Product";

export default class ProductList extends Component {
  renderProduct = () => {
    let { glassArr, xemChiTiet } = this.props;
    return glassArr.map((glass, index) => {
      return <Product key={glass.id} glass={glass} xemChiTiet={xemChiTiet} />;
    });
  };
  render() {
    return (
      <div style={{ backgroundColor: "white" }} className="col-12 p-5">
        {this.renderProduct()}
      </div>
    );
  }
}
