import React, { Component } from 'react';
import logo from './logo.svg';
import rootStyle from './App.css';
import styleModule from './cssmodule.css';
import './lessmodules.less';
import './rem'

class App extends Component {
  render() {
    return (
      <div className={rootStyle.App}>
        <header className={rootStyle['App-header']}>
          <img src={logo} className={rootStyle['App-logo']} alt="logo" />
        </header>
        <div className={styleModule.module1}>cssmodule1</div>
        <button className={styleModule.button}> btn style </button>  
        <button className={styleModule.button1}> btn style 2</button> 
        <br />
        <button className={styleModule.button2}> btn style 3</button>  
        <br />
        <button className='button3'> btn style 777</button>  
      </div>
    );
  }
}

export default App;
