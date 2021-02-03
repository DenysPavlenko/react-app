import React from 'react';
import * as Yup from 'yup';
// Components
import { useFormik } from 'formik';
import Form from 'shared/components/form';
import FormGroup from 'shared/components/form-group';
import Input from 'shared/components/input';
import Button from 'shared/components/button';
import Image from 'shared/components/image';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Styles
import './styles.sass';
// Assets
import image from 'shared/assets/images/sign-in-slides/slide-1.png';

const validationSchema = Yup.object().shape({
  user: Yup.string().min(2, 'Must have a character').required(),
  password: Yup.string().min(1, 'Must have a character').required(),
});

const SignIn = ({ onSignIn }) => {
  const formik = useFormik({
    initialValues: {
      user: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      setSubmitting(true);
      setTimeout(() => {
        setSubmitting(false);
        resetForm();
        onSignIn(values);
      }, 1000);
    },
  });

  const { handleSubmit, touched, errors, handleChange, handleBlur, values, isSubmitting } = formik;

  return (
    <div className="sign-in">
      <Form className="sign-in__form" onSubmit={handleSubmit}>
        <FormGroup errorMsg={touched.user && errors.user}>
          <Input
            type="text"
            value={values.user}
            name="user"
            placeholder="User id"
            invalid={touched.user && errors.user}
            onChange={handleChange}
            onBlur={handleBlur}
            variant="light"
          />
        </FormGroup>
        <FormGroup errorMsg={touched.password && errors.password}>
          <Input
            type="password"
            value={values.password}
            name="password"
            placeholder="Password"
            invalid={touched.password && errors.password}
            onChange={handleChange}
            onBlur={handleBlur}
            variant="light"
          />
        </FormGroup>
        <Button type="submit" fluid variant="accent" disabled={isSubmitting}>Login</Button>
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
