import { Component } from "react";
// import Counter from "./components/Counter";
import NameForm from "./components/NameForm";
import ContactForm from "./components/ContactForm";
// import LoginForm from "./components/testCurying";
// import UncontrolledForm from "./components/uncontrolledForm";
// import TodoApp from "./components/ToDoApp";

// import css from "../src/App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    console.info("[App] Konstruktor");
  }

  componentDidMount() {
    console.info("[App] Montowanie");
  }

  state = {
    errorApenared: true,
    error: undefined,
    formID: 1,
  };

  changeForm = (newId) => () => {
    this.setState({ formId: newId });
  };

  componentDidCatch(error,info) {
    if (error) {
      console.info(`Złapano błąd (${error})`);
    }
  }

  render() {
    return (
      <>
        <button onClick={this.changeForm(1)}>Formularz 1</button>
        <button onClick={this.changeForm(2)}>Formularz 2</button>
        {this.state.formID === 1 ? <NameForm /> : <ContactForm />}
      </>
    );
  }
}

//     return (
//       // <div className="container" >
//       <div className={css.container}>
//         <p className={css.paragraf}>Hello</p>
//         <LoginForm />
//         <UncontrolledForm />
//         <Counter />
//         <TodoApp />
//         <cyklZycia/>
//       </div>
//     );
//   }
// }
