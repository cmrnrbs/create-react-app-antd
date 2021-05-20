import { Space, Button, Col, Row } from "antd";
import React from "react";
import strings from "../../helpers/Localization";
import SuccessIcon from "../icons/SuccessIcon";
function PaymentSuccess(props) {
  return (
    <Row justify="center" align="middle" style={{ height: "100%" }}>
      <Col
        style={{
          width: "fit-content",
          textAlign: "center",
          margin: "0 auto",
        }}
      >
        <Space direction="vertical" wrap align="center">
          <SuccessIcon />
          <span style={{ fontSize: 22 }}>{strings.payment_success}</span>
          <div style={{ fontSize: 18, width: 312 }}>
            Aliquam libero odio, egestas nec gravida sit amet.
          </div>
          <Button style={{ width: 324, height: 40 }} type="default">
            {strings.suggest_friends}
          </Button>
        </Space>
      </Col>
    </Row>
  );
}

export default PaymentSuccess;
