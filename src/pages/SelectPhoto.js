import { Layout, Row, Col, Space, Button, Typography, Modal } from "antd";
import { MenuOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import React, { Component } from "react";
import strings from "../helpers/Localization";
import CustomButton from "../components/CustomButton";
import RightMenu from "../components/RightMenu";
import ModalContent from "../components/ModalContent";
import { Link } from "react-router-dom";
import PictureCard from "../components/cards/PictureCard";
import AddCard from "../components/cards/AddCard";
import EditModal from "../components/EditModal";
import PaymentMenu from "../components/PaymentMenu";
import PaymentSuccess from "../components/payment_results/PaymentSuccess";
const { Header, Content, Sider } = Layout;
const { Title } = Typography;
export default class SelectPhoto extends Component {
  state = {
    visible: false,
    selectedtype: 0, //0:Classic, 1:Pad
    isfirstload: true,
    sssModalVisible: false,
    privacyModalVisible: false,
    agreementModalVisible: false,
    isClickChoice: false,
    cropModalVisible: false,
    scaleValue: 0,
    paymentVisible: false,
    paymentResult: 0, // 0:Default , -1:Fail , 1:Success
  };
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  showClickDetail = () => {
    console.log("girdi");
    this.setState({ isClickChoice: true });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  //TODO: Just a example
  setFail = () => {
    this.setState({ paymentResult: -1 });
  };

  onClosePayment = () => {
    this.setState({
      paymentVisible: false,
    });
  };

  uploadPhoto = () => {
    this.setState({ isfirstload: false });
  };

  switchType = (type) => {
    this.setState({ selectedtype: type });
  };

  modalToggle = (process, state) => {
    if (process === 1) {
      this.setState({ sssModalVisible: state });
    } else if (process === 2) {
      this.setState({ privacyModalVisible: state });
    } else if (process === 3) {
      this.setState({ agreementModalVisible: state });
    }
  };

  hideCropModal = () => {
    this.setState({ cropModalVisible: false });
  };

  showCropModal = () => {
    this.setState({ cropModalVisible: true });
  };

  deleteEvent = () => {
    Modal.confirm({
      title: strings.warning,
      icon: <ExclamationCircleOutlined />,
      content: strings.delete_content,
      okText: strings.ok_text,
      cancelText: strings.cancel_text,
      centered: true,
      maskClosable: true,
    });
  };

  onChange = (value) => {
    console.log("onChange: ", value);
  };

  onAfterChange = (value) => {
    console.log("onAfterChange: ", value);
  };

  apply = (scalevalue) => {
    console.log(scalevalue);
    this.hideCropModal();
    //TODO: Crop events
  };

  render() {
    return (
      <>
        <EditModal
          cropModalVisible={this.state.cropModalVisible}
          hideCropModal={this.hideCropModal}
          applyEvent={this.apply}
        />
        <ModalContent
          title={strings.sss}
          isModalVisible={this.state.sssModalVisible}
          wellDone={() => this.modalToggle(1, false)}
          content={<p>{strings.sss_content}</p>}
        />
        <ModalContent
          title={strings.privacy_policy}
          isModalVisible={this.state.privacyModalVisible}
          wellDone={() => this.modalToggle(2, false)}
          content={<p>{strings.privacy_content}</p>}
        />
        <ModalContent
          title={strings.user_agreement}
          isModalVisible={this.state.agreementModalVisible}
          wellDone={() => this.modalToggle(3, false)}
          content={<p>3</p>}
        />
        <Header className="customheader">
          <Row>
            <Col flex="auto">
              <Link to="/">
                <img alt="pinframes" src="../logo.png" width={183} />
              </Link>
            </Col>
            <Col flex="52px">
              <Button type="link" onClick={this.showDrawer}>
                <MenuOutlined style={{ fontSize: "20px", color: "#000" }} />
              </Button>
            </Col>
          </Row>
        </Header>

        <Layout className="layout">
          <Content
            style={{
              padding: "54px 54px 54px 90px",
              overflowY: "auto",
            }}
          >
            {this.state.isfirstload ? (
              this.state.paymentResult !== 1 ? (
                <>
                  <Row
                    justify="center"
                    align="middle"
                    style={{ height: "100%" }}
                  >
                    <Col
                      style={{
                        width: "fit-content",
                        textAlign: "center",
                        margin: "0 auto",
                      }}
                    >
                      <div style={{ fontSize: 24, marginBottom: 47 }}>
                        Lorem ipsum dior sit amet
                      </div>
                      <Button
                        className="actionbutton"
                        style={{ marginBottom: 25 }}
                        type="primary"
                        onClick={this.uploadPhoto}
                      >
                        {strings.load_photo}
                      </Button>
                      <div style={{ marginBottom: 20 }}>
                        <span>yada</span>
                      </div>
                      <Space wrap>
                        <CustomButton
                          imgSrc="../instagram.png"
                          title={strings.load_with_instagram}
                        />
                        <CustomButton
                          imgSrc="../facebook.png"
                          title={strings.load_with_facebook}
                        />
                      </Space>
                    </Col>
                  </Row>
                </>
              ) : (
                <PaymentSuccess />
              )
            ) : (
              <>
                <Row gutter={[0, 64]} style={{ maxWidth: 828 }}>
                  <PictureCard
                    onCropEvent={this.showCropModal}
                    onDeleteEvent={this.deleteEvent}
                  />
                  <AddCard
                    isClickChoice={this.state.isClickChoice}
                    clickDetail={this.showClickDetail}
                  />
                </Row>
              </>
            )}
          </Content>
          {this.state.paymentResult === 0 || this.state.paymentResult === -1 ? (
            <>
              <Sider width={468} style={{ padding: "54px 90px 54px 54px" }}>
                <Title style={{ fontSize: 16, marginBottom: 16 }}>
                  {strings.tile_model}
                </Title>
                <Space direction="vertical" wrap style={{ marginBottom: 16 }}>
                  <Row
                    onClick={() => this.switchType(0)}
                    className={
                      this.state.selectedtype === 0
                        ? "tile selectedtile"
                        : "tile"
                    }
                    style={{ padding: "0px 16px 24px 16px" }}
                  >
                    <Space wrap>
                      <img
                        alt="pinframes"
                        src="../TileClassic.png"
                        style={{ width: "64px", marginTop: 14 }}
                      />
                      {strings.classic}
                    </Space>
                  </Row>
                  <Row
                    onClick={() => this.switchType(1)}
                    className={
                      this.state.selectedtype === 1
                        ? "tile selectedtile"
                        : "tile"
                    }
                    style={{ padding: "0px 16px 24px 16px" }}
                  >
                    <Space wrap>
                      <img
                        alt="pinframes"
                        src="../TilePad.png"
                        style={{ width: "64px", marginTop: 14 }}
                      />
                      {strings.pad}
                    </Space>
                  </Row>
                </Space>
                <Button
                  disabled={this.state.isfirstload ? true : false}
                  type="primary"
                  className="actionbutton"
                  onClick={() => {
                    this.setState({ paymentVisible: true });
                  }}
                >
                  {strings.continue}
                </Button>
              </Sider>
            </>
          ) : (
            <></>
          )}
          {/* Sağ Menu Component */}
          <RightMenu
            onClose={this.onClose}
            onVisibleItem={(v, s) => this.modalToggle(v, s)}
            visible={this.state.visible}
          />
          {/* Ödeme Menu Component */}
          <PaymentMenu
            visible={this.state.paymentVisible}
            onClose={this.onClosePayment}
            paymentResult={this.state.paymentResult}
            completeEvent={this.setFail}
          />
        </Layout>
      </>
    );
  }
}
