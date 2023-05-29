import { Component } from "react";
// import css from "./LoginForm.modules.css";

class LoginForm extends Component {
  handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const login = form.elements.login.value;
    const password = form.elements.password.value;

    // eslint-disable-next-line react/prop-types
    this.props.onSubmit({ login, password });
    form.reset();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="login" placeholder=" wpisz login" />
        <input type="password" name="password" placeholder=" wpisz hasło" />
        <button type="submit">Login</button>
      </form>
    );
  }
}

export default LoginForm;
