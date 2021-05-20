import { Row, Col, Typography } from "antd";
import React from "react";
const { Text } = Typography;
function PaymentInfo(props) {
  return (
    <>
      <Row justify="space-between" style={{ marginBottom: 12 }}>
        <Col>
          <span>4 Çerçeve</span>
        </Col>
        <Col>
          {!props.promoAdded ? (
            <Text>80.00 TL</Text>
          ) : (
            <Text delete>80.00 TL</Text>
          )}
        </Col>
      </Row>
      {props.promoAdded ? (
        <Row justify="space-between" style={{ marginBottom: 12 }}>
          <Col>
            <span></span>
          </Col>
          <Col>
            <span>60.00 TL</span>
          </Col>
        </Row>
      ) : (
        <></>
      )}
      <Row justify="space-between" style={{ marginBottom: 12 }}>
        <Col>
          <span>Kargo Ücreti</span>
        </Col>
        <Col>
          <span>BEDAVA</span>
        </Col>
      </Row>
      <Row justify="space-between" style={{ marginBottom: 17 }}>
        <Col>
          <span>Toplam</span>
        </Col>
        <Col>
          <span>80.00 TL</span>
        </Col>
      </Row>
    </>
  );
}

export default PaymentInfo;
