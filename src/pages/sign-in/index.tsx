import React, { useState } from 'react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useFormik } from 'formik';
import { validationSchema } from './SignIn.helpers';
import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from './SignIn.module.scss';
import FormInput from '../../components/FormInput/FormInput';
import Link from 'next/link';
import CloseIcon from '../../assets/CloseIcon';

const SignInPage = () => {
  const supabaseClient = useSupabaseClient();

  const [error, setError] = useState('');

  const initialValues = {
    email: '',
    password: '',
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
    onSubmit: async () => {
      const { error } = await supabaseClient.auth.signInWithPassword({
        email: values.email,
        password: values.password,
      });

      if (error) {
        setError(error.message);
        return;
      }

      router.push('/');
    },
  });

  const router = useRouter();

  const handleGoogleSignUp = async () => {
    await supabaseClient.auth.signInWithOAuth({
      provider: 'google',
    });
  };

  return (
    <>
      <Head>
        <title>Rust Buddy - Sign in</title>
        <meta name='description' content='Sign in page for Rust Buddy app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.header}>Sign In</h1>
        {error && (
          <div className={styles.error}>
            <p>{error}</p>
            <div onClick={() => setError('')}>
              <CloseIcon />
            </div>
          </div>
        )}
        <form onSubmit={handleSubmit} noValidate>
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
          <button className={styles.button} type='submit'>
            Sign in
          </button>
        </form>
        <button
          className={styles.button}
          style={{ backgroundColor: '#4c4946' }}
          onClick={handleGoogleSignUp}
        >
          Sign In with Google
        </button>
        <p className={styles.text}>
          Don&apos;t have and account? <Link href='/sign-up'>Sign Up</Link>
        </p>
      </main>
    </>
  );
};

export default SignInPage;
