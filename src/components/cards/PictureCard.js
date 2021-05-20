import { Col, Row, Space } from "antd";
import React, { Component } from "react";

export default class PictureCard extends Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false,
    };
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }

  render() {
    return (
      <Col span={8}>
        <div
          style={{
            width: 240,
            height: 240,
            backgroundImage: "url(../TileClassic.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: 240,
          }}
        >
          <div
            className="imagePic"
            onMouseEnter={this.handleMouseHover}
            onMouseLeave={this.handleMouseHover}
          >
            <img
              alt="pinframes"
              style={{ position: "inherit" }}
              src="../examplePic.png"
            />
            {this.state.isHovering && (
              <Row
                justify="end"
                style={{ position: "absolute", top: 8, right: 8 }}
              >
                <Space direction="vertical" wrap>
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      background: "white",
                      borderRadius: 4,
                      boxShadow: " 0px 0px 4px rgba(0, 0, 0, 0.5)",
                      textAlign: "center",
                    }}
                    onClick={this.props.onCropEvent}
                  >
                    <img alt="pinframes" src="../crop.png" />
                  </div>
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      background: "white",
                      borderRadius: 4,
                      boxShadow: " 0px 0px 4px rgba(0, 0, 0, 0.5)",
                      textAlign: "center",
                    }}
                    onClick={this.props.onDeleteEvent}
                  >
                    <img alt="pinframes" src="../delete.png" />
                  </div>
                </Space>
              </Row>
            )}
          </div>
        </div>
      </Col>
    );
  }
}
