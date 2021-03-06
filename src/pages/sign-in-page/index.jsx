import React from 'react';
import { withRouter } from 'react-router-dom';
// Components
import SignIn from 'parts/sign-in';
import Image from 'components/image';
// Styles
import './styles.sass';
// Assets
import logo from 'assets/images/logo.png';

const SignInPage = ({ history }) => {
  return (
    <div className="sign-in-page">
      <div className="sign-in-page__logo">
        <Image src={logo} alt="logo" />
      </div>
      <div className="sign-in-page__wrap">
        <SignIn onSignIn={() => { history.push('/sports') }} />
      </div>
    </div>
  );
};

export default withRouter(SignInPage);
