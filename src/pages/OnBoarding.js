import React, { Component } from "react";
import { LeftOutlined, MenuOutlined } from "@ant-design/icons";
import MySelfDesktop from "../components/icons/MySelfDesktop";
import SomeOneElseDesktop from "../components/icons/SomeOneElseDesktop";
import PinFramesBox from "../components/icons/PinFramesBox";
import CardProduct from "../components/icons/CardProduct";
import { Button, Form, Input } from "antd";
import strings from "../helpers/Localization";
import RightMenu from "../components/RightMenu";
export default class OnBoarding extends Component {
  userLang = navigator.language || navigator.userLanguage;
  componentDidMount() {
    strings.setLanguage(this.userLang);
  }

  state = {
    currentStep: 1,
    stepcount: 4,
    visible: false,
    sssModalVisible: false,
    privacyModalVisible: false,
    agreementModalVisible: false,
    disabledname: true,
    disabledemail: true,
    yourname: "",
    ismyself: false,
  };

  checkName = (value) => {
    this.setState({ yourname: value });

    if (value.length === 0) {
      this.setState({ disabledname: true });
    } else {
      this.setState({ disabledname: false });
    }
  };

  checkEmail = (value) => {
    if (value.length === 0) {
      this.setState({ disabledemail: true });
    } else {
      this.setState({ disabledemail: false });
    }
  };

  pickPhotos = () => {
    //TODO: Cookie operations and navigate
    window.location.href = "/";
  };

  forMyself = () => {
    this.setState({ currentStep: 3, ismyself: true });
  };

  backToFirst = () => {
    if (this.state.currentStep == 1) {
      window.location.href = "/";
    } else {
      this.setState({ currentStep: 1 });
    }
  };

  nextStep = () => {
    this.setState({ currentStep: 3, ismyself: false });
  };

  forSomeOneElse = () => {
    this.setState({ currentStep: 2 });
  };

  finishStep = () => {
    this.setState({ currentStep: 4 });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  showRightMenu = () => {
    this.setState({
      visible: true,
    });
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

  validateMessages = {
    types: {
      email: "${label} " + strings.valid,
    },
  };

  render() {
    return (
      <>
        <div className="EmailCapturePage">
          <div>
            <div className="topbar">
              <div className="leftcomp">
                <div className="BackButton" onClick={this.backToFirst}>
                  <LeftOutlined style={{ fontSize: 20, color: "white" }} />
                </div>
              </div>
              <div className="title">
                <div id="onboarding_step">
                  {this.state.currentStep} / {this.state.stepcount}
                </div>
              </div>
              <div className="rightcomp" onClick={this.showRightMenu}>
                <MenuOutlined style={{ fontSize: 20, color: "white" }} />
              </div>
            </div>
            <div className="bottomcomp"></div>
          </div>
          <div className="content">
            <div className="bglayer">
              <div className="bgcircle"></div>
            </div>
            {this.state.currentStep == 1 ? (
              <div className="step1wrapper visible">
                <h2>{strings.whositfor}</h2>
                <div className="options">
                  <div className="option" onClick={this.forMyself}>
                    <MySelfDesktop />
                    <div>
                      <h3>{strings.formyself}</h3>
                      <p>{strings.decoratemywalls}</p>
                    </div>
                  </div>
                  <div className="option" onClick={this.forSomeOneElse}>
                    <SomeOneElseDesktop />
                    <div>
                      <h3>{strings.forsomeoneelse}</h3>
                      <p>{strings.buyinggift}</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
            {this.state.currentStep == 2 ? (
              <div className="step1wrapper visible">
                <h2>{strings.whattypegift}</h2>
                <div className="options">
                  <div className="option" onClick={this.nextStep}>
                    <PinFramesBox />
                    <div>
                      <h3>{strings.boxpinframes}</h3>
                      <p>{strings.willupload}</p>
                    </div>
                  </div>
                  <div className="option" onClick={this.nextStep}>
                    <CardProduct />
                    <div>
                      <h3>{strings.giftcard}</h3>
                      <p>{strings.choosetheirphotos}</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
            {this.state.currentStep == 3 ? (
              <Form className="visible">
                <div className="formlabel">
                  {this.state.ismyself
                    ? strings.knowyou
                    : strings.letscreategift}
                </div>
                <Form.Item name="username">
                  <Input
                    className="FormInput"
                    onChange={(e) => this.checkName(e.target.value)}
                    maxLength={20}
                    placeholder={strings.yourname}
                  />
                </Form.Item>
                <div className="bottombuttoncontainer">
                  <Button
                    type="primary"
                    disabled={this.state.disabledname}
                    onClick={this.finishStep}
                    style={{
                      width: "100%",
                      height: 66,
                      fontSize: 20,
                      fontWeight: 800,
                    }}
                    className="bottombuttoncontainer"
                  >
                    {strings.continue}
                  </Button>
                </div>
              </Form>
            ) : (
              <></>
            )}
            {this.state.currentStep == 4 ? (
              <Form
                className="visible"
                validateMessages={this.validateMessages}
              >
                <div className="formlabel emaillabel">
                  {strings.heythere}, {this.state.yourname}!{" "}
                  <span className="wave" role="img" aria-label="Wave">
                    👋
                  </span>
                </div>
                <Form.Item
                  name="email"
                  name={["user", "email"]}
                  rules={[{ type: "email" }]}
                >
                  <Input
                    onChange={(e) => this.checkEmail(e)}
                    style={{
                      padding: "20px 0 20px 20px",
                      transitionDelay: 0.1,
                    }}
                    maxLength={20}
                    placeholder={strings.youremail}
                  />
                </Form.Item>
                <Button
                  type="primary"
                  disabled={this.state.disabledemail}
                  onClick={this.pickPhotos}
                  style={{
                    width: "100%",
                    height: 66,
                    fontSize: 20,
                    fontWeight: 800,
                  }}
                  className="bottombuttoncontainer"
                >
                  {strings.pickphotos}
                </Button>
              </Form>
            ) : (
              <></>
            )}
          </div>
        </div>
        <RightMenu
          onClose={this.onClose}
          onVisibleItem={(v, s) => this.modalToggle(v, s)}
          visible={this.state.visible}
        />
      </>
    );
  }
}
