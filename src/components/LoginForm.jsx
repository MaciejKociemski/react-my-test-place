import { Component } from "react";
import css from './LoginForm.modules.css'

class LoginForm extends Component {
  handleSubmit = (event) => {
    event.preventDefault();

    console.log({ event });

    console.log("event", event);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
            <input type="text" name="login" placeholder="wpisz login" />
        <input type="password" name="password" placeholder="wpisz hasło" />
        <button type="submit">Login</button>
      </form>
    );
  }
}

export default LoginForm;
