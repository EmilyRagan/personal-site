import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import { Resume } from './Resume/Resume';
import { SeniorProject } from './SeniorProject/SeniorProject';

function App() {
  return (
    <BrowserRouter>
      <Navbar bg='dark' variant='dark'>
        <Navbar.Brand>Emily Ragan</Navbar.Brand>
        <Nav className='mr-auto'>
          <Nav.Link href='/resume'>Resume</Nav.Link>
          <Nav.Link href='/senior-project'>Senior Project</Nav.Link>
        </Nav>
      </Navbar>
      <Route path='/resume' component={Resume} />
      <Route path='/senior-project' component={SeniorProject} />
      <Route exact path='/'>
        <Redirect to='/resume' />
      </Route>
    </BrowserRouter>
  );
}

export default App;
