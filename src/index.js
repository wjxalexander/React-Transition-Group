import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import "./styles.css";

class App extends React.Component {
  state = {
    boxVisible: true,
    modalVisible: false
  };

  setVisible = value => {
    this.setState({
      boxVisible: value
    });
  };

  render() {
    return (
      <div>
        <div className="box-container">
          <CSSTransition
            in={this.state.boxVisible}
            unmountOnExit
            timeout={400}
            classNames="slide"
          >
            <div className="box" />
          </CSSTransition>
        </div>
        <div className="btn-container">
          <button onClick={() => this.setVisible(!this.state.boxVisible)}>
            Toggle animation
          </button>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
