import { Drawer, Space, Row, Col, Button, Divider } from "antd";
import React, { Component } from "react";
import strings from "../helpers/Localization";
export default class RightMenu extends Component {
  visibleSSS = () => {
    this.props.onVisibleItem(1, true);
  };

  visiblePrivacy = () => {
    this.props.onVisibleItem(2, true);
  };

  visibleAgreement = () => {
    this.props.onVisibleItem(3, true);
  };

  render() {
    return (
      <Drawer
        closeIcon={<></>}
        width={468}
        placement="right"
        closable={true}
        onClose={this.props.onClose}
        visible={this.props.visible}
        getContainer={false}
        style={{ position: "absolute" }}
      >
        <Row>
          <Col flex="auto">
            <span style={{ fontSize: 20 }}>PinFrames</span>
          </Col>
          <Col flex="24px">
            <Button
              style={{ padding: 0 }}
              type="link"
              onClick={this.props.onClose}
            >
              <img alt="pinframes" src="../close.png" />
            </Button>
          </Col>
        </Row>
        <Divider />
        <Space direction="vertical" wrap>
          <Button
            type="link"
            style={{ color: "black", paddingLeft: 0 }}
            onClick={this.visibleSSS}
          >
            <Space wrap>
              <img alt="pinframes" src="../question_icon.png" />
              {strings.sss}
            </Space>
          </Button>
          <Button
            type="link"
            style={{ color: "black", paddingLeft: 0 }}
            onClick={this.visiblePrivacy}
          >
            <Space wrap>
              <img alt="pinframes" src="../agreement_icon.png" />
              {strings.privacy_policy}
            </Space>
          </Button>
          <Button
            type="link"
            style={{ color: "black", paddingLeft: 0 }}
            onClick={this.visibleAgreement}
          >
            <Space wrap>
              <img alt="pinframes" src="../agreement_icon.png" />
              {strings.user_agreement}
            </Space>
          </Button>
          <Button type="link" style={{ color: "black", paddingLeft: 0 }}>
            <Space wrap>
              <img alt="pinframes" src="../livechat_icon.png" />
              {strings.live_chat}
            </Space>
          </Button>
        </Space>
      </Drawer>
    );
  }
}
