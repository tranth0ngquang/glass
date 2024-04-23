import React, { Component } from "react";
import dataGlasses from "../Data/dataGlasses.json";

export default class BaiTapChonKinh extends Component {
  renderGlassesList = () => {
    return dataGlasses.map((glass, index) => {
      return (
        <img
          key={index}
          alt=""
          src={glass.url}
          style={{
            width: "130px",
            cursor: "pointer",
            border: "5px solid green",
          }}
          className="m-1"
          onClick={() => {
            this.handleChange(glass);
          }}
        />
      );
    });
  };

  state = {
    glassCurrent: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };
  handleChange = (changedGlass) => {
    this.setState({
      glassCurrent: changedGlass,
    });
  };

  render() {
    const keyFrame = `@keyframes animChangeGlasses${Date.now()}{
      from {
        width:0;
        transform: rotate(45deg);
        opacity:0
      }
      to {
        width:170px;
        transform: rotate(0)
        opacity:0.7
      }
    }
    `;

    const styleGlass = {
      position: "absolute",
      left: "318px",
      width: "170px",
      top: "105px",
      opacity: "0.7",
      animation: `animChangeGlasses${Date.now()} 1s`,
    };

    return (
      <div
        style={{
          backgroundImage: "url(./glassesImage/background.jpg)",
          backgroundSize: "cover",
          minHeight: "800px",
          className: "container",
        }}
      >
        <style>{keyFrame}</style>
        <div style={{ backgroundColor: "rgba(0,0,0,0.7)", minHeight: "800px" }}>
          <h3
            className="p-5 text-light"
            style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
          >
            TRY GLASSES APP ONLINE
          </h3>
          <div className="container">
            <div className="row">
              <div className="col-6" style={{ position: "relative" }}>
                <img
                  src="./glassesImage/model.jpg"
                  style={{ height: "400px", paddingLeft: "228px" }}
                  alt=""
                />
                <img
                  className=""
                  src={this.state.glassCurrent.url}
                  alt=""
                  style={styleGlass}
                />
                <div
                  className="text-start p-3"
                  style={{
                    position: "absolute",
                    width: "328.2px",
                    height: "130px",
                    right: "91px",
                    bottom: "0",
                    backgroundColor: "#FF9966",
                  }}
                >
                  <h5 className="" style={{ color: "#CC66CC" }}>
                    {this.state.glassCurrent.name}
                  </h5>
                  <p>{this.state.glassCurrent.desc}</p>
                </div>
              </div>
              <div className="col-6">
                <img
                  src="./glassesImage/model.jpg"
                  style={{ height: "400px", paddingRight: "150px" }}
                  alt=""
                />
              </div>
            </div>
            <div
              className="row p-4 mt-5 text-center justify-content-center"
              style={{ backgroundColor: "rgba(255,0,255,0.6)" }}
            >
              {this.renderGlassesList()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
