import { Modal, Button, Space, Row, Slider } from "antd";
import React, { Component } from "react";
import strings from "../helpers/Localization";
import AddIcon from "./icons/AddIcon";
import MinusIcon from "./icons/MinusIcon";

export default class EditModal extends Component {
  state = {
    value: 0,
  };

  onChange = (value) => {
    this.setState({
      value: value,
    });
  };

  scaleDown = () => {
    var currentValue = this.state.value - 10;
    this.setState({ value: currentValue });
  };

  scaleUp = () => {
    var currentValue = this.state.value + 10;
    this.setState({ value: currentValue });
  };

  applyEvent = () => {
    this.props.applyEvent(this.state.value);
  };

  render() {
    const { value } = this.state;
    return (
      <Modal
        width={590}
        title={strings.edit}
        visible={this.props.cropModalVisible}
        onOk={this.props.hideCropModal}
        onCancel={this.props.hideCropModal}
        okButtonProps={{ hidden: true }}
        cancelButtonProps={{ hidden: true }}
        centered={true}
        maskClosable={true}
      >
        <Row justify="center" align="middle">
          <div
            style={{
              width: 240,
              height: 240,
              backgroundImage: "url(../TileClassic.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: 240,
            }}
          >
            <div className="imagePic">
              <img
                alt="pinframes"
                style={{ position: "inherit" }}
                src="../examplePic.png"
              />
            </div>
          </div>
          <Space direction="vertical" wrap>
            <Space wrap style={{ marginTop: 24 }}>
              <div className="circlebutton" onClick={this.scaleDown}>
                <MinusIcon fill="#000" size="24" />
              </div>
              <Slider
                style={{ width: 231 }}
                value={value}
                onChange={this.onChange}
                onAfterChange={this.props.onAfterChange}
              />
              <div className="circlebutton" onClick={this.scaleUp}>
                <AddIcon fill="#000" size="24" />
              </div>
            </Space>
            <Button
              disabled={value === 0 ? true : false}
              onClick={this.applyEvent}
              style={{ width: 124, height: 44 }}
              type="primary"
            >
              {strings.apply}
            </Button>
          </Space>
        </Row>
      </Modal>
    );
  }
}
