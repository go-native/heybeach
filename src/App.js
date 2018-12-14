import React, { Component } from 'react';
import { Provider } from "react-redux";
import { store } from './store';
import './App.css';
import Main from './containers/Main';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <div className="app">
            <Main/>
          </div>
      </Provider>
    );
  }
}

export default App;
