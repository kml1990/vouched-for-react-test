import React from "react";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

const incomeAndSpend = props => {
  return (
    <Card>
      <CardHeader>Your Income & Spend</CardHeader>
      <CardBody>
        <Form>
          <h6 className="mb-1 font-weight-bold">Annual income</h6>
          {props.incomes.map(income => (
            <Row key={income.name}>
              <Col sm="6">
                <FormGroup className="mb-1">
                  <Label for="amount">{income.name}</Label>
                  <Input
                    type="text"
                    name="amount"
                    data-name={income.name}
                    value={income.amount}
                    onChange={props.incomeChange}
                  />
                </FormGroup>
              </Col>
              <Col sm="3">
                <FormGroup className="mb-1">
                  <Label for="from_age">From age</Label>
                  <Input
                    type="text"
                    name="from_age"
                    data-name={income.name}
                    value={income.from_age}
                    onChange={props.incomeChange}
                  />
                </FormGroup>
              </Col>
              <Col sm="3">
                <FormGroup className="mb-1">
                  <Label for="to_age">To Age</Label>
                  <Input
                    type="text"
                    name="to_age"
                    data-name={income.name}
                    value={income.to_age}
                    onChange={props.incomeChange}
                  />
                </FormGroup>
              </Col>
            </Row>
          ))}

          <h6 className="mb-1 mt-2 font-weight-bold">Monthly spending</h6>
          {props.expenditures.map(expenditure => (
            <Row key={expenditure.name}>
              <Col sm="6">
                <FormGroup className="mb-1">
                  <Label for="amount">{expenditure.name}</Label>
                  <Input
                    type="text"
                    name="amount"
                    data-name={expenditure.name}
                    value={expenditure.amount}
                    onChange={props.expenditureChange}
                  />
                </FormGroup>
              </Col>
              <Col sm="3">
                <FormGroup className="mb-1">
                  <Label for="from_age">From age</Label>
                  <Input
                    type="text"
                    name="from_age"
                    data-name={expenditure.name}
                    value={expenditure.from_age}
                    onChange={props.expenditureChange}
                  />
                </FormGroup>
              </Col>
              <Col sm="3">
                <FormGroup className="mb-1">
                  <Label for="to_age">To Age</Label>
                  <Input
                    type="text"
                    name="to_age"
                    data-name={expenditure.name}
                    value={expenditure.to_age}
                    onChange={props.expenditureChange}
                  />
                </FormGroup>
              </Col>
            </Row>
          ))}
        </Form>
      </CardBody>
    </Card>
  );
};

export default incomeAndSpend;
