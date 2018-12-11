import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-regular-svg-icons';

import IncomeAndSpend from "./Components/IncomeAndSpend";
import SpendLessCalculator from "./Components/SpendLessCalculator";

import "./styles/App.scss";

class App extends Component {
  state = {
    incomes: [
      {
        amount: 45300,
        from_age: 30,
        to_age: 67,
        frequency: "annual",
        name: "Annual salary"
      }
    ],
    expenditures: [
      {
        amount: 1199,
        from_age: 30,
        to_age: 65,
        frequency: "monthly",
        name: "Mortgage"
      },
      {
        amount: 1199,
        from_age: 30,
        to_age: 65,
        frequency: "monthly",
        name: "Bills"
      },
      {
        amount: 1199,
        from_age: 30,
        to_age: 65,
        frequency: "monthly",
        name: "General spending"
      }
    ]
  };

  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col sm="6" xs="12" className="App__card">
              <IncomeAndSpend />
            </Col>
            <Col sm="6" xs="12" className="App__card">
              <SpendLessCalculator/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

library.add(
  faThumbsUp,
  faThumbsDown
)

export default App;
