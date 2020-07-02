import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import logo from './images/asynamite.png';
import '../Components/CSS/dashboard.css';

class Dashboard extends React.Component {
  render() {
    return (
       <div className="flex-container" >
         <img className="asynamite" src={logo} alt="Home" />
         <button className="btnn" type="button">Log Out</button>
       </div>
    )
  }
}


export default Dashboard;
