import React, { Component } from "react";
import "./BaiTapDatVeCss.css";
import HangGhe from "./HangGhe";
import ThongTinDatVe from "./ThongTinDatVe";

export default class BaiTapDatVe extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: "url(./img/bgmovie.jpg)",
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundSize: "100%",
        }}
      >
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-8">
                <h2 className="text-warning text-center mt-4">
                  ĐẶT VÉ XEM PHIM
                </h2>
                <h4 className="text-light text-center mt-4">Màn Hình</h4>
                <div className="d-flex justify-content-center">
                  <div className="screen"></div>
                </div>
                <HangGhe />
              </div>
              <div className="col-4">
                <ThongTinDatVe />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
