import { nanoid } from "nanoid";
import { Component } from "react";

const Gender = {
  MALE: "male",
  FEMALE: "female",
};

const INITIAL_STATE = {
  login: "",
  email: "",
  password: "",
  isActive: true,
  gender: null,
  age: 0,
};

class SignUpForm extends Component {
  state = {
    ...INITIAL_STATE,
  };

  handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    console.log({ name, value, type, checked });
    this.setState({
      [name]: type === "checkbox" ? checked : value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({
      ...INITIAL_STATE,
    });
  };

  render() {
    const { login, email, password, gender } = this.state;

    const loginInputId = nanoid();
    const emailInputId = nanoid();

    console.log({ login });
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={loginInputId}>Login</label>
        <input
          id={loginInputId}
          name="login"
          type="text"
          value={login}
          placeholder="enter login"
          onChange={this.handleChange}
        />
        <label htmlFor={emailInputId}>email</label>
        <input
          id={emailInputId}
          name="email"
          type="email"
          value={email}
          placeholder="enter email"
          onChange={this.handleChange}
        />
        <label htmlFor="myPassword">password</label>
        <input
          id="myPassword"
          name="password"
          type="password"
          value={password}
          placeholder="enter password"
          onChange={this.handleChange}
        />
        <label>
          Is user active?
          <input
            name="isActive"
            type="checkbox"
            checked={this.state.isActive}
            onChange={this.handleChange}
          />
        </label>
        <section>
          <h5>choose your gender</h5>
          <label>
            Male
            <input
              value={Gender.MALE}
              checked={gender === Gender.MALE}
              type="radio"
              name="gender"
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="gender_female">
            Female
            <input
              value={Gender.FEMALE}
              checked={gender === Gender.FEMALE}
              id="gender_female"
              type="radio"
              name="gender"
              onChange={this.handleChange}
            />
          </label>
        </section>

        {/* <label>
                Choose your age
                <select name="age" value={age} onChange={this.handleChange}>
                    <option value="18-25">18-25</option>
                    <option value="26-40">26-40</option>
                    <option value="40">40</option>
                </select>
            </label> */}
        <button type="submit">Sign up as {login} </button>
      </form>
    );
  }
}

export default SignUpForm;
