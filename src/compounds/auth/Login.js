import React, { useState, useContext, useEffect, Fragment } from 'react';
// import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';
import { Link } from 'react-router-dom';

const Login = (props) => {
  // const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);
  // const { setAlert } = alertContext;

  const { login, error, clearError, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/'); //redircated to homepage
    }
    if (error === 'Invalid Credentials') {
      // setAlert(error, 'danger');
      clearError();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { email, password } = user;
  const onChange = (e) =>
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  const onSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      // setAlert('Please fill in all fields', 'danger');
      console.log('not allow empty field');
    } else {
      login({
        email,
        password,
      });
    }
  };
  return (
    <Fragment>
      <div className='container mx-auto h-auto  flex flex-1 justify-center items-center'>
        <div className='w-full max-w-lg'>
          <div className='leading-loose'>
            <form
              onSubmit={onSubmit}
              className='max-w-xl m-4 p-10 bg-white rounded shadow-xl'>
              <h1 className='text-gray-800 text-center text-3xl   font-bold'>
                Account <span className=''>Login</span>
              </h1>
              <div className='mt-2'>
                <label className='block text-sm text-gray-600' htmlFor='email'>
                  Email
                </label>
                <input
                  type='email'
                  name='email'
                  value={email}
                  id='email'
                  required=''
                  placeholder='Email'
                  aria-label='email'
                  onChange={onChange}
                  className='w-full px-5 py-1 text-gray-700 bg-gray-200 rounded'
                />
              </div>
              <div className='mt-2'>
                <label
                  className='block text-sm text-gray-600'
                  htmlFor='password'>
                  Password
                </label>
                <input
                  type='password'
                  name='password'
                  id='password'
                  className='w-full px-5  py-1 text-gray-700 bg-gray-200 rounded'
                  value={password}
                  onChange={onChange}
                  required=''
                  placeholder='*******'
                  aria-label='password'
                />
              </div>
              <div className='mt-4 items-center justify-between'>
                <input
                  type='submit'
                  value='Login'
                  className='px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded'
                />{' '}
                <a
                  className='inline-block right-0 align-baseline  font-bold text-sm text-500 hover:text-blue-800'
                  href='/'>
                  Forgot Password?
                </a>
              </div>
              <Link
                className='inline-block right-0 align-baseline font-bold text-sm text-500 hover:text-blue-800'
                to='/register'>
                Not registered ?
              </Link>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
