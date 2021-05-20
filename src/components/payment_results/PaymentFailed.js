import { Row, Space, Col } from "antd";
import React from "react";
import strings from "../../helpers/Localization";
import FailedIcon from "../icons/FailedIcon";
function PaymentFailed(props) {
  return (
    <Row justify="center" align="middle" className="paymentfail">
      <Col
        style={{
          width: "fit-content",
          textAlign: "center",
          margin: "0 auto",
        }}
      >
        <Space direction="vertical" wrap>
          <FailedIcon />
          <div style={{ width: 271, color: "#E02020", fontSize: 14 }}>
            {strings.payment_failed}
          </div>
        </Space>
      </Col>
    </Row>
  );
}

export default PaymentFailed;
