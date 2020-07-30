import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer'
import MainPage from '../pages/MainPage'
import MainLoginPage from '../pages/MainLoginPage'
import PublicSignUpPage from '../pages/PublicSignUpPage'
import BusinessSignPage from '../pages/BusinessSignPage'
const App = () => {
  return (
    <>
      <Route component={Header} path="/header" />
      <Route component={Footer} path="/footer" />
      <Route component={MainPage} path="/main" />
      <Route component={MainLoginPage} path="/mainLogin" />
      <Route component={PublicSignUpPage} path="/pulicSign" />
      <Route component={BusinessSignPage} path="/businessSign" />
    </>
  );
};

export default App;