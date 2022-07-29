import React, { Component } from "react";
// Kết nối react component với redux store
import { connect } from "react-redux";
import { datVeAction } from "../redux/action/BaiTapDatVeAction";

class Ghe extends Component {
  renderGhe = () => {
    return this.props.hangVaDSGhe.danhSachGhe.map((ghe, index) => {
      //Xét Trạng thái ghế đã đặt
      let gheDaDatCss = "";
      let disable = false;
      if (ghe.daDat) {
        gheDaDatCss = "gheDuocChon";
        disable = true;
      }
      //Xét trạng thái ghế đang đặt
      let gheDangDatCss = "";
      let indexDanhSachGheDangDat = this.props.danhSachGheDangDat.findIndex(
        (gheDangDat) => gheDangDat.soGhe === ghe.soGhe
      );
      if (indexDanhSachGheDangDat > -1) {
        gheDangDatCss = "gheDangChon";
      }

      return (
        <button
          onClick={() => {
            this.props.datVe(ghe);
          }}
          key={index}
          className={`ghe ${gheDaDatCss} ${gheDangDatCss} ml-2`}
          disabled={disable}
        >
          {ghe.soGhe}
        </button>
      );
    });
  };
  renderFirstChar = () => {
    return this.props.hangVaDSGhe.danhSachGhe.map((ghe, index) => {
      return (
        <span key={index} className="rowNumber">
          {ghe.soGhe}
        </span>
      );
    });
  };
  renderAll = () => {
    if (this.props.indexHangVaDSGhe === 0) {
      return (
        <div>
          {this.props.hangVaDSGhe.hang} {this.renderFirstChar()}
        </div>
      );
    } else {
      return (
        <div>
          {this.props.hangVaDSGhe.hang} {this.renderGhe()}
        </div>
      );
    }
  };

  render() {
    return <div>{this.renderAll()}</div>;
  }
}
const mapStateToProps = (state) => {
  return {
    // Trả về 1 props của component
    danhSachGheDangDat: state.DatVeReducer.danhSachGheDangDat,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    //Trả về 1 props (function) của component
    datVe: (clickChart) => {
      //   console.log(clickChart);
      dispatch(datVeAction(clickChart));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Ghe);
