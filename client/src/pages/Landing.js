import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"



export class Landing extends Component {

  render() {
    const styles = {
      button: {
        marginLeft: 5
      }
    }
    return (
      <div>
        <header>
          {/* NAVBAR */}
          <Navbar expand="lg" bg="transparent" variant="dark">
            <Navbar.Brand href="#home">Team 10</Navbar.Brand>
              <Nav className="mr-auto">
              </Nav>
              
                <Link to="/login" >
                  <Button variant="outline-primary" className="button-white" style={styles.button}>Login</Button>
                </Link>
                <Link to="/signup" >
                  <Button variant="outline-primary" className="button-white" style={styles.button}>Sign Up</Button>
                </Link>
              
          </Navbar>

          {/* HEADER INFO */}
          <div class="container heading">
            <h1>Budget Approval</h1>
            <h4> " Take back control of your money and master your budget "</h4>
            <br/>
            <br/>
            

          </div>
        </header>
        <Container className="landing-page-info">
          <Row>
            <Col xs={12} md={4}>
              <div className="ladingpage-card">
                <i className="material-icons">bar_chart</i>
                <h4 className="center"> Budgetplans</h4>
                {/* <p>Budget Master sets up your budgets by category to make them easy to track.</p> */}
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="ladingpage-card">
                <i className="material-icons">attach_money</i>
                <h4 className="center">Add Budget</h4>
                {/* <p>With Budget Master you can add any Transactions and we will filter them into your budget</p> */}
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="ladingpage-card">
                <i className="material-icons">phonelink</i>
                <h4 className="center">Add Transaction</h4>
                {/* <p>Budget Master is fully Responsive so it will work on any of your smartphones, tablets, laptops, or desktops.</p> */}
              </div>
            </Col>
          </Row>
        </Container>
      </div >
    )


  }

}

export default Landing
