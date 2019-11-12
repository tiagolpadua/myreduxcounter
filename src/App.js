import React from "react";
import "./store.js";

class App extends React.Component {
  state = { counter: 0 };

  componentDidMount() {
    window.store.subscribe(() => {
      console.log("event...");
      this.setState({
        counter: window.store.getState()
      });
    });
  }

  render() {
    return (
      <main>
        <h1>Meu Redux Counter: {this.state.counter}</h1>
        <button onClick={() => window.store.dispatch({ type: "INC" })}>
          Incrementar
        </button>
        <button onClick={() => window.store.dispatch({ type: "DEC" })}>
          Decrementar
        </button>
      </main>
    );
  }
}

export default App;
