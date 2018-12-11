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

        <FormGroup className="App__range">
          <Label className="font-weight-bold col-sm-6" for="mortgage">
            Mortgage
          </Label>
          <input
            sm="6"
            type="range"
            id="mortgage"
            className="range col-sm-6"
            name="mortgage"
            value="15"
            min="0"
            max="20"
            step="1"
          />
        </FormGroup>

        <FormGroup className="App__range">
          <Label className="font-weight-bold col-sm-6" for="bills">
            Bills
          </Label>
          <input
            xs="6"
            type="range"
            id="bills"
            className="range col-sm-6"
            name="bills"
            value="15"
            min="0"
            max="20"
            step="1"
          />
        </FormGroup>

        <FormGroup className="App__range">
          <Label className="font-weight-bold col-sm-6" for="generalSpending">
            General Spending
          </Label>
          <input
            type="range"
            id="generalSpending"
            className="range col-sm-6"
            name="generalSpending"
            value="10"
            min="0"
            max="20"
            step="1"
          />
        </FormGroup>
        <Row>
          <Col>
            <strong>
              This means you're saving{" "}
              <span className="text-secondary">£230 </span>per month
            </strong>
          </Col>
        </Row>
        <Row>
          <Col sm={{ size: "10", offset: 1 }}>
            <Button
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
      <CardFooter>
        <Row>
          <Col sm={{ size: "9", offset: 3 }} className="text-right">
            <a href="#">Was this helpful?</a>
            <a href="#" className="text-secondary">
              <FontAwesomeIcon icon={["far", "thumbs-up"]} />
            </a>
            <a href="">
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
