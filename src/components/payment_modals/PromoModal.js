import { Modal, Form, Input, Button } from "antd";
import React, { useState } from "react";
import strings from "../../helpers/Localization";

function PromoModal(props) {
  const [form] = Form.useForm();
  const [promoisActive, setActive] = useState(false);
  const applyEvent = () => {
    props.applyPromoEvent(form);
  };

  const valueCheck = (e) => {
    if (e.length === 0) {
      setActive(false);
    } else {
      setActive(true);
    }
  };

  return (
    <Modal
      width={590}
      title={props.title}
      visible={props.visible}
      onOk={props.wellDone}
      onCancel={props.wellDone}
      okButtonProps={{ hidden: true }}
      cancelButtonProps={{ hidden: true }}
      centered={true}
      maskClosable={true}
    >
      <div style={{ width: 400, margin: "auto" }}>
        <Form form={form}>
          <Form.Item name="promocode">
            <Input
              onChange={(e) => valueCheck(e.target.value)}
              placeholder={strings.promo_placeholder}
            />
          </Form.Item>
          <Button
            type="primary"
            disabled={promoisActive ? false : true}
            style={{ width: 124, height: 44 }}
            onClick={applyEvent}
          >
            {strings.apply}
          </Button>
        </Form>
      </div>
    </Modal>
  );
}

export default PromoModal;
