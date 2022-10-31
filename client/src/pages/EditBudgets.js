import React, { Component } from "react";
import { Link } from "react-router-dom";
import setAuthToken from "../utils/setAuthtoken";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/table";

export class EditBudgets extends Component {
  state = {
    user: {},
    transactions: [],
    Various_Departments: {
      Paid: 0,
      remaining: 0,
      limit: 0,
      newValue: 0
    },
    transportation: {
      Paid: 0,
      remaining: 0,
      limit: 0,
      newValue: 0
    },
    staff_electricity: {
      Paid: 0,
      remaining: 0,
      limit: 0,
      newValue: 0
    },
    solar_electricity: {
      Paid: 0,
      remaining: 0,
      limit: 0,
      newValue: 0
    },
    rental_electricity: {
      Paid: 0,
      remaining: 0,
      limit: 0,
      newValue: 0
    },
    insurance: {
      Paid: 0,
      remaining: 0,
      limit: 0,
      newValue: 0
    },
    mess: {
      Paid: 0,
      remaining: 0,
      limit: 0,
      newValue: 0
    },
    hostel: {
      Paid: 0,
      remaining: 0,
      limit: 0,
      newValue: 0
    },
    sponsored_or_consultancy_account: {
      Paid: 0,
      remaining: 0,
      limit: 0,
      newValue: 0
    },
    scholorship: {
      Paid: 0,
      remaining: 0,
      limit: 0,
      newValue: 0
    },
    services: {
      Paid: 0,
      remaining: 0,
      limit: 0,
      newValue: 0
    }
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
          budgets: response.data.budgets,
          transactions: response.data.transactions
        });
        for (let i = 0; i < this.state.transactions.length; i++) {
          let currentCategory = this.state.transactions[
            i
          ].category.toLowerCase();
          let currentSpent =
            this.state[currentCategory].Paid +
            parseFloat(this.state.transactions[i].amount);
          let currentLimit = this.state.budgets[currentCategory];
          let currentRemaining = currentLimit - currentPaid;
          console.log(currentRemaining);
          this.setState({
            [currentCategory]: {
              Paid: currentPaidt,
              limit: currentLimit,
              remaining: currentRemaining
            }
          });
          console.log(this.state[currentCategory]);
        }

        console.log(this.state.transactions.length);
      })
      .catch(err => console.log(err.response));
  }

    onChange = e => {
        this.setState({
          [e.target.name]:{
            newValue: e.target.value
          }
        });
      };
  
  onSubmit = e =>{
     const newBudget = {
        budgets: {
            insurance: this.state.various_departments.newValue
        }
      }

      console.log(newBudget)
  }
  render() {
    return (
      <Form>
        <Container>
          <Row>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Paid</th>
                  <th>Remaining</th>
                  <th>Limit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Various_Departments</td>
                  <td>{this.state.various_departments.Paid}</td>
                  <td>{this.state.various_departments.remaining}</td>
                  <td>
                    <Form.Control
                      type="number"
                      step="0.01"
                      name="amount"
                      placeholder={this.state.various_departments.limit}
                      onChange={this.onChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Transportation</td>
                  <td>{this.state.transportation.Paid}</td>
                  <td>{this.state.transportation.remaining}</td>
                  <td>
                  <Form.Control
                      type="number"
                      step="0.01"
                      name="amount"
                      onChange={this.onChange}
                    />
                    </td>
                </tr>
                <tr>
                  <td>Staff_Electricity</td>
                  <td>{this.state.staff_electricity.Paid}</td>
                  <td>{this.state.staff_electricity.remaining}</td>
                  <td>
                  <Form.Control
                      type="number"
                      step="0.01"
                      name="amount"
                      onChange={this.onChange}
                    />
                    </td>
                </tr>
                <tr>
                  <td>Solar_Electricity</td>
                  <td>{this.state.solar_electricity.Paid}</td>
                  <td>{this.state.solar_electricity.remaining}</td>
                  <td>
                  <Form.Control
                      type="number"
                      step="0.01"
                      name="amount"
                      onChange={this.onChange}
                      placeholder={this.state.Various_Departments.limit}
                    />
                    </td>
                </tr>
                <tr>
                  <td>Rental_Electricity</td>
                  <td>{this.state.rental_electricity.Paid}</td>
                  <td>{this.state.rental_electricity.remaining}</td>
                  <td>
                  <Form.Control
                      type="number"
                      step="0.01"
                      name="amount"
                      onChange={this.onChange}
                    />
                      </td>
                </tr>
                <tr>
                  <td>Insurance</td>
                  <td>{this.state.insurance.Paid}</td>
                  <td>{this.state.insurance.remaining}</td>
                  <td>
                  <Form.Control
                      type="number"
                      step="0.01"
                      name="amount"
                      onChange={this.onChange}
                      placeholder={this.state.various_departments.limit}
                    />
                    </td>
                </tr>
                <tr>
                  <td>Mess</td>
                  <td>{this.state.mess.Paid}</td>
                  <td>{this.state.mess.remaining}</td>
                  <td>
                  <Form.Control
                      type="number"
                      step="0.01"
                      name="amount"
                      onChange={this.onChange}
                    />
                      </td>
                </tr>
                <tr>
                  <td>Hostel</td>
                  <td>{this.state.hostel.Paid}</td>
                  <td>{this.state.hostel.remaining}</td>
                  <td>
                  <Form.Control
                      type="number"
                      step="0.01"
                      name="amount"
                      onChange={this.onChange}
                    />
                    </td>
                </tr>
              </tbody>
            </Table>
            <Button variant="primary" type="submit">
            Submit
          </Button>
          </Row>
        </Container>
      </Form>
    );
  }
}

export default EditBudgets;
