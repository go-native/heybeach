import React, { Component, Fragment } from "react";
import "./TextInput.css";

class TextInput extends Component {
  handleChange = event => {
    const { onChange } = this.props;
    onChange(event.target.value);
  };
  render() {
    const { label, value, password, hasError } = this.props;
    const inputType = password ? "password" : "text";
    return (
      <Fragment>
        <label className="form-label">{label}</label>
        <input
          type={inputType}
          className={!hasError ? "form-input" : "form-input form-input--error"}
          onChange={this.handleChange}
          value={value}
          maxLength={30}
        />
      </Fragment>
    );
  }
}

export default TextInput;
