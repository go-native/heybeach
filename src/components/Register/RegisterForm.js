import React, { Component } from "react";
import { Form, Field } from "../Forms/Form/Form";
import TextInput from "../Forms/TextInput/TextInput";

class RegisterForm extends Component {
  state = { email: "", password: "" };
  handleChange = name => value => {
    this.setState({ [name]: value });
  };
  handleSubmit = () => {
    const { onSubmit } = this.props;
    onSubmit(this.state);
  };
  isValid() {
    return (
      this.state.email.trim().length !== 0 &&
      this.state.password.trim().length !== 0
    );
  }
  render() {
    const { onCancel, errors } = this.props;
    return (
      <Form
        onSubmit={this.handleSubmit}
        onCancel={onCancel}
        isInvalid={!this.isValid()}
        errors={errors}
        confirmBtnTitle={"Register"}
      >
        <Field>
          <TextInput
            label={"E-mail"}
            onChange={this.handleChange("email")}
            value={this.state.email}
            hasError={errors["email"]}
          />
        </Field>
        <Field>
          <TextInput
            label={"Password"}
            onChange={this.handleChange("password")}
            password
            value={this.state.password}
            hasError={errors["password"]}
          />
        </Field>
      </Form>
    );
  }
}

export default RegisterForm;
