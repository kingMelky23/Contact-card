import React, {Component} from 'react';
import './App.css';

class HelloWord extends Component{
  render(){
    return <h1>Hello {1+5} </h1>;
  }
    
}

class App extends Component{
  render(){
    return <HelloWord/>
  }
}
export default App;
