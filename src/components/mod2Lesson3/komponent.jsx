import React from "react";
import ReactDom from "react-dom";


class MyClassComponent extends Component {
  static defaultProps = {};
  static propTypes = {};
  render() {
    return <div>Class Component</div>;
  }
}

<button onClick={(event) => console.log(event)}>Click me!</button>;

export class Counter extends Component {
  static defaultProps = {
    Step: 1,
  };
  render() {
    const { step } = this.props;
    return (
      <div>
        <span>0</span>
            <button type="button">Increment by {step}</button>
            <button type="button">Decrement by {step}</button>
      </div>
    );
  }
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <Counter step={5} />
);

