import { Modal, Form, Input, Space, Button } from "antd";
import React from "react";
import strings from "../../helpers/Localization";

function DeliveryModal(props) {
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
        <Form>
          <Space wrap>
            <Form.Item name="name" style={{ width: 194 }}>
              <Input placeholder={strings.name} />
            </Form.Item>
            <Form.Item name="surname" style={{ width: 194 }}>
              <Input placeholder={strings.surname} />
            </Form.Item>
          </Space>

          <Space wrap>
            <Form.Item name="tel" style={{ width: 194 }}>
              <Input placeholder="Telefon Numarası" />
            </Form.Item>
            <Form.Item name="email" style={{ width: 194 }}>
              <Input placeholder={strings.email} />
            </Form.Item>
          </Space>
          <Form.Item name="address_title">
            <Input placeholder={strings.address_title} />
          </Form.Item>
          <Form.Item name="city">
            <Input placeholder={strings.city} />
          </Form.Item>
          <Form.Item name="town">
            <Input placeholder={strings.town} />
          </Form.Item>
          <Form.Item name="address">
            <Input.TextArea placeholder={strings.address} />
          </Form.Item>
          <Button disabled style={{ width: 124, height: 44 }}>
            {strings.save}
          </Button>
        </Form>
      </div>
    </Modal>
  );
}

export default DeliveryModal;
