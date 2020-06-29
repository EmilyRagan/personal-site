import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Resume } from './Resume/Resume';

function App() {
  return (
    <BrowserRouter>
      <Route path='/' component={Resume} />
    </BrowserRouter>
  );
}

export default App;
