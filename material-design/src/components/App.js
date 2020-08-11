import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer'
import MainPage from '../pages/MainPage'
import PublicLoginPage from '../pages/PublicLoginPage'
import PublicSignUpPage from '../pages/PublicSignUpPage'
import BusinessLoginPage from '../pages/BusinessLoginPage'
import BusinessSignPage from '../pages/BusinessSignPage'
import ChoiceSignUpPage from '../pages/ChoiceSignUpPage'
import PaymentPage from '../pages/PaymentPage'


const App = () => {
  return (
    <>
      <Route component={Header} path="/header" />
      
      <Route component={Footer} path="/footer" />
      {/* 메인 화면 */}
      <Route component={MainPage} path="/main" />
      {/* 개인 로그인 페이지 */}
      <Route component={PublicLoginPage} path="/publicLogin" />
      {/* 사업자 로그인 페이지 */}
      <Route component={BusinessLoginPage} path="/businessLigin" />
      {/* 개인회원 가입페이지 */}
      <Route component={PublicSignUpPage} path="/pulicSign" />
      {/* 사업자 가입페이지 */}
      <Route component={BusinessSignPage} path="/businessSign" />
      {/* 가입 선택 페이지 */}
      <Route component={ChoiceSignUpPage} path="/choiceSign" />
      {/* 제품 상세 페이지 */}
      <Route component={PaymentPage} path="/payment" />
    </>
  );
};

export default App;