import React from "react";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Button,
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
          <Row>
            <Col sm="6">
              <FormGroup className="mb-1">
                <Label for="annualSalary">Annual Salary</Label>
                <Input
                  type="text"
                  name="annualSalary"
                  id="annualSalary"
                  placeholder="£500,300"
                />
              </FormGroup>
            </Col>
            <Col sm="3">
              <FormGroup className="mb-1">
                <Label for="fromAge">From age</Label>
                <Input
                  type="text"
                  name="fromAge"
                  id="fromAge"
                  placeholder="26"
                />
              </FormGroup>
            </Col>
            <Col sm="3">
              <FormGroup className="mb-1">
                <Label for="toAge">To Age</Label>
                <Input type="text" name="toAge" id="toAge" placeholder="67" />
              </FormGroup>
            </Col>
          </Row>
          <h6 className="mb-1 mt-2 font-weight-bold">Monthly spending</h6>
          <Row>
            <Col sm="6">
              <FormGroup className="mb-1">
                <Label for="annualSalary">Annual Salary</Label>
                <Input
                  type="text"
                  name="annualSalary"
                  id="annualSalary"
                  placeholder="£500,300"
                />
              </FormGroup>
            </Col>
            <Col sm="3">
              <FormGroup className="mb-1">
                <Label for="fromAge">From age</Label>
                <Input
                  type="text"
                  name="fromAge"
                  id="fromAge"
                  placeholder="26"
                />
              </FormGroup>
            </Col>
            <Col sm="3">
              <FormGroup className="mb-1">
                <Label for="toAge">To Age</Label>
                <Input type="text" name="toAge" id="toAge" placeholder="67" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm="6">
              <FormGroup className="mb-1">
                <Label for="annualSalary">Annual Salary</Label>
                <Input
                  type="text"
                  name="annualSalary"
                  id="annualSalary"
                  placeholder="£500,300"
                />
              </FormGroup>
            </Col>
            <Col sm="3">
              <FormGroup className="mb-1">
                <Label for="fromAge">From age</Label>
                <Input
                  type="text"
                  name="fromAge"
                  id="fromAge"
                  placeholder="26"
                />
              </FormGroup>
            </Col>
            <Col sm="3">
              <FormGroup className="mb-1">
                <Label for="toAge">To Age</Label>
                <Input type="text" name="toAge" id="toAge" placeholder="67" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm="6">
              <FormGroup className="mb-1">
                <Label for="annualSalary">Annual Salary</Label>
                <Input
                  type="text"
                  name="annualSalary"
                  id="annualSalary"
                  placeholder="£500,300"
                />
              </FormGroup>
            </Col>
            <Col sm="3">
              <FormGroup className="mb-1">
                <Label for="fromAge">From age</Label>
                <Input
                  type="text"
                  name="fromAge"
                  id="fromAge"
                  placeholder="26"
                />
              </FormGroup>
            </Col>
            <Col sm="3">
              <FormGroup className="mb-1">
                <Label for="toAge">To Age</Label>
                <Input type="text" name="toAge" id="toAge" placeholder="67" />
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </CardBody>
    </Card>
  );
};

export default incomeAndSpend;
