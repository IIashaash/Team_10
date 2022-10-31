import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import setAuthToken from "../utils/setAuthtoken";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

export class Budgets extends Component {
  state = {
    user: {},
    budgets: {},
    transactions: [],
    Various_departments: {
      spent: 0,
      remaining: 0,
      limit: 0
    },
    transportation: {
      spent: 0,
      remaining: 0,
      limit: 0
    },
    staff_electricity: {
      spent: 0,
      remaining: 0,
      limit: 0
    },
    solar_elecricity: {
      spent: 0,
      remaining: 0,
      limit: 0
    },
    rental_electricity: {
      spent: 0,
      remaining: 0,
      limit: 0
    },
    insurance: {
      spent: 0,
      remaining: 0,
      limit: 0
    },
    mess: {
      spent: 0,
      remaining: 0,
      limit: 0
    },
    hostel: {
      spent: 0,
      remaining: 0,
      limit: 0
    },
    sponsered_or_consultancyaccount: {
      spent: 0,
      remaining: 0,
      limit: 0
    },
    scholorship: {
      spent: 0,
      remaining: 0,
      limit: 0
    },
    services: {
      spent: 0,
      remaining: 0,
      limit: 0
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
          transactions: response.data.transactions,
          Various_departments:{
            spent: 0,
            remaining:  response.data.budgets.Various_departments.toFixed(2),
            limit: response.data.budgets.Various_departments
          },
          transportation: {
            spent: 0,
            remaining: response.data.budgets.transportation,
            limit: response.data.budgets.transportation
          },
          staff_electricity: {
            spent: 0,
            remaining: response.data.budgets.staff_electricity,
            limit: response.data.budgets.staff_electricity
          },
          solar_elecricity: {
            spent: 0,
            remaining: response.data.budgets.solar_elecricity,
            limit: response.data.budgets.solar_elecricity
          },
          rental_electricity: {
            spent: 0,
            remaining: response.data.budgets.rental_electricity,
            limit: response.data.budgets.rental_electricity
          },
          insurance: {
            spent: 0,
            remaining: response.data.budgets.insurance,
            limit: response.data.budgets.insurance
          },
          mess: {
            spent: 0,
            remaining: response.data.budgets.mess,
            limit: response.data.budgets.mess
          },
          hostel: {
            spent: 0,
            remaining: response.data.budgets.hostel,
            limit: response.data.budgets.hostel
          },
          sponsered_or_consultancy: {
            spent: 0,
            remaining: response.data.budgets.sponsered_or_consultancy,
            limit: response.data.budgets.sponsered_or_consultancy
          },
          scolarship: {
            spent: 0,
            remaining: response.data.budgets.scolarship,
            limit: response.data.budgets.scolarship
          },
          services: {
            spent: 0,
            remaining: response.data.budgets.services,
            limit: response.data.budgets.services
          },
        });
        console.log(this.state.transactions.length)
        for (let i = 0; i < this.state.transactions.length; i++) {
          let currentCategory = this.state.transactions[
            i
          ].category.toLowerCase();
          console.table(this.state.transactions.length)
          let currentSpent =
            this.state[currentCategory].spent +
            parseFloat(this.state.transactions[i].amount);
          let currentLimit = this.state.budgets[currentCategory];
          let currentRemaining = currentLimit - currentSpent;
          console.log(currentRemaining.toFixed(2));
          this.setState({
            [currentCategory]: {
              spent: currentSpent,
              limit: currentLimit,
              // toFixed changes this amount to a string
              // This is okay in this situation because this is only going to the state and not the database
              remaining: currentRemaining.toFixed(2)
            }
          });
          // console.log(this.state[currentCategory]);
          console.log(i)
        }

        console.log(this.state.transactions.length);
      })
      .catch(err => console.log(err.response));
  }

  render() {
    return (
      <div>
        <h3>Budgets</h3>
        <hr />

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Category</th>
              <th>Spent</th>
              <th>Remaining</th>
              <th>Limit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Various Departments</td>
              <td>{this.state.Various_departments.spent}</td>
              <td>{this.state.Various_departments.remaining}</td>
              <td>{this.state.Various_departments.limit}</td>
            </tr>
            
            <tr>
              <td>Transportation</td>
              <td>{this.state.transportation.spent}</td>
              <td>{this.state.transportation.remaining}</td>
              <td>{this.state.transportation.limit}</td>
            </tr>
            <tr>
              <td>Staff Electricity</td>
              <td>{this.state.staff_electricity.spent}</td>
              <td>{this.state.staff_electricity.remaining}</td>
              <td>{this.state.staff_electricity.limit}</td>
            </tr>
            <tr>
              <td>Solar Electricity</td>
              <td>{this.state.solar_elecricity.spent}</td>
              <td>{this.state.solar_elecricity.remaining}</td>
              <td>{this.state.solar_elecricity.limit}</td>
            </tr>
            <tr>
              <td>Rental Electricity</td>
              <td>{this.state.rental_electricity.spent}</td>
              <td>{this.state.rental_electricity.remaining}</td>
              <td>{this.state.rental_electricity.limit}</td>
            </tr>
            <tr>
              <td>Insurance</td>
              <td>{this.state.insurance.spent}</td>
              <td>{this.state.insurance.remaining}</td>
              <td>{this.state.insurance.limit}</td>
            </tr>
            <tr>
              <td>Mess</td>
              <td>{this.state.mess.spent}</td>
              <td>{this.state.mess.remaining}</td>
              <td>{this.state.mess.limit}</td>
            </tr>
            <tr>
              <td>Hostel</td>
              <td>{this.state.hostel.spent}</td>
              <td>{this.state.hostel.remaining}</td>
              <td>{this.state.hostel.limit}</td>
            </tr>
            <tr>
              <td>Sponsered or Consultancy</td>
              <td>{this.state.sponsered_or_consultancyaccount.spent}</td>
              <td>{this.state.sponsered_or_consultancyaccount.remaining}</td>
              <td>{this.state.sponsered_or_consultancyaccount.limit}</td>
            </tr>
            <tr>
              <td>Scholorship</td>
              <td>{this.state.scholorship.spent}</td>
              <td>{this.state.scholorship.remaining}</td>
              <td>{this.state.scholorship.limit}</td>
            </tr>
            <tr>
              <td>Services</td>
              <td>{this.state.services.spent}</td>
              <td>{this.state.services.remaining}</td>
              <td>{this.state.services.limit}</td>
            </tr>
          </tbody>
        </Table>
        <Link to="edit-budgets">
          <Button variant="primary">Edit Budgets</Button>
        </Link>
      </div>
    );
  }
}

export default Budgets;
