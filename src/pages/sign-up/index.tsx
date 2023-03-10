import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import styles from './SignUp.module.scss';

const SignUpPage = () => {
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
        <form>
          <div className={styles.inputWrapper}>
            <label htmlFor='username' className={styles.label}>
              Username
            </label>
            <input
              id='username'
              name='username'
              type='text'
              className={styles.input}
            />
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor='email' className={styles.label}>
              Email
            </label>
            <input
              id='email'
              name='email'
              type='email'
              className={styles.input}
            />
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor='password' className={styles.label}>
              Password
            </label>
            <input
              id='password'
              name='password'
              type='password'
              className={styles.input}
            />
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor='confirmPassword' className={styles.label}>
              Confirm Password
            </label>
            <input
              id='confirmPassword'
              name='confirmPassword'
              type='password'
              className={styles.input}
            />
          </div>
          <button className={styles.button}>Sign up</button>
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
      </main>
    </>
  );
};

export default SignUpPage;
