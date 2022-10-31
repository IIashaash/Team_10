import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
import setAuthToken from "../utils/setAuthtoken";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";


export class SetupBudgets extends Component {
  state = {
    user: {},
    redirect: false
  };
  componentWillMount() {
    const token = localStorage.getItem("example-app");

    if (token) {
      setAuthToken(token);
    }

    axios
      .get("api/user")
      .then(response => {
        this.setState({
          user: response.data,
          various_department: response.data.budgets.various_department,
          transportation: response.data.budgets.transportation,
          staff_yelectricit: response.data.budgets.staff_electricity,
          solar_electricity: response.data.budgets.solar_electricity,
          rental_electricity: response.data.budgets.rental_electricity,
          insurance: response.data.budgets.insurance,
          mess: response.data.budgets. mess,
          hostel: response.data.budgets.hostel,
          sponsored_or_consultancy_account: response.data.budgets.sponsored_or_consultancy_account,
          scholorship: response.data.budgets.scholorship,
          services: response.data.budgets.services
          
        });
      })
      .catch(err => console.log(err.response));
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    let newBudgets = {
      various_department: this.state.various_department,
      transportation: this.state.transportation,
      staff_electricity: this.state.staff_electricity,
      solar_electricity: this.state.solar_electricity,
      rental_electricity: this.state.rental_electricity,
      insurance: this.state.insurance,
      mess: this.state.mess,
      hostel: this.state.hostel,
      sponsored_or_consultancy_account: this.state.sponsored_or_consultancy_account,
      scholorship: this.state.scholorship,
      services: this.state.services
      //redirect: false
    };
    console.log(newBudgets);

    axios
      .put("api/user/budgets", newBudgets)
      .then(
        (this.setState = {
          redirect: true
        })
      )
      .catch(err => console.log(err));

    alert("Budgets Updated");
  };
  render() {
    if (this.state.redirect) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <div>
        <Link to="/dashboard">
          <i className="material-icons back-button">arrow_back</i>
        </Link>
        
        <Container>
        <h3>Setup Your Budgets</h3>     
           <hr />
          <Form onSubmit={this.onSubmit}>
            <Row>
              <Col xs={12}>
                <Form.Label>Various_Departments</Form.Label>
                <Form.Control
                  type="number"
                  placeholder={this.state.various_department}
                  name="various_departments"
                  onChange={this.onChange}
                  step="0.01"
                />
              </Col>
            </Row>
            <br />
            <Row>
              <Col xs={12}>
                <Form.Label>Transportation</Form.Label>
                <Form.Control
                  type="number"
                  placeholder={this.state.transportation}
                  name="transportation"
                  onChange={this.onChange}
                  step="0.01"
                />
              </Col>
            </Row>
            <br />
            <Row>
              <Col xs={12}>
                <Form.Label>Staff_Electricity</Form.Label>
                <Form.Control
                  type="number"
                  placeholder={this.state.staff_electricity}
                  name="staff_electricity"
                  onChange={this.onChange}
                  step="0.01"
                />
              </Col>
            </Row>
            <br />
            <Row>
              <Col xs={12}>
                <Form.Label>Solar_Electricity</Form.Label>
                <Form.Control
                  type="number"
                  placeholder={this.state.solar_electricity}
                  name="solar_electricity"
                  onChange={this.onChange}
                  step="0.01"
                />
              </Col>
            </Row>
            <br />
            <Row>
              <Col xs={12}>
                <Form.Label>Rental_Electricity</Form.Label>
                <Form.Control
                  type="number"
                  placeholder={this.state.rental_electricity}
                  name="rental_electricity"
                  onChange={this.onChange}
                  step="0.01"
                />
              </Col>
            </Row>
            <br />
            <Row>
              <Col xs={12}>
                <Form.Label>Insurance</Form.Label>
                <Form.Control
                  type="number"
                  placeholder={this.state.insurance}
                  name="insurance"
                  onChange={this.onChange}
                  step="0.01"
                />
              </Col>
            </Row>
            <br />
            <Row>
              <Col xs={12}>
                <Form.Label>Mess</Form.Label>
                <Form.Control
                  type="number"
                  placeholder={this.state.mess}
                  name="mess"
                  onChange={this.onChange}
                  step="0.01"
                />
              </Col>
            </Row>
            <br />
            <Row>
              <Col xs={12}>
                <Form.Label>Hostel</Form.Label>
                <Form.Control
                  type="number"
                  placeholder={this.state.hostel}
                  name="hostel"
                  onChange={this.onChange}
                  step="0.01"
                />
              </Col>
            </Row>
            <br />
            <Row>
              <Col xs={12}>
                <Form.Label>Sponsored_or_Consultancy_Account</Form.Label>
                <Form.Control
                  type="number"
                  placeholder={this.state.sponsored_or_consultancy_account}
                  name="sponsored_or_consultancy_account"
                  onChange={this.onChange}
                  step="0.01"
                />
              </Col>
            </Row>
            <br />
            <Row>
              <Col xs={12}>
                <Form.Label>Scholorship</Form.Label>
                <Form.Control
                  type="number"
                  placeholder={this.state.scholorship}
                  name="scholorship"
                  onChange={this.onChange}
                  step="0.01"
                />
              </Col>
            </Row>
            <br />
            <Row>
              <Col xs={12}>
                <Form.Label>Services</Form.Label>
                <Form.Control
                  type="number"
                  placeholder={this.state.services}
                  name="services"
                  onChange={this.onChange}
                  step="0.01"
                />
              </Col>
            </Row>
            
            <br />
            <Button className="button-green" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default SetupBudgets;
