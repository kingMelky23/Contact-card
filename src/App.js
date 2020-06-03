import React, {Component} from 'react';
import ContactCard from "./ContactCard"
import './App.css';

class App extends Component{
  render(){
    return(
    <>
      <ContactCard  name="eric" mobile="234554356" work="678543267" email="john@gmail.com"/>
    </>
    ); 
  }
}
export default App;
