import React, { Component } from "react";
import GlassDetail from "./GlassDetail";
import ProductList from "./ProductList";
import thuKinhModule from "./thuKinh.module.css";
export default class BaiTapThuKinh extends Component {
  state = {
    glassDetail: {},
  };
  glassArr = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./img/Glass/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./img/Glass/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./img/Glass/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "./img/Glass/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "./img/Glass/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "./img/Glass/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "./img/Glass/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "./img/Glass/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "./img/Glass/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];

  xemChiTiet = (sanPham) => {
    this.setState({
      glassDetail: sanPham,
    });
  };

  render() {
    const styleBackground = {
      backgroundImage: "url(./img/Glass/background.jpg)",
      minHeight: "1400px",
      backgroundSize: "1450px",
      backgroundRepeat: "no-repeat",
    };
    return (
      <div style={styleBackground}>
        <div className={thuKinhModule.overlay}>
          <h2 className={thuKinhModule.title}>TRY GLASSES APP ONLINES</h2>
          <div className="container">
            <div className="row text-center my-4">
              <GlassDetail glassDetail={this.state.glassDetail} />
              <div className="col-6">
                <img width={250} src="./img/Glass/model.jpg" alt="" />
              </div>
            </div>
            <div className="row py-5">
              <ProductList
                glassArr={this.glassArr}
                xemChiTiet={this.xemChiTiet}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
