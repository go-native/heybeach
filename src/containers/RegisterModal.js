import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "../components/Modal/Modal";
import RegisterForm from "../components/Register/RegisterForm";
import { closeRegisterModal } from "../actions/common";
import { register } from "../actions/user";

class RegisterModal extends Component {
  render() {
    const { isOpen, onClose, onSubmit, errors } = this.props;
    return (
      <Modal
        isVisible={isOpen}
        onClose={onClose}
        onConfirm={this.handleSubmit}
        title={"Register"}
      >
        <RegisterForm onCancel={onClose} onSubmit={onSubmit} errors={errors} />
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  return {
    isOpen: state.common.isRegisterOpen,
    errors: state.user.registerErrors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClose: () => dispatch(closeRegisterModal()),
    onSubmit: formData => dispatch(register(formData))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterModal);
