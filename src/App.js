import React, { Component } from 'react';
import './App.css';
import NavBar from './components/nav';
import ProductList from './components/productList';
import {Switch,Route} from 'react-router-dom'
class App extends Component{
  render() {
    return (
      <div className="App">
        <Route patch='/' component={NavBar}/>
        <Switch>
          <Route exact path='/' component={ProductList}/>
        </Switch>
       <h1>hello world</h1>
      </div>
    )
  }
}

export default App;
