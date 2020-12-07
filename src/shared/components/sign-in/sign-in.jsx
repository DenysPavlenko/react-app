import React, { useState } from 'react';
// Helpers
import isInputValid from 'shared/utils/is-input-valid';
// Components
import Form from 'shared/components/form/form';
import FormGroup from 'shared/components/form-group/form-group';
import Input from 'shared/components/input/input';
import Button from 'shared/components/button/button';
import Image from 'shared/components/image/image';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Styles
import './sign-in.sass';
// Assets
import image from 'shared/assets/images/sign-in-slides/slide-1.png';

const initialForm = {
  user: '',
  userInvalid: false,
  password: '',
  passwordInvalid: false,
  formErrors: false
};

const SignIn = ({ onSignIn }) => {
  const [data, setData] = useState(initialForm);

  const handleInput = ({ target: { name, type, value } }) => {
    setData(data => ({
      ...data,
      [name]: value,
      [`${name}Invalid`]: data.formErrors && !isInputValid(type, value),
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const userInvalid = !isInputValid('text', user);
    const passwordInvalid = !isInputValid('password', password);
    setData(data => ({
      ...data,
      userInvalid,
      passwordInvalid,
      formErrors: userInvalid || passwordInvalid
    }));
    if (!userInvalid && !passwordInvalid) {
      setData(() => (initialForm))
      onSignIn();
    }
  };

  const { user, userInvalid, password, passwordInvalid } = data;

  return (
    <div className="sign-in">
      <Form className="sign-in__form" onSubmit={handleSubmit}>
        <FormGroup>
          <Input type="text" value={user} name="user" isInvalid={userInvalid} placeholder="User id" onChange={handleInput} />
        </FormGroup>
        <FormGroup>
          <Input type="password" value={password} name="password" isInvalid={passwordInvalid} placeholder="Password" onChange={handleInput} />
        </FormGroup>
        <Button type="submit" fluid variant="accent">Login</Button>
      </Form>

      <div className="sign-in__slider">
        <CarouselProvider
          naturalSlideWidth={1065}
          naturalSlideHeight={349}
          totalSlides={3}
          step={1}
          infinite={true}>
          <Slider>
            <Slide index={0}>
              <Image src={image} alt="slide" />
            </Slide>
            <Slide index={1}>
              <Image src={image} alt="slide" />
            </Slide>
            <Slide index={3}>
              <Image src={image} alt="slide" />
            </Slide>
          </Slider>
          <ButtonBack className="sign-in__slider-back"><FontAwesomeIcon icon="chevron-left" /></ButtonBack>
          <ButtonNext className="sign-in__slider-next"><FontAwesomeIcon icon="chevron-right" /></ButtonNext>
        </CarouselProvider>
      </div>
    </div>
  );
};

export default SignIn;
