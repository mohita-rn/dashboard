import React from 'react';
import Dashboard from './Components/Dashboard';
import User from './Components/user';
import Stats from './Components/stats';
import './App.css';
import { Container, Row, Col } from 'reactstrap';


class App extends React.Component {
  
  render() {
    return (
     <div className="App">
       <header className="header"><Dashboard /></header>
       
        
       
         
    
        
       
     </div> 
    )
  }
}


export default App;
