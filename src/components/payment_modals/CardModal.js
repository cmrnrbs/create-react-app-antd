import { Modal, Form, Input, Space, Button, Select } from "antd";
import React from "react";
import strings from "../../helpers/Localization";
const { Option } = Select;
function CardModal(props) {
  var mountArray = [];
  for (let i = 1; i < 13; i++) {
    mountArray.push({ value: i, text: i < 10 ? "0" + i : i });
  }
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
          <Form.Item name="card_user_name">
            <Input placeholder={strings.card_user_name} />
          </Form.Item>
          <Form.Item name="cardnumber">
            <Input placeholder={strings.cardnumber} />
          </Form.Item>

          <Space wrap>
            <Form.Item
              name="mounth"
              style={{ width: 125 }}
              initialValue="mounth"
            >
              <Select dropdownStyle={{ borderRadius: 4 }}>
                <Option value="mounth">{strings.mounth}</Option>
                {mountArray.map((item) => {
                  return (
                    <Option key={item.value} value={item.value}>
                      {item.text}
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>
            <Form.Item name="year" style={{ width: 125 }} initialValue="year">
              <Select dropdownStyle={{ borderRadius: 4 }}>
                <Option value="year">{strings.year}</Option>
              </Select>
            </Form.Item>
            <Form.Item name="cvv" style={{ width: 125 }}>
              <Input type="number" placeholder="CVV" />
            </Form.Item>
          </Space>

          <Button disabled style={{ width: 124, height: 44 }}>
            {strings.save}
          </Button>
        </Form>
      </div>
    </Modal>
  );
}

export default CardModal;
