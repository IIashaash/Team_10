import React, { Component } from "react";
import { Link } from "react-router-dom";
import setAuthToken from "../utils/setAuthtoken";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DatePicker from "react-date-picker";

export class AddTransaction extends Component {
  state = {
    user: {},
    amount: "",
    description: "",
    category: "Variour Departments",
    date: new Date(),
    startDate: new Date()
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
          user: response.data
        });
      })
      .catch(err => console.log(err.response));
  }

  onDateChange = date => {
    this.setState({
      date
    });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      amount: this.state.amount,
      description: this.state.description,
      category: this.state.category,
      date: this.state.date
    };

    axios
      .put("api/user/transactions", newTransaction)
      .then(console.log(newTransaction))
      .catch(err => console.log(err));

    alert("Transaction Added");

    window.location.reload(false);
  };

  render() {
    return (
      <div>
      <Link to="/dashboard">
          <i className="material-icons back-button">arrow_back</i>
        </Link>
      <Container>
      <h3>Add  Transaction</h3>
        <hr />
        <Form onSubmit={this.onSubmit}>
          <Row>
            <Col xs={12}>
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="number"
                step="0.01"
                placeholder="Amount"
                name="amount"
                onChange={this.onChange}
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs={12}>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder=" Various Departments, Solar electricity, Rental , etc..."
                name="description"
                onChange={this.onChange}
              />
            </Col>
          </Row>
          <br />

          <Row>
            <Col xs={12}>
              <Form.Label>Category</Form.Label>
              <Form.Control
                as="select"
                name="category"
                onChange={this.onChange}
              >
                <option>Various Departments</option>
                <option>Transportation</option>
                <option>Staff Electricity</option>
                <option>Solar Electricity</option>
                <option>Rental Electricity</option>
                <option>Insurance</option>
                <option>Mess</option>
                <option>Hostel</option>
                <option>Sponsored or Consultancy Account</option>
                <option>Scholorship</option>
                <option>Services</option>

              </Form.Control>
            </Col>
          </Row>
          <br />

          <Row>
            <Col xs={12}>
              <Form.Label>Date</Form.Label>
              <DatePicker
                selected={this.state.date}
                onChange={this.onDateChange}
                value={this.state.date}
                showTimeSelect
                showTimeSelectOnly
                dateFormat="h:mm aa"
              />
            </Col>
          </Row>
          <br />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
      </div>
    );
  }
}

export default AddTransaction;
