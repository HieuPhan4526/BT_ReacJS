import React, { Component } from "react";

export default class GlassDetail extends Component {
  render() {
    let { url, name, desc } = this.props.glassDetail;
    const styleGlass = {
      position: "absolute",
      right: "38%",
      width: "25%",
      top: "26%",
      opacity: 0.8,
    };
    const styleInfoGlass = {
      position: "absolute",
      width: "46%",
      bottom: "0%",
      left: "27%",
      padding: "13px",
      backgroundColor: "rgb(238, 201, 0, .5)",
    };
    return (
      <div className="col-6 ">
        <div style={{ position: "relative" }}>
          <img width={250} src="./img/Glass/model.jpg" alt="" />
          <img style={styleGlass} src={url} alt="" />
          <div className="text-left" style={styleInfoGlass}>
            <h5 style={{ fontSize: "14px", fontWeight: "bold" }}>{name}</h5>
            <p style={{ fontSize: "10px" }}>{desc}</p>
          </div>
        </div>
      </div>
    );
  }
}
