import { Row, Col, Button, Space, Layout } from "antd";
import React, { useEffect } from "react";
import strings from "../helpers/Localization";
import { Link } from "react-router-dom";
import BlogCard from "../components/cards/BlogCard";
const { Header, Content, Footer } = Layout;

function Blog(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <Row>
          <Col flex="auto">
            <Link to="/">
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
        <Row gutter={[32, 32]} justify="center" style={{ padding: "0 90px" }}>
          <BlogCard
            imgSrc="../card.png"
            blogid="1"
            title="PinFrames Çerçeveleri ile Sanat Eserleri"
            subtitle="I can’t wait to order more and cover my wall in them!"
          />

          <BlogCard
            imgSrc="../card.png"
            blogid="2"
            title="PinFrames Duvar Dekorasyonu"
            subtitle="I can’t wait to order more and cover my wall in them!"
          />

          <BlogCard
            imgSrc="../card.png"
            blogid="3"
            title="Kare Çerçeveler için Fotoğraf Nasıl Çekilir?"
            subtitle="I can’t wait to order more and cover my wall in them!"
          />

          <BlogCard
            imgSrc="../card.png"
            blogid="4"
            title="Minimalist Duvarların Adresi PinFrames"
            subtitle="I can’t wait to order more and cover my wall in them!"
          />

          <BlogCard
            imgSrc="../card.png"
            blogid="5"
            title="PinFrames Çerçevelerinin Kullanım Şekli ve Alanları"
            subtitle="Sevdiklerimizle güldüğümüz eğlendiğimiz anlar, bebeğimizin ilk adımlarında, ilk limonla tanıştığı anlar, okula.."
          />
        </Row>
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
                  <a className="circlelink">{strings.blog}</a>
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

export default Blog;
