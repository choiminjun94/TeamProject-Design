import React from 'react';
import BusinessLoginForm from '../components/common/BusinessLoginForm'
import PublicLoginForm from '../components/common/PublicLoginForm'

const MainLoginPage = () => {
    return (
        <>
            <PublicLoginForm/>
            <BusinessLoginForm/>

        </>
    );
};

export default MainLoginPage;