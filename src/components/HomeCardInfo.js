import { Col, Typography } from "antd";
import React from "react";
const { Title } = Typography;
function HomeCardInfo(props) {
  return (
    <Col style={{ maxWidth: 240, margin: "0 auto" }}>
      <img alt="pinframes" src={props.imgSrc} style={{ marginBottom: 18 }} />
      <Title style={{ fontSize: 18 }}>{props.title}</Title>
      <Title style={{ fontSize: 16 }}>{props.subtitle}</Title>
    </Col>
  );
}

export default HomeCardInfo;
