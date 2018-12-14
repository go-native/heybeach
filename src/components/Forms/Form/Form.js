import React, { Component } from "react";
import "./Form.css";

export class Form extends Component {
  handleSubmit = event => {
    const { onSubmit, isInvalid } = this.props;
    event.preventDefault();
    if (!isInvalid) {
      onSubmit();
    }
  };
  handleCancel = event => {
    const { onCancel } = this.props;
    event.preventDefault();
    onCancel();
  };
  renderErrors() {
    const { errors } = this.props;
    return Object.entries(errors)
      .map(err => {
        return { key: err[0], value: err[1].message };
      })
      .map(err => {
        return (
          <div key={err.value} className="font-errors__error">
            * {err.value}
          </div>
        );
      });
  }
  render() {
    const { children, isInvalid, confirmBtnTitle } = this.props;
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <ul className="form-wrapper">{children}</ul>
        <div className="form-errors">{this.renderErrors()}</div>
        <div className="form-actions">
          <button
            disabled={isInvalid}
            className="form-actions__btn  form-actions__btn--confirm"
            onClick={this.handleSubmit}
          >
            {confirmBtnTitle}
          </button>
          <button className="form-actions__btn" onClick={this.handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    );
  }
}

export const Field = ({ children }) => {
  return <li className="form__row">{children}</li>;
};
