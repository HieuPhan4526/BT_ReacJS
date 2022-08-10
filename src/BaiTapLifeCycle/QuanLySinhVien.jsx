import React, { Component } from "react";
import FormDangKySV from "./FormDangKySV";
import TableDSSVLife from "./TableDSSVLife";

export default class QuanLySinhVien extends Component {
  render() {
    return <div className="container">
        <FormDangKySV/>
        <TableDSSVLife/>
    </div>;
  }
}
