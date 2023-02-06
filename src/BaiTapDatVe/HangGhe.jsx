import React, { Component } from "react";
import dataDSGhe from "./dataDSGhe.json";
import Ghe from "./Ghe";

export default class HangGhe extends Component {
  renderHangGhe = () => {
    return dataDSGhe.map((hangVaDSGhe, index) => {
      return (
        <div key={index}>
          <Ghe hangVaDSGhe={hangVaDSGhe} indexHangVaDSGhe={index} />
        </div>
      );
    });
  };
  render() {
    return <div className="mt-4 text-light">{this.renderHangGhe()}</div>;
  }
}
