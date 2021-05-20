import { Col, Row, Typography } from "antd";
import React from "react";
const { Title } = Typography;
function CarouselCard(props) {
  return (
    <div
      style={{
        width: 280,
        height: 384,
        boxShadow: "#0000001f 0px 0px 4px",
        borderRadius: 8,
        background: "white",
        padding: 20,
        margin: "4px  0px",
        textAlign: "center",
      }}
    >
      <Row justify="center">
        <Col>
          <img
            alt="pinframes"
            style={{ width: 240, height: 240, borderRadius: 4 }}
            src={props.imgSrc}
          />
          <Title style={{ fontSize: 14, marginTop: 22, marginBottom: 17 }}>
            {props.title}
          </Title>
          <Title style={{ fontSize: 14 }}>{props.subtitle}</Title>
        </Col>
      </Row>
    </div>
  );
}

export default CarouselCard;
