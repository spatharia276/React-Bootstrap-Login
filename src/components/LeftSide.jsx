import React from 'react';
import {Form, Button} from 'react-bootstrap';
const LeftSide = () => {
  return (
    <div>
      <br />
      <br />
      <br />
        <Form style={{width:"80%", marginLeft:"10%"}}>
          <Form.Group >
            <Form.Label>Enter your Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your Email" />
          </Form.Group>
          <Form.Group >
            <Form.Label>Enter your Password</Form.Label>
            <Form.Control type="password" placeholder="Enter your Pawwsord" />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
    </div>
  )
}

export default LeftSide