import React from "react";
import {
  Row,
  Col,
  FormGroup,
  Label,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const spendLessCalculator = props => {
  return (
    <Card>
      <CardHeader>Spend Less</CardHeader>
      <CardBody>
        <Row>
          <Col>
            <p className="text-center">
              Try reducing your monthly spending to see how your forecast could
              improve
            </p>
          </Col>
        </Row>
        {props.expenditures.map(expenditure => (
          <FormGroup key={expenditure.name} className="App__range">
            <Label className="font-weight-bold col-sm-6" for="mortgage">
              {expenditure.name}
            </Label>
            <div className="position-relative float-right col-sm-6">
              <span
                className="range-output"
                style={{ left: expenditure.amount / 15 + 10 }}
              >
                £{expenditure.amount}
              </span>
              <input
                type="range"
                className="range"
                name="amount"
                data-name={expenditure.name}
                value={expenditure.amount}
                min="0"
                max="2000"
                step="1"
                onChange={props.expenditureChange}
              />
            </div>
          </FormGroup>
        ))}

        <Row>
          <Col>
            <strong>
              This means you're saving{" "}
              <span className="text-secondary">£{props.savings} </span>per month
            </strong>
          </Col>
        </Row>
        <Row>
          <Col sm={{ size: "10", offset: 1 }}>
            <Button
              href="https://www.vouchedfor.co.uk/"
              target="_blank"
              outline
              block
              color="secondary"
              className="mt-3 font-weight-bold"
            >
              Find ways to save
            </Button>
          </Col>
        </Row>
      </CardBody>
      <CardFooter className={props.vote ? "show" : "hide"}>
        <Row>
          <Col sm={{ size: "9", offset: 3 }} className="text-right">
            <a href="#">Was this helpful?</a>
            <a
              href="#"
              className="text-secondary"
              onClick={() => props.voteClicked("yes")}
            >
              <FontAwesomeIcon icon={["far", "thumbs-up"]} />
            </a>
            <a href="#"
              onClick={() => props.voteClicked('no')}
            >
              <FontAwesomeIcon
                icon={["far", "thumbs-down"]}
                flip="horizontal"
              />
            </a>
          </Col>
        </Row>
      </CardFooter>
    </Card>
  );
};

export default spendLessCalculator;
