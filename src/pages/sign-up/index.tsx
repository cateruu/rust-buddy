import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';
import { useFormik } from 'formik';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FormEvent, useState } from 'react';
import FormInput from '../../components/FormInput/FormInput';
import { validationSchema } from './SignUp.helpers';
import styles from './SignUp.module.scss';

const SignUpPage = () => {
  const supabaseClient = useSupabaseClient();

  const initialValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const {
    values,
    handleChange,
    handleSubmit,
    errors,
    handleBlur,
    setFieldTouched,
    touched,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    validateOnBlur: true,
    onSubmit: () => {
      console.log('submit');
    },
  });

  const user = useUser();

  const router = useRouter();

  const signUpUser = async (event: FormEvent) => {
    event.preventDefault();

    // const { error } = await supabaseClient.auth.signUp({
    //   email: email,
    //   password: password,
    //   options: {
    //     data: {
    //       username: username,
    //     },
    //   },
    // });

    // if (error) {
    //   console.error(error);
    //   return;
    // }

    // router.push('/sign-in');
  };

  console.log(errors);

  return (
    <>
      <Head>
        <title>Rust Buddy - Sign up</title>
        <meta name='description' content='Sign up page for Rust Buddy app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.header}>Sign Up</h1>
        <form onSubmit={handleSubmit} noValidate>
          <FormInput
            label='Username'
            name='username'
            onChange={handleChange}
            onBlur={handleBlur}
            type='text'
            value={values.username}
            error={errors.username}
            setFieldTouched={setFieldTouched}
            touched={touched.username}
          />
          <FormInput
            label='Email'
            name='email'
            onChange={handleChange}
            type='email'
            value={values.email}
            onBlur={handleBlur}
            error={errors.email}
            touched={touched.email}
            setFieldTouched={setFieldTouched}
          />
          <FormInput
            label='Password'
            name='password'
            onChange={handleChange}
            type='password'
            value={values.password}
            onBlur={handleBlur}
            error={errors.password}
            touched={touched.password}
            setFieldTouched={setFieldTouched}
          />
          <FormInput
            label='Confirm Password'
            name='confirmPassword'
            onChange={handleChange}
            type='password'
            value={values.confirmPassword}
            onBlur={handleBlur}
            error={errors.confirmPassword}
            touched={touched.confirmPassword}
            setFieldTouched={setFieldTouched}
          />
          <button className={styles.button} type='submit'>
            Sign up
          </button>
        </form>
        <button
          className={styles.button}
          style={{ backgroundColor: '#4c4946' }}
        >
          Sign In with Google
        </button>
        <p className={styles.text}>
          Already have an account? <Link href='/sign-in'>Sign In</Link>
        </p>
        <p>{user?.user_metadata.username}</p>
      </main>
    </>
  );
};

export default SignUpPage;
