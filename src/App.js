import React, {Component} from 'react';
import ContactCard from "./ContactCard"
import './App.css';

class App extends Component{
  render(){
    return(
    <>
      <ContactCard  name="eric" mobile="234554356" work="678543267" email="eric@gmail.com"/>

      <ContactCard  name="derick" mobile="269434567" work="678543267" email="eric@gmail.com"/>

      <ContactCard  name="gerric" mobile="45848657" work="678543267" email="eric@gmail.com"/>
    </>
    ); 
  }
}
export default App;
