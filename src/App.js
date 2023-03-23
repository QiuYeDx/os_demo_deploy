import React from 'react';
import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './views/Home';
import Demo1 from './views/Demo1/Demo1';

const BasicRoute = () => (
      <Router>
          <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/demo1" element={<Demo1/>}/>
          </Routes>
      </Router>
);

export default BasicRoute;
