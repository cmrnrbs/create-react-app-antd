import { Modal } from "antd";
import React, { useEffect } from "react";
import { PINFRAMES_ROOT, privacyPolicy } from "../helpers/Constant";
function ModalContent(props) {
  useEffect(() => {
    if (props.isModalVisible) {
      fetch(PINFRAMES_ROOT + privacyPolicy).then((response) =>
        console.log(response.body)
      );
    }
  }, []);

  return (
    <Modal
      width={590}
      title={props.title}
      visible={props.isModalVisible}
      onOk={props.wellDone}
      onCancel={props.wellDone}
      okButtonProps={{ hidden: true }}
      cancelButtonProps={{ hidden: true }}
      centered={true}
      maskClosable={true}
    >
      {props.content}
    </Modal>
  );
}

export default ModalContent;
