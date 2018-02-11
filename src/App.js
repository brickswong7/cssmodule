import React, { Component } from 'react';
import logo from './logo.svg';
import rootStyle from './App.css';
import styleModule from './cssmodule.css'

class App extends Component {
  render() {
    return (
      <div className={rootStyle.App}>
        <header className={rootStyle['App-header']}>
          <img src={logo} className={rootStyle['App-logo']} alt="logo" />
        </header>
        <div className={styleModule.module1}>cssmodule1</div>
      </div>
    );
  }
}

export default App;
