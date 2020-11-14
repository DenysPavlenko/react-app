import React from 'react';
import { withRouter } from 'react-router-dom';
// Layout
import Container from 'layout/container/container';
// Components
import SignIn from 'components/sign-in/sign-in';
// Styles
import './sign-in-page.sass';

const LoginPage = ({ history }) => {
  return (
    <div className="sign-in-page">
      <Container>
        <SignIn onSignIn={() => { history.push('/sports') }} />
      </Container>
    </div>
  );
};

export default withRouter(LoginPage);
