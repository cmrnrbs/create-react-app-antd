import { Drawer, Space, Row, Col, Button, Divider, Checkbox } from "antd";
import React, { Component } from "react";
import strings from "../helpers/Localization";
import HomeIcon from "./icons/HomeIcon";
import CardIcon from "./icons/CardIcon";
import PromoIcon from "./icons/PromoIcon";
import PaymentInfo from "./PaymentInfo";
import DeliveryModal from "./payment_modals/DeliveryModal";
import CardModal from "./payment_modals/CardModal";
import PromoModal from "./payment_modals/PromoModal";
import PaymentFailed from "./payment_results/PaymentFailed";
export default class PaymentMenu extends Component {
  state = {
    isComplete: false,
    deliveryAdded: false,
    cardAdded: false,
    promoAdded: false,
    deliveryModalVisible: false,
    cardModalVisible: false,
    promoModalVisible: false,
    promoCode: null,
  };

  onChange = (e) => {
    this.setState({ isComplete: e.target.checked });
  };

  showDelivery = () => {
    this.setState({ deliveryModalVisible: true });
  };

  hideDelivery = () => {
    this.setState({ deliveryModalVisible: false });
  };

  showCard = () => {
    this.setState({ cardModalVisible: true });
  };

  hideCard = () => {
    this.setState({ cardModalVisible: false });
  };

  showPromo = () => {
    this.setState({ promoModalVisible: true });
  };

  hidePromo = () => {
    this.setState({ promoModalVisible: false });
  };

  applyPromoEvent = (formData) => {
    this.setState({
      promoAdded: true,
      promoModalVisible: false,
      promoCode: formData.getFieldValue().promocode,
    });
  };

  render() {
    return (
      <>
        <DeliveryModal
          visible={this.state.deliveryModalVisible}
          title={strings.add_delivery}
          wellDone={this.hideDelivery}
        />
        <CardModal
          visible={this.state.cardModalVisible}
          title={strings.add_card_info}
          wellDone={this.hideCard}
        />
        <PromoModal
          visible={this.state.promoModalVisible}
          title={strings.add_promo_code}
          wellDone={this.hidePromo}
          applyPromoEvent={this.applyPromoEvent}
        />
        <Drawer
          closeIcon={<></>}
          width={468}
          placement="right"
          closable={true}
          onClose={this.props.onClose}
          visible={this.props.visible}
          getContainer={false}
          style={{ position: "absolute" }}
        >
          <Row style={{ marginBottom: 22 }}>
            <Col flex="auto">
              <span style={{ fontSize: 20 }}>{strings.order_summary}</span>
            </Col>
            <Col flex="24px">
              <Button
                style={{ padding: 0 }}
                type="link"
                onClick={this.props.onClose}
              >
                <img alt="pinframes" src="../close.png" />
              </Button>
            </Col>
          </Row>
          <Space direction="vertical" wrap>
            <Button
              type="link"
              style={{ paddingLeft: 0 }}
              onClick={this.showDelivery}
            >
              <Space wrap style={{ marginBottom: 0 }}>
                <div
                  style={{
                    width: 16,
                    paddingTop: 4,
                    height: 22,
                  }}
                >
                  <HomeIcon fill="#F60" size="16" />
                </div>
                <div style={{ height: 22 }}>{strings.add_delivery}</div>
              </Space>
            </Button>

            <Button
              type="link"
              style={{ paddingLeft: 0 }}
              onClick={this.showCard}
            >
              <Space wrap>
                <div
                  style={{
                    width: 16,
                    paddingTop: 4,
                    height: 22,
                  }}
                >
                  <CardIcon fill="#F60" size="16" />
                </div>
                <div style={{ height: 22 }}>{strings.add_card}</div>
              </Space>
            </Button>

            <Button
              type="link"
              style={{ paddingLeft: 0 }}
              onClick={!this.state.promoAdded ? this.showPromo : null}
            >
              <Space wrap>
                <div
                  style={{
                    width: 16,
                    paddingTop: 4,
                    height: 22,
                  }}
                >
                  <PromoIcon fill="#F60" size="16" />
                </div>
                <div
                  style={{
                    height: 22,
                    color: this.state.promoAdded ? "#000" : "#F60",
                  }}
                >
                  {this.state.promoAdded
                    ? this.state.promoCode
                    : strings.add_promo_code}
                </div>
              </Space>
            </Button>
          </Space>

          <Divider />
          <PaymentInfo promoAdded={this.state.promoAdded} />

          <Space wrap align="start" style={{ marginBottom: 20 }}>
            <Checkbox onChange={this.onChange}></Checkbox>
            <div style={{ width: 296 }}>
              <a style={{ textDecoration: "underline" }}>
                Ön Bilgilendirme Formu
              </a>{" "}
              ve{" "}
              <a style={{ textDecoration: "underline" }}>
                Mesafeli Satış Sözleşmesi
              </a>
              ni onaylıyorum.
            </div>
          </Space>

          <Button
            className="actionbutton"
            onClick={this.props.completeEvent}
            type="primary"
            disabled={this.state.isComplete ? false : true}
          >
            {strings.order_complete}
          </Button>

          {this.props.paymentResult === -1 ? (
            <div style={{ marginTop: 16 }}>
              <PaymentFailed />
            </div>
          ) : (
            <></>
          )}
        </Drawer>
      </>
    );
  }
}
