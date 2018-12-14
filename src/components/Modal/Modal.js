import React, { Component } from "react";
import "./Modal.css";

class Modal extends Component {
  renderHeader() {
    return <div className="modal__header">{this.props.title}</div>;
  }
  renderBody() {
    return <div className="modal__body">{this.props.children}</div>;
  }
  onClose = () => {
    this.props.onClose();
  };
  renderContent() {
    return (
      <div className="backdrop">
        <div className="modal">
          {this.renderHeader()}
          {this.renderBody()}
        </div>
      </div>
    );
  }
  render() {
    let content = this.props.isVisible ? this.renderContent() : null;
    return content;
  }
}

export default Modal;
