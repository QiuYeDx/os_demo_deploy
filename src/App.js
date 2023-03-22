import React from 'react';
import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './views/Home';
import Work from './views/Work/Work';

const BasicRoute = () => (
      <Router>
          <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/work" element={<Work/>}/>
          </Routes>
      </Router>
);

export default BasicRoute;
