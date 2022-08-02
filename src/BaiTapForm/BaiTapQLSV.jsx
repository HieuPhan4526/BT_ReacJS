import React, { Component } from "react";
import FormDangKySV from "./FormDangKySV";
import TableDSSV from "./TableDSSV";

export default class BaiTapQLSV extends Component {
  render() {
    return (
      <div className="container">
        <FormDangKySV />
        <TableDSSV />
      </div>
    );
  }
}
