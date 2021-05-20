import { Row, Col, Button, Space, Layout } from "antd";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import strings from "../helpers/Localization";
import { Link } from "react-router-dom";
import FileViewer from "react-file-viewer";
const { Header, Content, Footer } = Layout;

function BlogDetail(props) {
  let { id } = useParams();
  const file = "../blogs/" + id + ".docx";
  const type = "docx";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <Row>
          <Col flex="auto">
            <Link to="/blogs">
              <img
                alt="pinframes"
                src="../logo.png"
                className="logo"
                width={183}
              />
            </Link>
          </Col>
        </Row>
      </Header>
      <Content style={{ paddingTop: 184 }}>
        <FileViewer fileType={type} filePath={file} />
      </Content>
      <Footer>
        <Row style={{ padding: "84px 90px" }}>
          <Col flex="auto">
            <Space direction="vertical" wrap>
              <Space wrap>
                <Col>
                  <Space direction="vertical" wrap>
                    <Button type="link">{strings.contact.toUpperCase()}</Button>
                    <Button className="footerlink" type="link">
                      {strings.sss}
                    </Button>
                    <Button className="footerlink" type="link">
                      {strings.privacy_policy}
                    </Button>
                    <Button className="footerlink" type="link">
                      {strings.user_agreement}
                    </Button>
                  </Space>
                </Col>
                <Col>
                  <Space direction="vertical" wrap>
                    <Button type="link">
                      {strings.follow_us.toUpperCase()}
                    </Button>
                    <Button className="footerlink" type="link">
                      Instagram
                    </Button>
                    <Button className="footerlink" type="link">
                      Twitter
                    </Button>
                    <Button className="footerlink" type="link">
                      Facebook
                    </Button>
                  </Space>
                </Col>
              </Space>
              <Space wrap>
                <Space wrap>
                  <div className="emptycircle"></div>
                  <a className="circlelink">
                    {strings.distancesellingcontract}
                  </a>
                </Space>
                <Space wrap>
                  <div className="circle"></div>
                  <a className="circlelink">{strings.kvkk}</a>
                </Space>
                <Space wrap>
                  <div className="circle"></div>
                  <Link to="/blogs" className="circlelink">
                    {strings.blog}
                  </Link>
                </Space>
              </Space>
            </Space>
          </Col>
          <Col flex="184px" style={{ textAlign: "right" }}>
            <img alt="pinframes" src="../logo.png" width={183} />
            <Button
              type="link"
              style={{
                paddingRight: 0,
                marginTop: 24,
                color: "black",
                lineHeight: "21px",
              }}
            >
              <Space wrap>
                <img alt="pinframes" src="../livechat_icon.png" />
                {strings.live_chat}
              </Space>
            </Button>
          </Col>
        </Row>
      </Footer>
    </>
  );
}

export default BlogDetail;
