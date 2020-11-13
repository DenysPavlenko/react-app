import React from 'react';
// Layout
import Container from 'layout/container/container';
// Components
import SignIn from 'components/sign-in/sign-in';
// Styles
import './sign-in-page.sass';

const LoginPage = () => {
  return (
    <div className="sign-in-page">
      <Container>
        <SignIn />
      </Container>
    </div>
  );
};

export default LoginPage;
