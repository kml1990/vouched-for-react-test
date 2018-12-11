import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-regular-svg-icons';
import data from './data';
 
import IncomeAndSpend from "./Components/IncomeAndSpend";
import SpendLessCalculator from "./Components/SpendLessCalculator";

import "./styles/App.scss";

class App extends Component {

  componentDidMount() {
    this.calculateSavings();
  }
  
  /* Read data from local storage if available, otherwise read it from data.js file */
  /* Assign additional properties to the state */
  state = JSON.parse(localStorage.getItem('data')) !== null ? Object.assign(JSON.parse(localStorage.getItem('data')), {savings: 0, showVote: true}) : Object.assign(data, {savings: 0, showVote: true});
  
  /* Calculate savings icome / 12 - all expenditures */
  calculateSavings = () => {

    /* Use reduce to get amout for each income */
    const income = this.state.incomes.reduce(function (total, income) {
      return total + parseInt(income.amount);
    }, 0) / 12;

    /* Use reduce to get amout for each expenditure */
    const expenditures = this.state.expenditures.reduce(function (total, expenditure) {
      return total + parseInt(expenditure.amount);
    }, 0);

    /* calculate savings (income tax is not icluded here) */
    const savings = parseInt(income - expenditures);
    
    this.setState({
      savings: savings
    })
  }

  /* Trigger expenditure change (text and range input) */
  onExpenditureChange = (e) => {
    /* Find index of the expenditure changed based on its data-name */
    const index = this.state.expenditures.findIndex(x => x.name === e.target.dataset.name);
    this.state.expenditures[index][e.target.name] = e.target.value;
    
    this.setState({
      expenditures: this.state.expenditures
    },() => {
       /* Save state in local storage */
      localStorage.setItem('data', JSON.stringify(this.state));
      /* calculate savings after state change*/
      this.calculateSavings();
    });
  }

  /* Trigger income change */
  onIncomeChange = (e) => {
    /* Find index of the income changed based on its data-name */
    const index = this.state.incomes.findIndex(x => x.name === e.target.dataset.name);
    this.state.incomes[index][e.target.name] = e.target.value;
    
    this.setState({
      incomes: this.state.incomes
    },() => {
      /* Save state in local storage */
      localStorage.setItem('data', JSON.stringify(this.state));
      /* calculate savings after state change */
      this.calculateSavings();
    });
  }

  /* Hide vote when clicked */
  onVoteClicked = (vote) => {
    console.log("voted for " + vote)
    this.setState({
      showVote: false
    })
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col sm="6" xs="12" className="App__card">
              <IncomeAndSpend 
                /* Pass incomes array to the widget */
                incomes={this.state.incomes} 
                /* Pass expenditures array to the widget */
                expenditures={this.state.expenditures}
                /* Pass onIncomeChange function to widget */
                incomeChange={this.onIncomeChange}
                /* Pass onExpenditureChange function to widget */
                expenditureChange={this.onExpenditureChange}
              />
            </Col>
            <Col sm="6" xs="12" className="App__card">
              <SpendLessCalculator 
              /* Pass expenditures array to the widget */
                expenditures={this.state.expenditures} 
                /* Pass calulated savings to the widget */
                savings={this.state.savings}
                /* Pass showVote to the widget */
                vote={this.state.showVote}
                /* Pass onExpenditureChange function to widget */
                expenditureChange={this.onExpenditureChange}
                /* Pass onVoteClicked function to widget */
                voteClicked={this.onVoteClicked}
                
              />
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
