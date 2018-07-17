import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Badge } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';

import CardBackground from './card.png';

class ContactCard extends Component {
  render() {
    return (
      <div>
        <Container style={{ margin: 20 }}>
          <Row>
            <Col sm="12" md={{ size: 8, offset: 2 }}>
              <h2>
                <Badge style={{ borderRadius: 20 }}>Contact us</Badge>
              </h2>
              <Form>
                <FormGroup>
                  <Label for="exampleName">*Name</Label>
                  <Input
                    type="name"
                    name="name"
                    id="exampleName"
                    placeholder="Enter Your Name"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleEmail">*Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="Enter Your Email"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleText">Company/Position</Label>
                  <Input
                    type="text"
                    name="text"
                    id="exampleText"
                    placeholder="Enter Your Company/Position"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePhone">*Phone</Label>
                  <Input
                    type="phone"
                    name="phone"
                    id="examplePhone"
                    placeholder="Enter Your Phone"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleText">*Content</Label>
                  <Input type="textarea" name="text" id="exampleText" />
                </FormGroup>
                <Button>Submit</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ContactCard;
