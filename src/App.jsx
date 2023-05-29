import { Component } from "react";
import Counter from "./components/Counter";
import LoginForm from "./components/testCurying";
import UncontrolledForm from "./components/uncontrolledForm";
import css from "../src/App.css";
import TodoApp from "./components/ToDoApp";

export default class App extends Component {
  render() {
    console.log(css.container);
    console.log(css.paragraf);
    return (
      // <div className="container" >
      <div className={css.container}>
        <p className={css.paragraf}>Hello</p>
        <LoginForm />
        <UncontrolledForm />
        <Counter />
        <TodoApp />
      </div>
    );
  }
}
