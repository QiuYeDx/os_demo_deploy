import React from 'react';
import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './views/Home';
import Demo1 from './views/Demo1/Demo1';
import Demo2 from './views/Demo2/Demo2';

const BasicRoute = () => (
      <Router>
          <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/demo1" element={<Demo1/>}/>
              <Route exact path="/demo2" element={<Demo2/>}/>
          </Routes>
      </Router>
);

export default BasicRoute;
