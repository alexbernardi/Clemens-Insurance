import React from 'react';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';

import "./MessageForm.css";

function MessageForm() {

  return (
    <Form className='form-container'>
      <Form.Group id="forms" className="mb-3" controlId="formBasicFirstName">
        <Form.Control type="name" placeholder="First Name *" />
      </Form.Group>
      <Form.Group id="forms" className="mb-3" controlId="formBasicLastName">
        <Form.Control type="name" placeholder="Last Name *" />
      </Form.Group>
      <Form.Group id="forms" className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="E-Mail Address *" />
      </Form.Group>
      <Form.Group id="forms" className="mb-3" controlId="formBasicPhoneNumber">
        <Form.Control type="phone" placeholder="Phone Number *" />
      </Form.Group>
      <Form.Group id="forms" className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" placeholder="Message *" rows={3} />
      </Form.Group>

      <Button id='form-btn' variant="primary" type="submit">
        SEND MESSAGE
      </Button>
    </Form>
  );
}
export default MessageForm;