import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav'

const HomePage = () => {
  return (
    <>
    
    <Container className='w-50 rounded bg-dark text-light my-2 p-3'>
      <div className='text-center fw-bold fs-3'>
        Chat-App
      </div>
    </Container>
    <Container className='w-50 rounded bg-dark text-light my-2 p-4'>
      {/* <Form>
        <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form> */}
{/* 
<Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/chats">Active</Nav.Link>
 
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="one">Option 2</Nav.Link>
      
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="two">Option 3</Nav.Link>
      </Nav.Item>
    </Nav> */}
    <>
    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
  </li>
</ul>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"><Button>Hello</Button></div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"><Button>World</Button></div>
</div>
    </>
    </Container>
    </> 
  )
}

export default HomePage