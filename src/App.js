import React, { Component } from 'react';
import './App.css';
import NavBar from './components/nav';
class App extends Component{
  render() {
    return (
      <div className="App">
        <NavBar/>
       <h1>hello world</h1>
      </div>
    )
  }
}

export default App;
