import React, { useEffect, useState } from "react";
import { Row, Col, Layout, Button, Space, Typography, Modal } from "antd";
import HomeCardInfo from "../components/HomeCardInfo";
import CarouselCard from "../components/cards/CarouselCard";
import Slider from "react-slick";
import strings from "../helpers/Localization";
import { Link } from "react-router-dom";
const { Header, Content, Footer } = Layout;
const { Title } = Typography;
function Home(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  var carouselItems = [];
  for (let i = 0; i < 16; i++) {
    carouselItems.push(i);
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Modal
        width={590}
        title={strings.sss}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ hidden: true }}
        cancelButtonProps={{ hidden: true }}
        centered={true}
        maskClosable={true}
      >
        <span>{strings.sss_content}</span>
      </Modal>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <Row>
          <Col flex="auto">
            <img
              alt="pinframes"
              src="../logo.png"
              className="logo"
              width={183}
            />
          </Col>
          <Col flex="200px">
            <Space wrap>
              <Button type="link" block onClick={showModal}>
                SSS
              </Button>
              <Link to="/selectphoto">
                <Button style={{ height: 40, width: 124 }}>
                  {strings.discover}
                </Button>
              </Link>
            </Space>
          </Col>
        </Row>
      </Header>
      <Content style={{ paddingTop: 184 }}>
        <Row style={{ marginBottom: 94, padding: "0 90px" }}>
          <Col flex="auto">
            <Title style={{ fontSize: 32 }}>{strings.intro_title}</Title>
            <Space wrap>
              <Title style={{ fontSize: 32 }}>{strings.intro_subtitle}</Title>
              <img
                alt="pinframes"
                style={{ marginBottom: 10 }}
                src="../heart.png"
              />
            </Space>

            <Title level={4} style={{ marginBottom: 24 }}>
              {strings.intro2_title}
              <br />
              {strings.intro2_subtitle}
            </Title>
            <Link to="/selectphoto">
              <Button
                style={{ width: 320, height: 50, fontSize: 20 }}
                type="primary"
              >
                {strings.discover}
              </Button>
            </Link>
          </Col>
          <Col flex="640px">
            <img
              alt="pinframes"
              style={{ maxWidth: "100%" }}
              src="../video.png"
            />
          </Col>
        </Row>

        <Row justify="center" style={{ marginBottom: 96 }}>
          <Col span={8} style={{ textAlign: "center" }}>
            <HomeCardInfo
              imgSrc="../civi.png"
              title={strings.infocard1_title}
              subtitle={strings.infocard1_subtitle}
            />
          </Col>
          <Col span={8} style={{ textAlign: "center" }}>
            <HomeCardInfo
              imgSrc="../shipping.png"
              title={strings.infocard2_title}
              subtitle={strings.infocard2_subtitle}
            />
          </Col>
          <Col span={8} style={{ textAlign: "center" }}>
            <HomeCardInfo
              imgSrc="../frame.png"
              title={strings.infocard3_title}
              subtitle={strings.infocard3_subtitle}
            />
          </Col>
        </Row>

        <div
          style={{
            height: 580,
            background: "#F9F9F9",
            textAlign: "center",
          }}
        >
          <Title style={{ padding: "35px 0", fontSize: 24 }}>
            {strings.happy_customer}
          </Title>
          <Row justify="center">
            <Col flex="1168px">
              <Slider {...settings} style={{ width: "1141px" }}>
                {carouselItems.map((item, index) => {
                  return (
                    <div key={index}>
                      <CarouselCard
                        imgSrc="../card.png"
                        title="Carolinemendoza"
                        subtitle="I can’t wait to order more and cover my wall in them!"
                      />
                    </div>
                  );
                })}
              </Slider>
            </Col>
          </Row>
        </div>
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

export default Home;
