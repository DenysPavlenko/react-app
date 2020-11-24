import React from 'react';
// Components
import Form from 'components/form/form';
import FormGroup from 'components/form-group/form-group';
import Input from 'components/input/input';
import Button from 'components/button/button';
import Image from 'components/image/image';
// Styles
import './sign-in.sass';
// Assets
import slide1 from 'assets/images/sign-in-slides/slide-1.png';

const SignIn = ({ onSignIn }) => {
  const handleSubmit = e => {
    e.preventDefault();
    onSignIn();
  };

  return (
    <div className="sign-in">
      <Form className="sign-in__form" onSubmit={handleSubmit}>
        <FormGroup>
          <Input type="email" placeholder="User id" />
        </FormGroup>
        <FormGroup>
          <Input type="password" placeholder="Password" />
        </FormGroup>
        <Button type="submit" fluid variant="accent">Login</Button>
      </Form>
      <div className="sign-in__slider">
        <Image src={slide1} alt="slide" />
      </div>
    </div>
  );
};

export default SignIn;
