import React from 'react';
import Header from '../components/common/Header'
import MainForm from '../components/common/MainForm'
import Footer from '../components/common/Footer'
import MainImageForm from '../components/common/MainImageForm'
import MainReviewForm from '../components/common/MainReviewForm'
import MainAuthImageForm from '../components/common/MainAuthImageForm'
const MainPage = () => {
    return (
        <>
          <Header/>
          <MainAuthImageForm/>
          <br/>
          <MainImageForm/>
          <br/>
          <MainForm/>
          <br/>
          <br/>
          <MainReviewForm/>
        </>
    );
};

export default MainPage;