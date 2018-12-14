import React, { Component } from "react";
import { connect } from "react-redux";
import LoginForm from "../components/Login/LoginForm";
import { closeLoginModal } from "../actions/common";
import { login } from "../actions/user";
import Modal from "../components/Modal/Modal";

class LoginModal extends Component {
  render() {
    const { isOpen, onClose, onSubmit, errors } = this.props;
    return (
      <Modal
        isVisible={isOpen}
        onClose={onClose}
        onConfirm={this.handleSubmit}
        title={"Login"}
      >
        <LoginForm onCancel={onClose} onSubmit={onSubmit} errors={errors} />
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  return {
    isOpen: state.common.isLoginOpen,
    errors: state.user.loginErrors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClose: () => dispatch(closeLoginModal()),
    onSubmit: formData => dispatch(login(formData))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginModal);
