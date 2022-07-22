import React, { Component } from "react";
import Shoes from "./Shoes";

export default class ShoesList extends Component {
  renderShoesList = () => {
    let { shoesArr, addProduct } = this.props;
    return shoesArr.map((shoes, index) => {
      return (
        <div className="col-4 " key={index}>
          <Shoes shoes={shoes} addProduct={addProduct} />
        </div>
      );
    });
  };
  render() {
    return <div className="row">{this.renderShoesList()}</div>;
  }
}
