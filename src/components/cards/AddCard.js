import { Col, Row, Space, Divider } from "antd";
import React from "react";
import strings from "../../helpers/Localization";
import AddIcon from "./../icons/AddIcon";

function AddCard(props) {
  return (
    <Col span={8}>
      <Row
        style={{
          width: 240,
          height: 240,
          borderRadius: 8,
          background: "white",
          boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.1)",
        }}
        className="area"
        onClick={props.clickDetail}
        justify="center"
        align="middle"
      >
        <Col
          style={{
            textAlign: !props.isClickChoice ? "center" : "left",
            width: 240,
          }}
        >
          {!props.isClickChoice ? (
            <>
              {" "}
              <AddIcon size="24" fill="#FF6600" />
              <div style={{ color: "#FF6600", fontSize: 16 }}>
                {" "}
                {strings.load_photo}
              </div>
            </>
          ) : (
            <>
              <Space wrap style={{ paddingLeft: 24 }}>
                <div style={{ width: 16, height: 24, paddingTop: 4 }}>
                  <AddIcon size="22" fill="#FF6600" />
                </div>
                <div style={{ color: "#FF6600", fontSize: 16 }}>
                  {" "}
                  {strings.load_photo}
                </div>
              </Space>
              <Divider type="horizontal" />
              <Space wrap style={{ paddingLeft: 24 }}>
                <img alt="pinframes" src="../instagram.png" />
                <div style={{ fontSize: 16, color: "black" }}>
                  {" "}
                  {strings.load_with_instagram}
                </div>
              </Space>
              <Divider type="horizontal" />
              <Space wrap style={{ paddingLeft: 24 }}>
                <img alt="pinframes" src="../facebook.png" />
                <div style={{ fontSize: 16, color: "black" }}>
                  {" "}
                  {strings.load_with_facebook}
                </div>
              </Space>
            </>
          )}
        </Col>
      </Row>
    </Col>
  );
}

export default AddCard;
