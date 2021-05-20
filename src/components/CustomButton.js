import { Row, Space } from "antd";
import React from "react";

function CustomButton(props) {
  return (
    <Row justify="center" className="custombutton">
      <Space wrap>
        <img alt="pinframes" src={props.imgSrc} />
        <span>{props.title}</span>
      </Space>
    </Row>
  );
}

export default CustomButton;
