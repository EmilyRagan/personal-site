import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
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
      <Routes>
        <Route path='/resume' element={<Resume />} />
        <Route path='/senior-project' element={<SeniorProject />} />
        <Route path='/' element={<Navigate to='/resume' replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
